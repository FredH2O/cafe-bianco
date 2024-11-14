import React from "react";
import { MapContainer, Popup, Marker, TileLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Configure the default icon for Leaflet
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

export default function MapComponent() {
  const position = [53.34309471187324, -6.27677205459757];
  const zoomLevel = 20;

  return (
    <div className="container" style={{ height: "350px", width: "100%" }}>
      <MapContainer
        center={position}
        zoom={zoomLevel}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position}>
          <Popup>Café Bianco</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
