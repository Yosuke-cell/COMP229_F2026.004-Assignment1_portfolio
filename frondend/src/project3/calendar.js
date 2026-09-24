/*
   The Progress Restaurant
   Order Calendar JavaScript
   
   This file manages the calendar display and order placement
   using arrays to populate order data with:
   - Food/meal names
   - Prices for each item
   - Customer names
   - Delivery options (Take-away or Eat-in)
   
   Filename: calendar.js
*/

// Arrays for food/meal items with prices
const foodItems = [
   { name: "1/2 Chicken", price: 19.89, description: "With 2 Sides" },
   { name: "1/4 Chicken Breast Wing", price: 17.29, description: "With 2 Sides" },
   { name: "1/4 Chicken Leg Thigh", price: 14.29, description: "With 1 Side" },
   { name: "Full Chicken", price: 34.99, description: "With 3 Sides" },
   { name: "Spicy Shrimp Pasta", price: 18.99, description: "Italian-Japanese Fusion" },
   { name: "Teriyaki Ramen", price: 16.99, description: "Noodles in special sauce" },
   { name: "Fusion Burger", price: 15.99, description: "Asian-inspired burger" }
];

// Arrays for sample orders (customer name, date, food, price, quantity, delivery option)
const sampleOrders = [
   {
      customerName: "John Smith",
      date: "2024-08-05",
      food: "1/2 Chicken",
      price: 19.89,
      quantity: 1,
      deliveryOption: "Take-away"
   },
   {
      customerName: "Maria Garcia",
      date: "2024-08-05",
      food: "Spicy Shrimp Pasta",
      price: 18.99,
      quantity: 2,
      deliveryOption: "Eat-in"
   },
   {
      customerName: "David Lee",
      date: "2024-08-10",
      food: "Full Chicken",
      price: 34.99,
      quantity: 1,
      deliveryOption: "Take-away"
   },
   {
      customerName: "Sarah Johnson",
      date: "2024-08-10",
      food: "Teriyaki Ramen",
      price: 16.99,
      quantity: 3,
      deliveryOption: "Eat-in"
   },
   {
      customerName: "Ahmed Hassan",
      date: "2024-08-15",
      food: "1/4 Chicken Breast Wing",
      price: 17.29,
      quantity: 2,
      deliveryOption: "Take-away"
   },
   {
      customerName: "Emma Wilson",
      date: "2024-08-20",
      food: "Fusion Burger",
      price: 15.99,
      quantity: 4,
      deliveryOption: "Eat-in"
   },
   {
      customerName: "Michael Brown",
      date: "2024-08-22",
      food: "Spicy Shrimp Pasta",
      price: 18.99,
      quantity: 1,
      deliveryOption: "Take-away"
   },
   {
      customerName: "Lisa Chen",
      date: "2024-08-25",
      food: "1/2 Chicken",
      price: 19.89,
      quantity: 2,
      deliveryOption: "Eat-in"
   },
   {
      customerName: "James Patrick",
      date: "2024-08-28",
      food: "Full Chicken",
      price: 34.99,
      quantity: 1,
      deliveryOption: "Take-away"
   },
   {
      customerName: "Nina Patel",
      date: "2024-08-30",
      food: "Teriyaki Ramen",
      price: 16.99,
      quantity: 2,
      deliveryOption: "Eat-in"
   }
];

let orders = [...sampleOrders];
let selectedDate = null;

const monthNames = [
   "January", "February", "March", "April", "May", "June",
   "July", "August", "September", "October", "November", "December"
];

function generateCalendar(year, month) {
   const firstDay = new Date(year, month, 1).getDay();
   const daysInMonth = new Date(year, month + 1, 0).getDate();
   const daysInPrevMonth = new Date(year, month, 0).getDate();

   const calendarBody = document.getElementById("calendarBody");
   const calendarCaption = document.getElementById("calendarCaption");
   
   calendarBody.innerHTML = "";
   calendarCaption.textContent = monthNames[month] + " " + year;

   let date = 1;
   let nextMonthDate = 1;

   for (let i = 0; i < 6; i++) {
      const row = document.createElement("tr");

      for (let j = 0; j < 7; j++) {
         const cell = document.createElement("td");
         
         if (i === 0 && j < firstDay) {
            const prevDate = daysInPrevMonth - firstDay + j + 1;
            cell.textContent = prevDate;
            cell.classList.add("otherMonth");
         } else if (date > daysInMonth) {
            cell.textContent = nextMonthDate;
            cell.classList.add("otherMonth");
            nextMonthDate++;
         } else {
            cell.textContent = date;
            cell.classList.add("currentMonth");
            
            const dateString = year + "-" + String(month + 1).padStart(2, "0") + "-" + String(date).padStart(2, "0");
            cell.setAttribute("data-date", dateString);
            
            // Check if there are orders on this date
            const ordersOnDate = orders.filter(order => order.date === dateString);
            if (ordersOnDate.length > 0) {
               cell.classList.add("hasOrders");
               cell.title = ordersOnDate.length + " order(s) on this date";
            }
            
            cell.addEventListener("click", function() {
               selectDate(this);
            });
            
            date++;
         }

         row.appendChild(cell);
      }

      calendarBody.appendChild(row);
      
      if (date > daysInMonth && nextMonthDate > 1) {
         break;
      }
   }
}

