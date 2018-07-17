import React from 'react';
import { Link } from 'react-router-dom';
const VolcanoEventColumnDefinitions = {
  year: {
    title: "Year",
    data: "Format +/-yyyy (-is B.C, +is A.D.) \n" +
    "    The Date and Time are given in Universal Coordinated Time (also known as Greenwich Mean Time). " +
    "The local date may be one day different.",
    validValues: "-2000 to <Present>",
  },
  month: {
    title: 'Month',
    validValues: '1-12',
    data: "The Date and Time are given in Universal Coordinated Time (also known as Greenwich Mean Time). The local date may be one day different."
  },
  day: {
    title: 'Day',
    validValues: '1-31',
    data: "The Date and Time are given in Universal Coordinated Time (also known as Greenwich Mean Time). The local date may be one day different."
  },
  relatedTsunami: {
    title: 'Tsunami',
    data: <p>A value of \'Tsu\' would indicate that the volcano caused a tsunami. The link connects to the event associated with the eruption in <Link to='/tsunami/landing'>{"NGDC's Global Tsunami Database."}</Link></p>,
    validValues: null
  },
  relatedEarthquake: {
    title: 'Earthquake',
    data: <p>A value of 'Eq' would indicate that there was a significant earthquake in conjunction with the volcanic eruption. The link connects to the event associated with the eruption in <Link to='/earthquake/landing'>NGDC's Significant Earthquake Database</Link>.</p>,
    validValues: null
  },
  moreInfo: {
    title: 'Additional Eruption and Source Information',
    data: 'The Addl Info link will display additional eruption information in a new browser window. The information may include effects such as the eruption start date and end date, total numbers of injuries and houses destroyed, references and comments.',
    validValues: null
  },


};

export {
  VolcanoEventColumnDefinitions
}