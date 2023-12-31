"use client";
import Map, {
  NavigationControl,
  GeolocateControl,
  Marker,
  FullscreenControl,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Event } from "@/interface";
import { EventLocation } from "@/interface";
import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";

export default function MapAllLocation({
  AllEvent,
  onMarckerClicked,
}: {
  AllEvent: EventLocation[];
  onMarckerClicked: Function;
}) {
  const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

  const mapStyle = {
    width: "100%",
    height: "100%",
  };

  console.log("AllEvent", AllEvent);

  const markers = useMemo(() => {
    return AllEvent.map((event) => (
      <Marker
        key={event.id}
        longitude={event.longitude}
        latitude={event.latitude}
        color="red"
        onClick={() => {
          onMarckerClicked(event.id);
        }}
      />
    ));
  }, [AllEvent]);

  const { resolvedTheme } = useTheme();
  const [theme, setTheme] = useState(resolvedTheme);
  useEffect(() => {
    if (resolvedTheme === "dark") {
      setTheme("mapbox://styles/mapbox/navigation-night-v1");
    } else {
      setTheme("mapbox://styles/mapbox/streets-v12");
    }
  }, [resolvedTheme]);

  return (
    <div className="w-[100%] h-[100%] flex items-center justify-center">
      <Map
        mapboxAccessToken={mapboxToken}
        mapStyle={theme}
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

        {markers}
      </Map>
    </div>
  );
}