function selectDate(cell) {
   const previousSelected = document.querySelector(".selectedDate");
   if (previousSelected) {
      previousSelected.classList.remove("selectedDate");
   }

   cell.classList.add("selectedDate");
   selectedDate = cell.getAttribute("data-date");
   
   const dateField = document.getElementById("selectedDate");
   dateField.value = new Date(selectedDate).toLocaleDateString();
   
   // Display orders for this date
   displayOrdersForDate(selectedDate);
}

function displayOrdersForDate(dateStr) {
   const ordersDisplay = document.getElementById("ordersDisplay");
   const ordersOnDate = orders.filter(order => order.date === dateStr);
   
   if (ordersOnDate.length === 0) {
      ordersDisplay.innerHTML = `<p class="no-orders">No orders for ${new Date(dateStr).toLocaleDateString()}. You can place a new order below!</p>`;
      return;
   }

   let html = `<div class="date-header">📅 Orders for ${new Date(dateStr).toLocaleDateString()}</div>`;
   html += '<div class="orders-container">';

   ordersOnDate.forEach((order, index) => {
      const totalPrice = (order.price * order.quantity).toFixed(2);
      const deliveryIcon = order.deliveryOption === "Take-away" ? "🚗" : "🍽️";
      
      html += `
         <div class="order-item">
            <div class="order-number">#${index + 1}</div>
            <div class="order-details">
               <p><strong>👤 Customer:</strong> ${order.customerName}</p>
               <p><strong>🍽️ Meal:</strong> ${order.food}</p>
               <p><strong>💰 Price per item:</strong> $${order.price.toFixed(2)}</p>
               <p><strong>📦 Quantity:</strong> ${order.quantity}</p>
               <p><strong>💵 Total:</strong> $${totalPrice}</p>
               <p><strong>${deliveryIcon} Option:</strong> ${order.deliveryOption}</p>
            </div>
         </div>
      `;
   });

   html += '</div>';
   ordersDisplay.innerHTML = html;
}

function updatePriceField() {
   const foodSelect = document.getElementById("foodItem");
   const priceField = document.getElementById("price");
   
   if (foodSelect.value) {
      const [foodName, price] = foodSelect.value.split("|");
      priceField.value = "$" + price;
   } else {
      priceField.value = "";
   }
}

function placeOrder(event) {
   event.preventDefault();

   if (!selectedDate) {
      alert("Please select a delivery date from the calendar!");
      return;
   }

   const foodSelect = document.getElementById("foodItem");
   const [foodName, price] = foodSelect.value.split("|");
   const quantity = parseInt(document.getElementById("quantity").value);
   const customerName = document.getElementById("customerName").value;
   const deliveryOption = document.getElementById("deliveryOption").value;

   const newOrder = {
      customerName: customerName,
      date: selectedDate,
      food: foodName,
      price: parseFloat(price),
      quantity: quantity,
      deliveryOption: deliveryOption
   };

   orders.push(newOrder);
   
   // Regenerate calendar to show new order date highlighted
   const monthYearValue = document.getElementById("monthYear").value;
   const [year, month] = monthYearValue.split("-");
   generateCalendar(parseInt(year), parseInt(month) - 1);
   
   // Display the new order
   displayOrdersForDate(selectedDate);
   
   // Reset form
   document.getElementById("orderFormElement").reset();
   document.getElementById("selectedDate").value = "";
   document.getElementById("price").value = "";
   
   // Remove selection from calendar
   document.querySelectorAll(".selectedDate").forEach(el => {
      el.classList.remove("selectedDate");
   });
   
   alert(`Order placed successfully!\n\n👤 Customer: ${customerName}\n🍽️ Meal: ${foodName}\n📦 Quantity: ${quantity}\n${deliveryOption === "Take-away" ? "🚗" : "🍽️"} Option: ${deliveryOption}`);
}

document.addEventListener("DOMContentLoaded", () => {
   // Initialize calendar with August 2024
   generateCalendar(2024, 7);
   
   // Display initial message
   const ordersDisplay = document.getElementById("ordersDisplay");
   ordersDisplay.innerHTML = `<p class="no-orders">Click a date on the calendar to view orders or place a new one.</p>`;

   // Month selector event listener
   const monthYearSelect = document.getElementById("monthYear");
   monthYearSelect.addEventListener("change", function() {
      const [year, month] = this.value.split("-");
      generateCalendar(parseInt(year), parseInt(month) - 1);
      ordersDisplay.innerHTML = `<p class="no-orders">Click a date on the calendar to view orders or place a new one.</p>`;
   });

   // Food item price auto-fill
   document.getElementById("foodItem").addEventListener("change", updatePriceField);

   // Form submission
   document.getElementById("orderFormElement").addEventListener("submit", placeOrder);
});
