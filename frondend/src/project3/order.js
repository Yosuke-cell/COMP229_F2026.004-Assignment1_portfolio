// order.js

document.addEventListener("DOMContentLoaded", function () {
    const TAX_RATE = 0.13;
    const calculateBtn = document.getElementById("calculateBtn");
    const checkboxes = document.querySelectorAll(".item-checkbox");

    const itemTotalEl = document.getElementById("itemTotal");
    const taxAmountEl = document.getElementById("taxAmount");
    const totalWithTaxEl = document.getElementById("totalWithTax");

    calculateBtn.addEventListener("click", function () {
        let subtotal = 0;

        checkboxes.forEach(cb => {
            if (cb.checked) {
                const price = parseFloat(cb.getAttribute("data-price"));
                subtotal += price;
            }
        });

        const tax = subtotal * TAX_RATE;
        const total = subtotal + tax;

        itemTotalEl.textContent = `$${subtotal.toFixed(2)}`;
        taxAmountEl.textContent = `$${tax.toFixed(2)}`;
        totalWithTaxEl.textContent = `$${total.toFixed(2)}`;
    });
});
