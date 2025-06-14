
import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Leaflet's default marker images need to be handled in a real project for correct display

const Map: React.FC<{ center: { lat: number; lng: number } }> = ({ center }) => {
  return (
    <div className="w-full h-64 rounded-xl overflow-hidden shadow border border-border">
      <MapContainer center={center} zoom={15} scrollWheelZoom={false} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
        />
        <Marker position={center} />
      </MapContainer>
    </div>
  );
};

export default Map;
