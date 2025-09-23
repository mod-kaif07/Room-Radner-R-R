// Get token and coordinates from EJS
const mapToken = window.mapData.token;
const coordinates = window.mapData.coordinates;

// Initialize Mapbox
mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: coordinates,
  zoom: 9
});

// Add marker
new mapboxgl.Marker()
  .setLngLat(coordinates)
  .addTo(map);
