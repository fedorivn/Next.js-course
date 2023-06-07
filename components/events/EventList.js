import EventItem from "./EventItem";
import styles from '../../styles/event-list.module.css'

export default function EventList({ items }) {
  return (
    <ul className={styles.list}>
      {items.map((event) => (
        <EventItem
          key={event.id}
          title={event.title}
          id={event.id}
          date={event.date}
          location ={event.location}
          image ={event.image}
        />
      ))}
    </ul>
  );
}
