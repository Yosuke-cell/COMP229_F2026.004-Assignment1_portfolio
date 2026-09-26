// gallery.js
document.addEventListener('DOMContentLoaded', () => {
    const thumbs = document.querySelectorAll('.thumb');
    const favoritesContainer = document.getElementById('favorites');
    const favMessage = document.getElementById('favMessage');
    const MAX_FAV = 5;
    const STORAGE_KEY = 'galleryFavorites';

    // Load favorites from sessionStorage
    function loadFavorites() {
        const raw = sessionStorage.getItem(STORAGE_KEY);
        if (!raw) return [];
        try {
            const arr = JSON.parse(raw);
            if (!Array.isArray(arr)) return [];
            arr.forEach(item => renderFavorite(item.src, item.title));
            return arr;
        } catch (e) {
            console.error('Failed to parse favorites', e);
            return [];
        }
    }

    // Save favorites array to sessionStorage
    function saveFavorites(list) {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    }

    // Render a favorite DOM node and wire remove behavior
    function renderFavorite(src, title) {
        const item = document.createElement('div');
        item.className = 'favorite-item';

        const img = document.createElement('img');
        img.src = src;
        img.alt = title || 'Favorite image';

        const actions = document.createElement('div');
        actions.className = 'fav-actions';

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.addEventListener('click', () => {
            // remove from DOM
            item.remove();
            // remove from storage
            const list = getFavorites();
            const idx = list.findIndex(f => f.src === src && f.title === title);
            if (idx !== -1) {
                list.splice(idx, 1);
                saveFavorites(list);
            }
            favMessage.textContent = '';
        });

        actions.appendChild(removeBtn);
        item.appendChild(img);
        item.appendChild(actions);
        favoritesContainer.appendChild(item);
    }

    function getFavorites() {
        const raw = sessionStorage.getItem(STORAGE_KEY);
        try { const arr = raw ? JSON.parse(raw) : []; return Array.isArray(arr) ? arr : []; }
        catch { return []; }
    }

    // Expose function for popup windows to call
    window.addToFavorites = function(imageUrl, title) {
        const list = getFavorites();
        if (list.length >= MAX_FAV) {
            // show the message as requested by the user
            favMessage.textContent = 'delete at least one photos';
            return false;
        }
        // add and persist
        const entry = { src: imageUrl, title: title || '' };
        list.push(entry);
        saveFavorites(list);
        renderFavorite(entry.src, entry.title);
        favMessage.textContent = '';
        return true;
    };

    // initialize existing favorites
    loadFavorites();

    thumbs.forEach(t => {
        t.addEventListener('click', () => {
            const src = t.getAttribute('data-src') || t.querySelector('img').src;
            const title = t.getAttribute('title') || '';
            // Open a small window showing the zoomed image and an Add button
            const popupHtml = `<!doctype html><html><head><meta charset="utf-8"><title>Zoom</title>
                <style>body{font-family:Arial,Helvetica,sans-serif;margin:0;padding:12px;text-align:center}
                img{max-width:90vw;height:auto;border-radius:6px}
                .actions{margin-top:12px}
                button{padding:8px 12px;border-radius:6px;border:1px solid #333;background:#fff;cursor:pointer}
                </style></head><body>
                <h3>${escapeHtml(title)}</h3>
                <img src="${src}" alt="${escapeHtml(title)}">
                <div class="actions">
                    <button id="addBtn">Add to Favorites</button>
                </div>
                <script>
                    const addBtn = document.getElementById('addBtn');
                    addBtn.addEventListener('click', () => {
                        if (window.opener && typeof window.opener.addToFavorites === 'function') {
                            const success = window.opener.addToFavorites('${src.replace(/'/g,"\\'")}', '${escapeJsString(title)}');
                            if (success) { alert('Added to favorites'); }
                            else { alert('delete at least one photos'); }
                        } else {
                            alert('Cannot communicate with parent window.');
                        }
                    });
                <\/script>
                </body></html>`;

            const popup = window.open('', '_blank', 'width=700,height=600');
            if (!popup) {
                favMessage.textContent = 'Please allow pop-ups to view the zoomed image.';
                return;
            }
            popup.document.write(popupHtml);
            popup.document.close();
        });
    });

    function escapeHtml(s) {
        return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
    }
    function escapeJsString(s){
        return String(s).replace(/\\/g,'\\\\').replace(/'/g,"\\'").replace(/\n/g,'\\n').replace(/\r/g,'\\r');
    }
});
