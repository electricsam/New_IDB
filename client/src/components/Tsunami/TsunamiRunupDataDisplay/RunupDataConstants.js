import React from 'react';
import WaterHeight from "../../DefinitionComponents/WaterHeight";
import TableHeader from "../../TableHeader/TableHeader";


const RunupColumnDefinitions = {
  year: {
    title: "Year",
    validValues:  "-2150 to <current year>",
    data: "Format +/-yyyy (-is B.C, +is A.D.)\n" +
    "The Date and Time are given in Universal Coordinated Time (also known as Greenwich Mean Time). The local date may be one day different."
  },
  month: {
    title: "Month",
    validValues: "1 to 12",
    data: "The Date and Time are given in Universal Coordinated Time (also known as Greenwich Mean Time). The local date may be one day different."
  },
  day: {
    title: 'Day',
    validValues: '1-31',
    data: "The Date and Time are given in Universal Coordinated Time (also known as Greenwich Mean Time). The local date may be one day different."
  },
  hour: {
    title: 'Hr',
    validValues: '0-23',
    data: "The Date and Time are given in Universal Coordinated Time (also known as Greenwich Mean Time). The local date may be one day different."
  },
  minute: {
    title: 'Min',
    validValues: '0-59',
    data: "The Date and Time are given in Universal Coordinated Time (also known as Greenwich Mean Time). The local date may be one day different."
  },
  second: {
    title: 'Sec',
    validValues: '0-59',
    data: "The Date and Time are given in Universal Coordinated Time (also known as Greenwich Mean Time). The local date may be one day different."
  },
  locationName: {
    title: "Source Location Name",
    validValues: null,
    data:'The location (city, state or island) where the tsunami effects were observed.'
  },
  latitude: {
    title: "Latitude",
    validValues: '-90 to 90',
    data: "Latitude: 0 to 90 (Northern Hemisphere) -90 to 0 (Southern Hemisphere)\n" +
    "\n" +
    "Events prior to 1900 were not instrumentally located, therefore, the location given is based on the latitude and longitude of the city where the damage occurred.\n" +
    "\n" +
    "The event coordinates of approximately 100 earthquakes in this database are not known and the latitude and longitude are listed as 0.0. Therefore, to retrieve all the events from a particular country or state, leave the event coordinates search parameter blank and enter the country."
  },
  longitude: {
    title: "Longitude",
    validValues: '-180 to 180',
    data: "Longitude: 0 to 180 (Eastern Hemisphere) -180 to 0 (Western Hemisphere)\n" +
    "\n" +
    "Events prior to 1900 were not instrumentally located, therefore, the location given is based on the latitude and longitude of the city where the damage occurred.\n" +
    "\n" +
    "The event coordinates of approximately 100 earthquakes in this database are not known and the latitude and longitude are listed as 0.0. Therefore, to retrieve all the events from a particular country or state, leave the event coordinates search parameter blank and enter the country."
  },
  country: {
    title: 'Country',
    validValues: null,
    data: 'The Country where the tsunami source occurred (For example enter: Japan or Russia)'
  },
  eventValidity: {
    title: 'Tsunami Event Validity',
    validValues: '-1 to 4',
    data: "Validity of the actual tsunami occurrence is indicated by a numerical rating of the reports of that event:\n" +
    "\n" +
    "4 = definite tsunami\n" +
    "3 = probable tsunami\n" +
    "2 = questionable tsunami\n" +
    "1 = very doubtful tsunami\n" +
    "0 = event that only caused a seiche or disturbance in an inland river\n" +
    "-1 = erroneous entry"
  },
  causeCode: {
    title: 'Tsunami Cause Code',
    validValues: '0 to 11',
    data: "The source of the tsunami:\n" +
    "\n" +
    "0 = Unknown\n" +
    "1 = Earthquake\n" +
    "2 = Questionable Earthquake\n" +
    "3 = Earthquake and Landslide\n" +
    "4 = Volcano and Earthquake\n" +
    "5 = Volcano, Earthquake, and Landslide\n" +
    "6 = Volcano\n" +
    "7 = Volcano and Landslide\n" +
    "8 = Landslide\n" +
    "9 = Meteorological\n" +
    "10 = Explosion\n" +
    "11 = Astronomical Tide"
  },
  eqMagnitude: {
    title: "Earthquake Magnitude",
    validValues: '0.0 to 9.9',
    data: 'The value in this column contains the primary earthquake magnitude. Magnitude measures the energy released at the source of the earthquake. Magnitude is determined from measurements on seismographs. For pre-instrumental events, the magnitudes are derived from intensities. There are several different scales for measuring earthquake magnitudes. The primary magnitude is chosen from the available magnitude scales in this order:\n' +
    '\n',
    secondaryData: [
      {
        title: "Mw Magnitude",
        data: "The Mw magnitude is based on the moment magnitude scale. Moment is a physical quantity proportional to the slip on the fault times the area of the fault surface that slips; it is related to the total energy released in the EQ. The moment can be estimated from seismograms (and also from geodetic measurements). The moment is then converted into a number similar to other earthquake magnitudes by a standard formula. The result is called the moment magnitude. The moment magnitude provides an estimate of earthquake size that is valid over the complete range of magnitudes, a characteristic that was lacking in other magnitude scales.\n" +
        "\n" +
        "The magnitude is a measure of seismic energy. The magnitude scale is logarithmic. An increase of one in magnitude represents a tenfold increase in the recorded wave amplitude. However, the energy release associated with an increase of one in magnitude is not tenfold, but about thirtyfold. For example, approximately 900 times more energy is released in an earthquake of magnitude 7 than in an earthquake of magnitude 5. Each increase in magnitude of one unit is equivalent to an increase of seismic energy of about 1.6 x 10,000,000,000,000 ergs.\n" +
        "\n"
      },
      {
        title: "Ms Magnitude",
        data: "The Ms magnitude is the surface-wave magnitude of the earthquake.\n" +
        "\n" +
        "The magnitude is a measure of seismic energy. The magnitude scale is logarithmic. An increase of one in magnitude represents a tenfold increase in the recorded wave amplitude. However, the energy release associated with an increase of one in magnitude is not tenfold, but about thirtyfold. For example, approximately 900 times more energy is released in an earthquake of magnitude 7 than in an earthquake of magnitude 5. Each increase in magnitude of one unit is equivalent to an increase of seismic energy of about 1.6 x 10,000,000,000,000 ergs."
      },
      {
        title: "Mb Magnitude",
        data: "The Mb magnitude is the compressional body wave (P-wave) magnitude."
      },
      {
        title: "Ml Magnitude",
        data: "The ML magnitude was the original magnitude relationship defined by Richter and Gutenberg for local earthquakes in 1935. It is based on the maximum amplitude of a seismogram recorded on a Wood-Anderson torsion seismograph. Although these instruments are no longer widely in use, ML values are calculated using modern instrumentation with appropriate adjustments."
      },
      {
        title: "Mfa Magnitude",
        data: "The Mfa magnitudes are computed from the felt area, for earthquakes that occurred before seismic instruments were in general use."
      },
      {
        title: "Unknown Magnitude",
        data: "The computational method for the earthquake magnitude was unknown and could not be determined from the published sources"
      }
    ]
  },
  relatedVolcano: {
    title: "Volcano",
    data: 'The Volcano link will display additional information if the tsunami was associated with an volcanic eruption. The information may include information such as the VEI index, morphology, and the effects of the eruption.',
    validValues: null
  },
  area: {
    title: 'State, Province, or Prefecture',
    data: 'The State, Province, or Prefecture where the tsunami effects were observed.',
    validValues: null
  },
  distFromSource: {
    title: 'Distance From Source (kilometers)',
    data: 'The distance from the tsunami event source to the runup location.',
    validValues: null,
  },
  arrDay: {
    title: 'Initial Wave Arrival Time - Day',
    data: 'The arrival time is the universal coordinated time of the arrival of the initial tsunami wave at the location of the effects given in Day, Hour and Minutes.',
    validValues: null
  },
  arrHour: {
    title: 'Initial Wave Arrival Time - Hour',
    data: 'The arrival time is the universal coordinated time of the arrival of the initial tsunami wave at the location of the effects given in Day, Hour and Minutes.',
    validValues: null
  },
  arrMin: {
    title: 'Initial Wave Arrival Time - Minutes',
    data: 'The arrival time is the universal coordinated time of the arrival of the initial tsunami wave at the location of the effects given in Day, Hour and Minutes.',
    validValues: null
  },
  travHours: {
    title: 'Initial Wave Travel Time - Hours',
    data: 'The travel time is the time in hours and minutes that it took the initial tsunami wave to travel from the source to the location of effects.',
    validValues: null
  },
  travMins: {
    title: 'Initial Wave Travel Time - Minutes',
    data: 'The travel time is the time in hours and minutes that it took the initial tsunami wave to travel from the source to the location of effects.',
    validValues: null
  },
  runupHt: {
    title: 'Water Height (meters)',
    data: 'The maximum water height above sea level in meters. See image and text below for more information. If the type of measurement is:',
    validValues: null,
    component: <WaterHeight/>
  },
  tsuSrc: {
    title: 'Additional Tsunami Event Information',
    data: 'The Addl Info link will display additional tsunami information in a new browser window. The information may include effects such as the numbers of injuries and houses destroyed, the tsunami magnitude and intensity, warning status, references and comments.',
    validValues: null
  },
  moreRunupInfo: {
    title: 'Additional Tsunami Runup Information',
    data: 'The Addl Runup Info link will display additional tsunami runup information in a new browser window such as the numbers of injuries and houses destroyed, the period, first motion, references and comments.',
    validValues: null
  },
  runupHoriz: {
    title: 'Horizontal Inundation (meters)',
    data: 'The maximum horizontal distance of inland flooding (in meters)',
    validValues: null
  },
  typeMeasurementId: {
    title: 'Type of Measurement',
    data: 'See image and text below for more information.\n' +
    '1 = Eyewitness measurement\n' +
    '5 = Runup Height, Post-tsunami survey measurement\n' +
    '4 = Water height, Post-tsunami survey measurement\n' +
    '8 = Water height in harbor, Post-tsunami survey measurement\n' +
    '10 = Flow Depth, Post-tsunami survey measurement\n' +
    '9 = Splash mark, Post-tsunami survey measurement\n' +
    '2 = Tide-gauge measurement\n' +
    '3 = Deep ocean gauge\n' +
    '6 = Atmospheric Wave\n' +
    '7 = Seiche',
    validValues: '1 to 10',
    component: <WaterHeight/>
  },
  period: {
    title: 'Period',
    data: 'The period is in minutes and, when available, is the period of the first cycle.',
    validValues: null,
  },
  firstMotion: {
    title: 'First Motion',
    data: 'The first motion of the wave whether rise or fall.\n' +
    '\n' +
    'R = Rise\n' +
    'F = Fall',
    validValues: 'R and F'
  },
  doubtful: {
    title: 'Doubtful Runup Observation',
    data: 'A "?" in the Doubtful column indicates a doubtful runup entry. \n' +
    'An "M" indicates the waves likely had a meteorologic source, and thus were not true tsunami waves.',
    validValues: '?, M or Null'
  },

};

export {
  RunupColumnDefinitions
}