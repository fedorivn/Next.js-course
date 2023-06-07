import { Fragment } from "react";
import { useRouter } from "next/router";

import EventList from "../../components/events/EventList";
import EventSearch from "./EventsSearch";

import { getAllEvents } from "../../data/eventsData";

export default function AllEventsPage() {
  const events = getAllEvents();
  const router = useRouter();

function findEvents(year, month) {
    const fullPath = `/events/${year}/${month}/`;
    router.push(fullPath);
  };

  return (
    <Fragment>
      <EventSearch onSearch={findEvents} />
      <EventList items={events} />
    </Fragment>
  );
}
