$(document).ready(function() {
    $('#search-btn').click(function() {
        var keyword = $('#meal-keyword').val();

        if (keyword.trim() === '') {
            alert('Please enter a keyword!');
            return;
        }

        $.ajax({
            url: 'archives.pl',
            type: 'GET',
            data: { skey: keyword },
            success: function(response) {
                $('#archive-results').html(response);
            },
            error: function(xhr, status, error) {
                console.error("Error: ", error);
                $('#archive-results').html('<p style="color:red;">Error loading search results.</p>');
            }
        });

        var giphyApiKey = 'daLZPssolA2isHAQS61T8cE8SkHucK6J';
        var giphyUrl = 'https://api.giphy.com/v1/gifs/search?api_key=' + giphyApiKey + '&q=' + encodeURIComponent(keyword) + '&limit=3';

        $.getJSON(giphyUrl, function(data) {
            $('#giphy-results').empty();
            $.each(data.data, function(index, gif) {
                $('#giphy-results').append('<img src="' + gif.images.fixed_height.url + '" style="height:120px; border-radius:8px;">');
            });
        });
    });
});