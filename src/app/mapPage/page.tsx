"use client";

import MapAllLocation from "@/components/GGMap/MapAllLocation";
import MapAllCard from "@/components/GGMap/MapAllCard";
import eventDetail from "@/data/eventsDetail";
import { useState, useEffect } from "react";
import { Event } from "@/interface";

const eventDetailData = eventDetail;

export default function MapPage() {
  const [eventDetailId, setEventDetailId] = useState<string | null>(null);

  return (
    <main className="bg-neutral-100 w-[100vw] h-[100vh] pt-[70px]">
      <div className="w-[100%] h-[100%]">
        <MapAllCard EventId={eventDetailId} />

        <MapAllLocation
          AllEvent={eventDetailData}
          onMarckerClicked={(e: string) => setEventDetailId(e)}
        />
      </div>
    </main>
  );
}
