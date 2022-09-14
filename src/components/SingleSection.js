import React, { useEffect, useState, useContext } from "react";
import { TZContext } from "../context-api/TZContext";
import moment from 'moment-timezone';

function SingleSection({ tz }) {
  // const timeZone=(moment().tz(tz.zoneName).format('hh:mm:ss A'))
  const [time, setTime] = useState(moment().tz(tz.zoneName).format('hh:mm:ss A'));
  const [clockOn] = useState(true);
  const { handleTZRemove } = useContext(TZContext);

  useEffect(() => {
    let interval = null;
    if (clockOn) {
      interval = setInterval(() => {
        setTime(moment().tz(tz.zoneName).format('hh:mm:ss A'));
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [clockOn, tz.zoneName]);

  return (
    <div className="single-timezone">
      <span className="exit" onClick={() => handleTZRemove(tz)}>
        x
      </span>
      <h3 className="single-clock">{tz.zoneName}</h3>
      <div>
        {time}
      </div>
    </div>
  );
}

export default SingleSection;
