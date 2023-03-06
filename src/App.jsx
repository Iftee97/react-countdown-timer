import { useEffect, useState } from 'react'
import './App.css'
import CircularProgress from "./CircularProgress.jsx";

export default function App() {
  const [totalTime, setTotalTime] = useState(null);
  const [remainingTime, setRemainingTime] = useState(null);

  const dateSince = new Date("2023-03-01T00:00:00.000Z");
  const dateUntil = new Date("2023-03-31T00:00:00.000Z");

  useEffect(() => {
    const dateNow = new Date();

    const totalDuration = getDuration(dateSince, dateUntil);
    setTotalTime(totalDuration)
    console.log("totalDuration", totalDuration);

    const remainingDuration = getDuration(dateNow, dateUntil);
    setRemainingTime(remainingDuration);
    console.log("remainingDuration", remainingDuration);

    updateDuration();
  }, []);

  function getDuration(dateSince, dateUntil) {
    // Get the time difference in milliseconds
    const timeDiff = Math.abs(dateUntil.getTime() - dateSince.getTime());

    // Convert the time difference to days, hours, minutes, and seconds
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    // console.log(`${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);

    return { days, hours, minutes, seconds };
  }

  function updateDuration() {
    const dateNow = new Date();
    const duration = getDuration(dateNow, dateUntil);
    setRemainingTime(duration);
    setTimeout(updateDuration, 200);
  }

  return (<div>
    {(remainingTime && totalTime) ?
      <div style={{ display: "flex", gap: "20px", padding: "10px" }}>
        <CircularProgress
          value={remainingTime.days}
          maxValue={totalTime.days}
          text={remainingTime.days}
          footerText="Days"
        />
        <CircularProgress
          value={remainingTime.hours}
          maxValue={60}
          text={remainingTime.hours}
          footerText="Hours"
        />
        <CircularProgress
          value={remainingTime.minutes}
          maxValue={60}
          text={remainingTime.minutes}
          footerText="Minutes"
        />
        <CircularProgress
          value={remainingTime.seconds}
          maxValue={60}
          text={remainingTime.seconds}
          footerText="Seconds"
        />
      </div> : null}
  </div>);
}
