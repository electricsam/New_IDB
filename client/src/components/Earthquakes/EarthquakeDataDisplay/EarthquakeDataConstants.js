
const earthquakeEventColumnDefinitions = {
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
    title: "Geographic Location",
    validValues: null,
    data: "The Country, State, Province or City where the Earthquake occurred (For example enter: USA or California or San Francisco)\n" +
    "This is only an approximate geographic location. Events prior to 1900 were not instrumentally located, therefore, the location given is based on the latitude and longitude of the city where the damage occurred. In the Geographic Location column, the country is listed first, then the province or state, and finally the city or cities where damage was reported. If there are different spellings of a city name the additional spellings are in parentheses."
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
  eqDepth: {
    title: "Focal Depth (km)",
    validValues: "0 to 700km",
    data:"The depth of the earthquake is given in kilometers."
  },
  eqMagnitude: {
    title: "Earthquake Magnitude",
    validValues: "0.0 to 9.9",
    data: "The value in this column contains the primary earthquake magnitude. Magnitude measures the energy released at the source of the earthquake. Magnitude is determined from measurements on seismographs. For pre-instrumental events, the magnitudes are derived from intensities. There are several different scales for measuring earthquake magnitudes. The primary magnitude is chosen from the available magnitude scales in this order:\n",


  }
}