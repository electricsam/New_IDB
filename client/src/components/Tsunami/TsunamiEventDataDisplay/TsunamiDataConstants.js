
const tsunamiEventColumnDefinitions = {
  year: {
    title: "Year",
    data: "Format +/-yyyy (-is B.C, +is A.D.) \n" +
    "    The Date and Time are given in Universal Coordinated Time (also known as Greenwich Mean Time). " +
    "The local date may be one day different.",
    validValues: "-2000 to <Present>"
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
    '\n'
  },
  relatedVolcano: {
    title: "Volcano",
    data: 'The Volcano link will display additional information in a new browser window if the tsunami was associated with an volcanic eruption. The information may include information such as the VEI index, morphology, and the effects of the eruption.',
    validValues: null
  },
  moreInfo: {
    title: "Additional Tsunami Event Information",
    validValues: null,
    data: 'The Addl Info link will display additional tsunami information in a new browser window. The information may include effects such as the numbers of injuries and houses destroyed, the tsunami magnitude and intensity, warning status, references and comments.'
  },
  country: {
    title: 'Country',
    validValues: null,
    data: 'The Country where the tsunami source occurred (For example enter: Japan or Russia)'
  },
  locationName: {
    title: 'Source Location Name',
    validValues: null,
    data: 'The Country, State, Province or Island where the tsunami source occurred (For example enter: Japan or Honshu)\n' +
    'This is only an approximate geographic location. Events prior to 1900 were not instrumentally located, therefore, the location given is based on the latitude and longitude of the city where the maximum effects occurred. If there are different spellings of a city name the additional names are in parentheses.'
  },
  latitude: {
    title: "Latitude",
    validValues: '-90 to 90',
    data: "Latitude: 0 to 90 (Northern Hemisphere) -90 to 0 (Southern Hemisphere)\n" +
    "\n" +
    "Events prior to 1900 were not instrumentally located, therefore, the location given is based on the latitude and longitude of the city where the maximum effects occurred.\n" +
    "\n" +
    "The event coordinates of over 800 tsunami sources in this database are not known and the latitude and longitude are listed as null. Therefore, to retrieve all the events from a particular country or state, leave the event coordinates search parameter blank and enter the country or select the region name.",
  },
  longitude: {
    title: "Longitude",
    validValues: '-180 to 180',
    data: 'Longitude: 0 to 180 (Eastern Hemisphere) -180 to 0 (Western Hemisphere)\n' +
    '\n' +
    'Events prior to 1900 were not instrumentally located, therefore, the location given is based on the latitude and longitude of the city where the maximum effects occurred.\n' +
    '\n' +
    'The event coordinates of over 800 tsunami sources in this database are not known and the latitude and longitude are listed as null. Therefore, to retrieve all the events from a particular country or state, leave the event coordinates search parameter blank and enter the country or select the region name.'
  },
  maxEventRunup: {
    title: "Maximum Water Height",
    validValues: null,
    data: 'The maximum water height above sea level in meters for this event. If the type of measurement of the runup was a:\n' +
    '\n' +
    'Tide Gauge - half of the maximum height (minus the normal tide)of a tsunami wave recorded at the coast by a tide gauge.\n' +
    'Runup Height - the maximum elevation the wave reaches at the maximum inundation.'
  },
  numRunup: {
    title: "Number of Runups",
    validValues: null,
    data: "The total number of runups link will display the runup locations associated with a particular tsunami event."
  },
  tsMtAbe: {
    title: "Tsunami Magnitude (Abe)",
    validValues: "-5 to 10",
    data: "Abe defined two different tsunami magnitude amplitudes. His first tsunami magnitude (1979) is:\n" +
    "\n" +
    "Mt = logH + B\n" +
    "\n" +
    "where H is the maximum single crest or trough amplitude of the tsunami waves (in meters) and B a constant. The second definition (1981) is:\n" +
    "\n" +
    "Mt = logH + alogR + D\n" +
    "\n" +
    "where R is the distance in km from the earthquake epicenter to the tide station along the shortest oceanic path, and a and D are constants."
  },
  tsMtIi: {
    title: "Tsunami Magnitude (Iida)",
    validValues: '-5 to 10',
    data: "Tsunami magnitude (M) is defined by Iida and others (1967) as\n" +
    "\n" +
    "M = log2h, where \"h\" is the maximum runup height of the wave."
  },
  tsIntensity: {
    title: 'Tsunami Intensity',
    validValues: '-5 to 10',
    data: 'Tsunami intensity is defined by Soloviev and Go (1974) as\n' +
    '\n' +
    'I = log2(21/2 * h), where "h" is the maximum runup height of the wave.'
  },
  deaths: {
    title: "Number of Deaths",
    validValues: null,
    data: "If an actual number of deaths due to the tsunami is known, enter a number in this search field. If only a description is available such as \"few\", \"some\", or \"many\", the database can be searched using the search field:Death Description"
  },
  deathsAmountOrder: {
    title: "Description of Deaths from Tsunami",
    validValues: '0 to 4',
    data: "When a description was found in the historical literature instead of an actual number of deaths, this value was coded and listed in the Deaths De column. If the actual number of deaths was listed, a descriptor was also added for search purposes.\n" +
    "\n" +
    "0 = None\n" +
    "1 = Few (~1 to 50 deaths)\n" +
    "2 = Some (~51 to 100 deaths)\n" +
    "3 = Many (~101 to 1000 deaths)\n" +
    "4 = Very Many (~1001 or more deaths)"
  },
  missing: {
    title: "Number of Missing from Tsunami",
    validValues: null,
    data: "Whenever possible, numbers of Missing from the tsunami are listed."
  },
  missingAmountOrder: {
    title: "Description of Missing from the Tsunami",
    validValues: "0 to 4",
    data: "When a description was found in the historical literature instead of an actual number of missing, this value was coded and listed in the Missing De column. If the actual number of missing was listed, a descriptor was also added for search purposes.\n" +
    "\n" +
    "0 = None\n" +
    "1 = Few (~1 to 50 missing)\n" +
    "2 = Some(~51 to 100 missing)\n" +
    "3 = Many (~101 to 1000 missing)\n" +
    "4 = Very Many (~1001 or more missing)"
  },
  injuries: {
    title: "Number of Injuries from the Tsunami",
    validValues: null,
    data: "Whenever possible, numbers of injuries from the tsunami are listed."
  },
  injuriesAmountOrder: {
    title: "Description of Injuries from the Tsunami",
    validValues: "0 to 4",
    data: "When a description was found in the historical literature instead of an actual number of injuries, this value was coded and listed in the Injuries De column. If the actual number of injuries was listed, a descriptor was also added for search purposes.\n" +
    "\n" +
    "0 = None\n" +
    "1 = Few (~1 to 50 injuries)\n" +
    "2 = Some(~51 to 100 injuries)\n" +
    "3 = Many (~101 to 1000 injuries)\n" +
    "4 = Very Many (~1001 or more injuries)"
  },
  damageMillionsDollars: {
    title: "Damage in Millions of Dollars from the Tsunami",
    validValues: null,
    data: "The value in the Damage column should be multiplied by 1,000,000 to obtain the actual dollar amount.\n" +
    "\n" +
    "If an actual number of dollars in damage due to the tsunami is known, enter a number in this search field. If only a description is available such as \"limited\", \"moderate\", or \"severe\", the database can be searched using the search field:Damage Description\n" +
    "\n" +
    "When a dollar amount for damage was found in the literature, it was listed in the Damage column in millions of U.S. dollars. The dollar value listed is the value at the time of the event. To convert the damage to current dollar values, please use the Consumer Price Index Calculator. Monetary conversion tables for the time of the event were used to convert foreign currency to U.S. dollars.\n" +
    "\n"
  },
  damageAmountOrder: {
    title: "Description of Damage from the Tsunami",
    validValues: "0 to 4",
    data: "For those events not offering a monetary evaluation of damage, the following five-level scale was used to classify damage (1990 dollars) and was listed in the Damage De column. If the actual dollar amount of damage was listed, a descriptor was also added for search purposes.\n" +
    "\n" +
    "0 = NONE\n" +
    "1 = LIMITED (roughly corresponding to less than $1 million)\n" +
    "2 = MODERATE (~$1 to $5 million)\n" +
    "3 = SEVERE (~>$5 to $24 million)\n" +
    "4 = EXTREME (~$25 million or more)\n" +
    "When possible, a rough estimate was made of the dollar amount of damage based upon the description provided, in order to choose the damage category. In many cases, only a single descriptive term was available. These terms were converted to the damage categories based upon the authors apparent use of the term elsewhere. In the absence of other information, LIMITED is considered synonymous with slight, minor, and light, SEVERE as synonymous with major, extensive, and heavy, and EXTREME as synonymous with catastrophic.\n" +
    "\n" +
    "Note: The descriptive terms relate approximately to current dollar values."
  },
  housesDestroyed: {
    title: "Number of Houses Destroyed by the Tsunami",
    validValues: null,
    data: "Whenever possible, number of houses destroyed by the tsunami are listed."
  },
  housesAmountOrder: {
    title: "Description of Houses Destroyed by the Tsunami",
    validValues: "0 to 4",
    data: "For those events not offering an exact number of houses destroyed, the following four-level scale was used to classify the destruction and was listed in the Houses Destroyed De column. If the actual number of houses destroyed was listed, a descriptor was also added for search purposes.\n" +
    "\n" +
    "0 = None\n" +
    "1 = Few (~1 to 50 houses)\n" +
    "2 = Some (~51 to 100 houses)\n" +
    "3 = Many (~101 to 1000 houses)\n" +
    "4 = Very Many (~1001 or more houses)\n"
  },
  housesDamaged: {
    title: "Number of Houses Damaged by the Tsunami",
    validValues: null,
    data: "Whenever possible, number of houses damaged by the tsunami are listed."
  },
  housesDamagedAmountOrder: {
    title: "Description of Houses Damaged by the Tsunami",
    validValues: "0 to 4",
    data: "For those events not offering an exact number of houses damaged, the following four-level scale was used to classify the damage and was listed in the Houses Damaged De column. If the actual number of houses damaged was listed, a descriptor was also added for search purposes.\n" +
    "\n" +
    "0 = None\n" +
    "1 = Few (~1 to 50 houses)\n" +
    "2 = Some (~51 to 100 houses)\n" +
    "3 = Many (~101 to 1000 houses)\n" +
    "4 = Very Many (~1001 or more houses)"
  },
  deathsTotal: {
    title: "Total Number of Deaths from the Tsunami and Source Event",
    validValues: null,
    data: "Whenever possible, numbers of deaths from the tsunami and source event are listed."
  },
  deathsAmountOrderTotal: {
    title: "Description of Deaths from the Tsunami and the Source Event",
    validValues: "0 to 4",
    data: "When a description was found in the historical literature instead of an actual number of deaths, this value was coded and listed in the Deaths De column. If the actual number of deaths was listed, a descriptor was also added for search purposes.\n" +
    "\n" +
    "0 = None\n" +
    "1 = Few (~1 to 50 deaths)\n" +
    "2 = Some (~51 to 100 deaths)\n" +
    "3 = Many (~101 to 1000 deaths)\n" +
    "4 = Very Many (~1001 or more deaths)"
  },
  missingTotal: {
    title: "Total Number of Missing from the Tsunami and the Source Event",
    validValues: null,
    data: "Whenever possible, numbers of missing from the tsunami and source event are listed."
  },
  missingAmountOrderTotal: {
    title: "Description of Missing form the Tsunami and the Source Event",
    validValues: "0 to 4",
    data: "When a description was found in the historical literature instead of an actual number of missing, this value was coded and listed in the Missing De column. If the actual number of missing was listed, a descriptor was also added for search purposes.\n" +
    "\n" +
    "0 = None\n" +
    "1 = Few (~1 to 50 missing)\n" +
    "2 = Some(~51 to 100 missing)\n" +
    "3 = Many (~101 to 1000 missing)\n" +
    "4 = Very Many (~1001 or more missing)\n"
  },
  injuriesTotal: {
    title: "Total Number of Injuries from the Tsunami and Source Event",
    validValues: null,
    data: "Whenever possible, numbers of injuries from the tsunami and source event are listed."
  },
  injuriesAmountOrderTotal: {
    title: "Description of Injuries from the Tsunami and the Source Event",
    validValues: "0 to 4",
    data: "When a description was found in the historical literature instead of an actual number of injuries, this value was coded and listed in the Injuries De column. If the actual number of injuries was listed, a descriptor was also added for search purposes.\n" +
    "\n" +
    "0 = None\n" +
    "1 = Few (~1 to 50 injuries)\n" +
    "2 = Some(~51 to 100 injuries)\n" +
    "3 = Many (~101 to 1000 injuries))\n" +
    "4 = Very Many (~1001 or more injuries)"
  },
  damageMillionsDollarsTotal: {
    title: "Total Damage in Millions of Dollars from the Tsunami and the Source Event",
    validValues: null,
    data: "The value in the Damage column should be multipled by 1,000,000 to obtain the actual dollar amount.\n" +
    "\n" +
    "When a dollar amount for damage was found in the literature, it was listed in the Damage column in millions of U.S. dollars. The dollar value listed is the value at the time of the event. To convert the damage to current dollar values, please use the Consumer Price Index Calculator. Monetary conversion tables for the time of the event were used to convert foreign currency to U.S. dollars."
  },
  damageAmountOrderTotal: {
    title: "Description of Damage from the Tsunami and the Source Event",
    validValues: "0 to 4",
    data: "For those events not offering a monetary evaluation of damage, the following five-level scale was used to classify damage (1990 dollars) and was listed in the Damage De column. If the actual dollar amount of damage was listed, a descriptor was also added for search purposes.\n" +
    "\n" +
    "0 = NONE\n" +
    "1 = LIMITED (roughly corresponding to less than $1 million)\n" +
    "2 = MODERATE (~$1 to $5 million)\n" +
    "3 = SEVERE (~$5 to $25 million)\n" +
    "4 = EXTREME (~$25 million or more)\n" +
    "When possible, a rough estimate was made of the dollar amount of damage based upon the description provided, in order to choose the damage category. In many cases, only a single descriptive term was available. These terms were converted to the damage categories based upon the authors apparent use of the term elsewhere. In the absence of other information, LIMITED is considered synonymous with slight, minor, and light, SEVERE as synonymous with major, extensive, and heavy, and EXTREME as synonymous with catastrophic.\n" +
    "\n" +
    "Note: The descriptive terms relate approximately to current dollar values."
  },
  housesDestroyedTotal: {
    title: "Total Number of Houses Destroyed by the Tsunami and the Source Event",
    validValues: null,
    data: "Whenever possible, number of houses destroyed by the tsunami and the source event are listed."
  },
  housesAmountOrderTotal: {
    title: "Description of Houses Destroyed by the Tsunami and the Source Event",
    validValues: null,
    data: "For those events not offering an exact number of houses destroyed, the following four-level scale was used to classify the destruction and was listed in the Houses Destroyed De column. If the actual number of houses destroyed was listed, a descriptor was also added for search purposes.\n" +
    "\n" +
    "0 = None\n" +
    "1 = Few (~1 to 50 houses)\n" +
    "2 = Some (~51 to 100 houses)\n" +
    "3 = Many (~101 to 1000 houses)\n" +
    "4 = Very Many (~1001 or more houses)"
  },
  housesDamagedTotal: {
    title: "Total Number of Houses Damaged by the Tsunami and the Source Event",
    validValues: null,
    data: "Whenever possible, number of houses damaged by the tsunami and the source event are listed."
  },
  housesDamAmountOrderTotal: {
    title: "Description of Houses Damaged by the Tsunami and the Source Event",
    validValues: "0 to 4",
    data: "For those events not offering an exact number of houses damaged, the following four-level scale was used to classify the damage and was listed in the Houses Damaged De column. If the actual number of houses damaged was listed, a descriptor was also added for search purposes.\n" +
    "\n" +
    "0 = None\n" +
    "1 = Few (~1 to 50 houses)\n" +
    "2 = Some (~51 to 100 houses)\n" +
    "3 = Many (~101 to 1000 houses)\n" +
    "4 = Very Many (~1001 or more houses)"
  }
};

export {
  tsunamiEventColumnDefinitions
}