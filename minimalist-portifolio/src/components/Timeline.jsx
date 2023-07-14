import React from "react";
import timeline from "../data/timeline";
import TimelineItems from "./TimelineItems";

function Timeline() {
  return (
    <div className="flex flex-col md:flex-row justify-center my-20 w-full">
    <div className="w-full md:w-7/12">
     {timeline.map(item => (
      <TimelineItems 
        year={item.year}
        title={item.title}
        duration={item.duration}
        details={item.details}
      />
     ))}
    </div>
    </div>
  )
}

export default Timeline;