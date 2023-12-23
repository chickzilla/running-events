"use client";
import Map, {
  NavigationControl,
  GeolocateControl,
  Marker,
  FullscreenControl,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Event } from "@/interface";

export default function MapAllLocation({ AllEvent }: { AllEvent: Event[] }) {
  const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

  const mapStyle = {
    width: "100%",
    height: "100%",
  };
  return (
    <div className="w-[100%] h-[100%] flex items-center justify-center">
      <Map
        mapboxAccessToken={mapboxToken}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        initialViewState={{
          latitude: 13.7563, // Latitude of Bangkok
          longitude: 100.5018, // Longitude of Bangkok
          zoom: 10,
        }}
        maxZoom={20}
        minZoom={3}
        style={mapStyle}
      >
        <FullscreenControl position="top-right" />
        <GeolocateControl position="top-right" />
        <NavigationControl position="top-right" />

        {AllEvent.map((event) => (
          <Marker
            key={event.id}
            longitude={event.longitude}
            latitude={event.latitude}
            color="red"
          />
        ))}
      </Map>
    </div>
  );
}
