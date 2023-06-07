import { useRouter } from "next/router";
import { getFilteredEvents } from "../../data/eventsData";
import EventList from "../../components/events/EventList";
import ResultsTitle from "../../components/results-title/results-title";

export default function FilteredEvents() {
  const router = useRouter();

  console.log(router.query.slug);
  const filterdData = router.query.slug;

  if (!filterdData) {
    return <p>Loading...</p>;
  }

  const filteredYear = filterdData[1];
  const filteredMonth = filterdData[0];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;
  console.log( numYear);

    if (
      isNaN(numYear) ||
      isNaN(numMonth) ||
      numYear > 2030 ||
      numYear <= 2021 ||
      numMonth < 1 ||
      numMonth > 12

      
    ) {
      return <p>Invalid date.......</p>;
    }

  const filteredEvents = getFilteredEvents(numYear, numMonth);

  if (!filteredEvents || filteredEvents.length === 0) {
    return <p>No events found</p>;
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </>
  );
}
