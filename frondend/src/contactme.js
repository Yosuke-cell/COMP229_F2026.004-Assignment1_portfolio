document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault();
  var name = document.getElementById("name").value;
  document.getElementById("message").textContent = "Thank you, " + name + "! Your message has been received.";
  this.reset();
});
