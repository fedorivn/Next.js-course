import Button from '../../components/events/ui/button';
import classes from './results-title.module.css';

function ResultsTitle({date}) {
  const normalisedDate = new Date(date).toLocaleDateString("en-Us", {
    month: "long",
    year: "numeric",
  });
 

  return (
    <section className={classes.title}>
      <h1>Events in {normalisedDate}</h1>
      <Button link='/events'>Show all events</Button>
    </section>
  );
}

export default ResultsTitle;
