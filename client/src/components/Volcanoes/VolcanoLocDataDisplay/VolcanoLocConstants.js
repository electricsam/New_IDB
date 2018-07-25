import React from 'react';
import TimeEruption from "../../DefinitionComponents/TimeEruption";


const VolcanoLocColumnDefinitions = {
  timeErupt: {
    title: "Time Erupt",
    validValues: null,
    data: "The date of the last known eruption (from the Smithsonian Institution, Global Volcanism Program)",
    component: <TimeEruption/>
  }
};

export { VolcanoLocColumnDefinitions }
