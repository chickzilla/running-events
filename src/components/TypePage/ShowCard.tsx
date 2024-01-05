import EventCard from "../EventCard";
import { Event } from "@/interface";

export default function ShowCard({ Events }: { Events: Event[] }) {
  const eventList = Events;
  return (
    <div className="w-[100%] h-[100%] flex flex-col space-y-5 py-5 px-10 overflow-y-auto">
      {eventList.map((event: Event) => (
        <div className="w-[100%]" key={event.id}>
          <EventCard Event={event} />
        </div>
      ))}
    </div>
  );
}
