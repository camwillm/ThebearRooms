import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import L from "leaflet";
import TopNav from "../components/TopNav";
import "leaflet/dist/leaflet.css";
import "./Map.scss";

// Fix Leaflet default icon broken in Vite
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const makeIcon = (color: string) =>
    new L.Icon({
        iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-${color}.png`,
        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
    });

const icons: Record<string, L.Icon> = {
    Academic: makeIcon("blue"),
    Dining: makeIcon("orange"),
    Housing: makeIcon("green"),
    Safety: makeIcon("red"),
    Recreation: makeIcon("violet"),
};

interface Location {
    name: string;
    lat: number;
    lng: number;
    category: "Academic" | "Dining" | "Housing" | "Safety" | "Recreation";
    description: string;
}

const CAMPUS_LAT = 39.3429;
const CAMPUS_LNG = -76.5839;

const locations: Location[] = [
    // Academic
    { name: "Truth Hall", lat: 39.3440, lng: -76.5844, category: "Academic", description: "Administrative offices and classrooms" },
    { name: "Murphy Fine Arts Center", lat: 39.3447, lng: -76.5835, category: "Academic", description: "Fine arts, music, and theater" },
    { name: "Jenkins Hall", lat: 39.3435, lng: -76.5855, category: "Academic", description: "Engineering & computer science building" },
    { name: "McMechen Hall", lat: 39.3425, lng: -76.5830, category: "Academic", description: "Social sciences classrooms" },
    { name: "Soper Library", lat: 39.3432, lng: -76.5848, category: "Academic", description: "Main campus library" },
    { name: "Montebello Complex", lat: 39.3415, lng: -76.5820, category: "Academic", description: "Lecture halls and labs" },
    // Dining
    { name: "Dining Hall (Harper-Tubman)", lat: 39.3450, lng: -76.5860, category: "Dining", description: "Main campus dining hall" },
    { name: "Student Center Café", lat: 39.3438, lng: -76.5840, category: "Dining", description: "Coffee, snacks, and quick bites" },
    { name: "Thurgood Marshall Student Center", lat: 39.3438, lng: -76.5840, category: "Academic", description: "Student union, events, and services" },
    // Housing
    { name: "Cummings House", lat: 39.3455, lng: -76.5870, category: "Housing", description: "Freshman residence hall" },
    { name: "Baldwin Hall", lat: 39.3460, lng: -76.5855, category: "Housing", description: "Upperclassman residence hall" },
    { name: "Rawlings Hall", lat: 39.3452, lng: -76.5845, category: "Housing", description: "Residence hall" },
    // Safety
    { name: "Campus Police HQ", lat: 39.3422, lng: -76.5850, category: "Safety", description: "Morgan State University Police Department — 24/7" },
    { name: "Emergency Call Box A", lat: 39.3442, lng: -76.5862, category: "Safety", description: "Blue light emergency call box" },
    { name: "Emergency Call Box B", lat: 39.3418, lng: -76.5828, category: "Safety", description: "Blue light emergency call box" },
    { name: "Health Center", lat: 39.3430, lng: -76.5835, category: "Safety", description: "Student health and wellness services" },
    // Recreation
    { name: "Hill Field House", lat: 39.3410, lng: -76.5845, category: "Recreation", description: "Basketball arena and fitness center" },
    { name: "Hughes Stadium", lat: 39.3405, lng: -76.5860, category: "Recreation", description: "Football stadium" },
    { name: "Talmadge L. Hill Field", lat: 39.3408, lng: -76.5870, category: "Recreation", description: "Track and field" },
];

const categories = ["All", "Academic", "Dining", "Housing", "Safety", "Recreation"] as const;

const Map = () => {
    const [filter, setFilter] = useState<string>("All");

    const filtered = filter === "All" ? locations : locations.filter((l) => l.category === filter);

    return (
        <div className="map-wrapper">
            <TopNav />
            <div className="map-header">
                <h2>Campus Map</h2>
                <p>Morgan State University — Baltimore, MD</p>
            </div>

            <div className="map-filters">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        className={`filter-chip filter-${cat.toLowerCase()} ${filter === cat ? "active" : ""}`}
                        onClick={() => setFilter(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="map-legend">
                {(["Academic","Dining","Housing","Safety","Recreation"] as const).map((cat) => (
                    <span key={cat} className={`legend-item legend-${cat.toLowerCase()}`}>{cat}</span>
                ))}
            </div>

            <div className="map-container">
                <MapContainer
                    center={[CAMPUS_LAT, CAMPUS_LNG]}
                    zoom={15}
                    minZoom={14}
                    maxZoom={18}
                    maxBounds={[[39.330, -76.600], [39.358, -76.568]]}
                    maxBoundsViscosity={1.0}
                    style={{ height: "480px", width: "100%" }}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    <Circle
                        center={[CAMPUS_LAT, CAMPUS_LNG]}
                        radius={400}
                        pathOptions={{ color: "#1e3a8a", fillColor: "#3b82f6", fillOpacity: 0.08 }}
                    />

                    {filtered.map((loc, i) => (
                        <Marker
                            key={i}
                            position={[loc.lat, loc.lng]}
                            icon={icons[loc.category]}
                        >
                            <Popup>
                                <strong>{loc.name}</strong>
                                <br />
                                <small style={{ color: "#666" }}>{loc.category}</small>
                                <br />
                                {loc.description}
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>
        </div>
    );
};

export default Map;
