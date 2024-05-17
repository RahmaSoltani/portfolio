import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
const Tech = () => {
  return (
    <div>
    <div className='flex flex-row flex-wrap justify-center gap-12'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
    <div className='flex flex-row flex-wrap justify-center gap-12'>
  {technologies.map((technology, index) => {
    if (index >= 5) {
      return (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      );
    }
    return null; // Skip rendering for the first four elements
  })}
</div>

    </div>

    
  );
};

export default SectionWrapper(Tech, "");
