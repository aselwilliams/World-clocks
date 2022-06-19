import React, { useContext } from "react";
import SingleSection from "./SingleSection";
import { TZContext } from "../context-api/TZContext";

function Section() {
  const { listOfSelectedTZ } = useContext(TZContext);
  return (
    <section>
      {listOfSelectedTZ.map((tz) => {
        return <SingleSection tz={tz} key={tz.id} />;
      })}
    </section>
  );
}

export default Section;
