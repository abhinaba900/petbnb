import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css"; // Import the Mapbox CSS

mapboxgl.accessToken =
  "pk.eyJ1IjoiYWJoaW5hYmExOTk5IiwiYSI6ImNsdzdpYTc2eDF6MGoyaXRmY3o4OGkwYXUifQ.X90UD4_7qiX8v8NjsHXceA";
function MapContainer() {
  const mapContainer = useRef(null); // Reference to the map container div
  const map = useRef(null); // Reference to the map instance
  const [lng, setLng] = useState(-95.712891); // Longitude (Initial value is for Delhi)
  const [lat, setLat] = useState(37.09024); // Latitude (Initial value is for Delhi)
  const [zoom, setZoom] = useState(4); // Zoom level

  useEffect(() => {
    if (map.current) return; // Initialize map only once

    map.current = new mapboxgl.Map({
      container: mapContainer.current, // Container ID
      style: "mapbox://styles/mapbox/streets-v11", // Map style
      center: [lng, lat], // Starting position [lng, lat]
      zoom: zoom, // Starting zoom
    });

    // Event listener for map movements
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  }, []);

  return (
    <div
      
      data-aos="fade-in"
      data-aos-offset="0"
      data-aos-easing="ease-in-sine"
      data-aos-duration="800"
    >
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}

export default MapContainer;
