import { getFeaturedEvents } from "../data/eventsData";
import EventList from "../components/events/EventList";

export default function Home() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
}
