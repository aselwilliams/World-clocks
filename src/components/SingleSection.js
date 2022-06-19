import React, { useEffect, useState, useContext } from "react";
import { TZContext } from "../context-api/TZContext";
import moment from 'moment-timezone';

function SingleSection({ tz }) {
  const timeZone=(moment.tz.zone(tz.zoneName).format('hh:mm:ss A'))
  const [time, setTime] = useState(Math.abs(tz.zoneTime));
  const [clockOn, setClockOn] = useState(true);
  const { handleTZRemove } = useContext(TZContext);

  useEffect(() => {
    let interval = null;
    if (clockOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1000);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [clockOn]);

  return (
    <div className="single-timezone">
      <span className="exit" onClick={() => handleTZRemove(tz)}>
        x
      </span>
      <h3 className="single-clock">{tz.zoneName}</h3>
      <div>
        <span>{("0" + Math.floor((time / 3600000) % 24)).slice(-2)} :</span>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)} : </span>
        <span>{("0" + ((time / 1000) % 60)).slice(-2)}</span>
      </div>
    </div>
  );
}

export default SingleSection;
