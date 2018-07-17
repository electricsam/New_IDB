import React from 'react';
import { Link } from 'react-router-dom';
import VolcanoExplosivity from "../../DefinitionComponents/VolcanoExplosivity";
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
  location: {
    title: 'Location',
    validValues: null,
    data: 'The Location of the volcano (For example enter: Java, W. Indies or Alaska)'
  },
  latitude: {
    title: "Latitude",
    validValues: '-90 to 90',
    data: 'Latitude: 0 to 90 (Northern Hemisphere) -90 to 0 (Southern Hemisphere)'
  },
  longitude: {
    title: "Longitude",
    validValues: '-180 to 180',
    data: 'Longitude: 0 to 180 (Eastern Hemisphere) -180 to 0 (Western Hemisphere)'
  },
  country: {
    title: 'Country',
    validValues: null,
    data: 'The Country where the volcano is located.'
  },
  name: {
    title: 'Volcano Name',
    data: 'The Name of the volcano as listed by the Smithsonian Institution, Global Volcanism Program. More information is available about this volcano at the Global Volcanism Program\'s website.',
    validValues: null
  },
  elevation: {
    title: 'Elevation of the Volcano (m)',
    data: 'The elevation of a volcano in meters (m) above sealevel.',
    validValues: null
  },
  morphology: {
    title: 'Volcano Type',
    data: 'The volcano type as listed by the Smithsonian Institution, Global Volcanism Program. For more information please visit the Global Volcanism Program\'s volcano types and processes gallery.',
    validValues: null
  },
  vei: {
    title: 'Volcanic Explosivity Index (VEI)',
    data: 'A widely used classification scheme to describe the size of explosive eruptions. It is based principally on the erupted mass or volume of a deposit (Newhall and Self, 1982). Historic eruptions that were definitely explosive, but carry no other descriptive information are assigned a default VEI of 2.',
    validValues: null,
    component: <VolcanoExplosivity/>
  }

};

export {
  VolcanoEventColumnDefinitions
}