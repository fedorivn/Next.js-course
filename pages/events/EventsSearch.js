import { useRef } from "react";
import Button from "../../components/events/ui/button";
import styles from "../../styles/events-search.module.css";

export default function EventSearch({onSearch}) {
    const yearInputRef = useRef();
    const monthInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const selectedYear=yearInputRef.current.value;
    
    const selectedMonth=monthInputRef.current.value;
  
    onSearch(selectedMonth, selectedYear)
  };


  return (
    <form className={styles.form}>
      <div className={styles.controls}>
        <div className={styles.control}>
          <label htmlFor="year">Year</label>
          <select id="year" ref={yearInputRef}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
          </select>
        </div>
        <div className={styles.control}>
          <label htmlFor="month">Month</label>
          <select id="month" ref={monthInputRef}>
            <option value="1">Jan</option>
            <option value="2">Feb</option>
            <option value="3">Mar</option>
            <option value="4">Apr</option>
            <option value="5">May</option>
            <option value="6">Jun</option>
            <option value="7">Jul</option>
            <option value="8">Aug</option>
            <option value="9">Sep</option>
            <option value="10">Oct</option>
            <option value="11">Nov</option>
            <option value="12">Dec</option>
          </select>
        </div>
      </div>
      <Button onClick={submitHandler}>Find Events</Button>
    </form>
  );
}
