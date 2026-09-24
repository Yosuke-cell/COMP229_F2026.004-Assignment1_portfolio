let map;
let directionsService;
let directionsRenderer;

const restaurantLocation = { lat: 43.7852, lng: -79.2282 };
const userLocation = { lat: 43.7744, lng: -79.2578 };

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: restaurantLocation,
  });

  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer({
    map: map,
  });

  const marker = new google.maps.Marker({
    position: restaurantLocation,
    map: map,
    title: "Centennial Restaurant",
  });

  const infoWindow = new google.maps.InfoWindow({
    content: "<strong>Centennial Restaurant</strong><br>Welcome to our location!",
  });

  marker.addListener("click", () => {
    infoWindow.open(map, marker);
  });

  calculateAndDisplayRoute("DRIVING");

  setupModeButtons();
}

function calculateAndDisplayRoute(selectedMode) {
  const request = {
    origin: userLocation,
    destination: restaurantLocation,
    travelMode: google.maps.TravelMode[selectedMode], // DRIVING, WALKING, TRANSIT
  };

  directionsService.route(request, (result, status) => {
    const routeInfoBox = document.getElementById("routeInfo");

    if (status === "OK") {
      directionsRenderer.setDirections(result);
      
      const route = result.routes[0].legs[0];
      routeInfoBox.innerHTML = `<strong>${selectedMode} Route:</strong> Distance: ${route.distance.text} | Duration: ${route.duration.text}`;
    } else {
      routeInfoBox.innerHTML = `Could not calculate ${selectedMode} route. (Status: ${status})`;
    }
  });
}

function setupModeButtons() {
  const buttons = document.querySelectorAll(".mode-btn");

  buttons.forEach((btn) => {
    btn.addEventListener("click", function () {
      buttons.forEach((b) => b.classList.remove("active"));
      this.classList.add("active");

      const mode = this.getAttribute("data-mode");
      calculateAndDisplayRoute(mode);
    });
  });
}