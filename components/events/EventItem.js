
import Image from "next/image";


import Button from './ui/button'
import styles from '../../styles/event-item.module.css'
import AddressIcon from "../icons/address-icon";
import DateIcon from "../icons/date-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";

export default function EventIem({ title, image, date, location, id }) {
  const normalisedDate = new Date(date).toLocaleDateString("en-Us", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const normalisedAddress = location.replace(", ", "/n");
  const exploreLink = `/events/${id}`;
  return (
    <li className ={styles.item}>
      <Image src={"/" + image} alt={title} width = {200}  height={200} />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2 >{title}</h2>
        
        <div  className={styles.date}>
            <DateIcon/>
          <time>{normalisedDate}</time>
        </div>
        <div  className={styles.address}>
            <AddressIcon/>
          <address>{normalisedAddress}</address>
        </div>
      </div>
      <div  className={styles.actions}>
        <Button link={exploreLink}> 
        <span>Eplore Event</span>
    <span className={styles.icon}>
        <ArrowRightIcon/>
    </span>
        </Button>
        </div>
      </div>
    </li>
  );
}
