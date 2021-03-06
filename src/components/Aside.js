import React, { useContext } from "react";
import SingleOption from "./SingleOption";
import { TZContext } from "../context-api/TZContext";

function Aside() {
  const { timeZones, handleAddClock, handleSelectChange } = useContext(TZContext);
  return (
    <aside>
      <div className="add-clock-box">
        <button onClick={handleAddClock}>Add Clock</button>
        <select onChange={handleSelectChange} name="timezone" id="timezone">
          <option>- Select a timezone -</option>;
          {timeZones.map((tz, ind) => {
            return <SingleOption tz={tz} key={ind} />;
          })}
        </select>
      </div>
    </aside>
  );
}

export default Aside;
