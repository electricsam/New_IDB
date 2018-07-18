import React from 'react';
import { Link } from 'react-router-dom';
import VolcanoExplosivity from "../../DefinitionComponents/VolcanoExplosivity";
import LinkingParagraph from "../../DefinitionComponents/LinkingParagraph";
import VolcanoAgent from "../../DefinitionComponents/VolcanoAgent";
const VolcanoEventColumnDefinitions = {
  year: {
    title: "Year",
    data: "Format +/-yyyy (-is B.C, +is A.D.) \n" +
    "    The Date and Time are given in Universal Coordinated Time (also known as Greenwich Mean Time). " +
    "The local date may be one day different.",
    validValues: "-2000 to <Present>",
  },
  mo: {
    title: 'Month',
    validValues: '1-12',
    data: "The Date and Time are given in Universal Coordinated Time (also known as Greenwich Mean Time). The local date may be one day different."
  },
  day: {
    title: 'Day',
    validValues: '1-31',
    data: "The Date and Time are given in Universal Coordinated Time (also known as Greenwich Mean Time). The local date may be one day different."
  },
  tsu: {
    title: 'Tsunami',
    data: null,
    component: <LinkingParagraph
      text="A value of Tsu would indicate that the volcano caused a tsunami. The link connects to the event associated with the eruption in "
      linkText="NGDC's Global Tsunami Database."
      linkTo="/tsunami/landing"/>,
    validValues: null
  },
  eq: {
    title: 'Earthquake',
    component: <LinkingParagraph text="A value of 'Eq' would indicate that there was a significant earthquake in conjunction with the volcanic eruption. The link connects to the event associated with the eruption in "
                                 linkText="NGDC's Significant Earthquake Database"
                                 linkTo="/earthquake/landing"/>,
    data: null,
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
  },
  agent: {
    title: "Agent",
    validValues: null,
    data: "The agent that caused the fatalities for an eruption. Adapted from Simkin and Siebert, 1994.",
    component: <VolcanoAgent/>
  },
  deaths: {
    title: 'Number of Deaths from the Volcano:',
    validValues: '0 to',
    data: 'Whenever possible, numbers of deaths from the eruption are listed. These values indicate those deaths that resulted from the eruption. For total deaths (tsunami, volcano, and earthquake), see total deaths field under additional information.'
  },
  deathsAmountOrder: {
    title: 'Description of Number of Deaths from the Volcanic Eruption',
    validValues: '0 to 4',
    data: "When a description was found in the historical literature instead of an actual number of deaths, this value was coded and listed in the Deaths D column. If the actual number of deaths was listed, a descriptor was also added for search purposes.\n" +
    "\n" +
    "1 = Few (~1 to 50 deaths)\n" +
    "2 = Some (~51 to 100 deaths)\n" +
    "3 = Many (~101 to 1000 deaths)\n" +
    "4 = Very many (over 1000 deaths)"
  },
  injuries: {
    title: 'Number of Injuries from the Eruption:',
    validValues: '0 to',
    data: 'Whenever possible, numbers of injuries from the eruption are listed.'
  },
  injuriesAmountOrder: {
    title: "Description of Number of Injuries from the eruption",
    validValues: '0 to 3',
    data: "When a description was found in the historical literature instead of an actual number of injuries, this value was coded and listed in the Injuries D column. If the actual number of injuries was listed, a descriptor was also added for search purposes.\n" +
    "\n" +
    "0 = None\n" +
    "1 = Few (~1 to 50 injuries)\n" +
    "2 = Some(~51 to 100 injuries)\n" +
    "3 = Many (~101 to 1000 injuries)\n" +
    "4 = Very many (over 1000 injuries)"
  },
  damageMillionsDollars: {
    title: "Damage Millions of Dollars from the Eruption:",
    validValues: null,
    data: "The value in the Damage column should be multipled by 1,000,000 to obtain the actual dollar amount.\n" +
    "\n" +
    "When a dollar amount for damage was found in the literature, it was listed in the Damage column in millions of U.S. dollars. The dollar value listed is the value at the time of the event. To convert the damage to current dollar values, please use the Consumer Price Index Calculator. Monetary conversion tables for the time of the event were used to convert foreign currency to U.S. dollars."
  },
  damageAmountOrder: {
    title: 'Description of Damage from the Eruption',
    validValues: '0 to 4',
    data: 'For those events not offering a monetary evaluation of damage, the following five-level scale was used to classify damage (1990 dollars) and was listed in the Damage D column. If the actual dollar amount of damage was listed, a descriptor was also added for search purposes.\n' +
    '\n' +
    '1 = LIMITED (roughly corresponding to less than $1 million)\n' +
    '2 = MODERATE (~$1 to $5 million)\n' +
    '3 = SEVERE (~$5 to $25 million)\n' +
    '4 = EXTREME (~$25 million or more)\n' +
    'When possible, a rough estimate was made of the dollar amount of damage based upon the description provided, in order to choose the damage category. In many cases, only a single descriptive term was available. These terms were converted to the damage categories based upon the authors apparent use of the term elsewhere. In the absence of other information, LIMITED is considered synonymous with slight, minor, and light, SEVERE as synonymous with major, extensive, and heavy, and EXTREME as synonymous with catastrophic.\n' +
    '\n' +
    'Note: The descriptive terms relate approximately to current dollar values.'
  },
  housesDestroyed: {
    title: "Number of Houses Destroyed by the Eruption",
    validValues: '0 to',
    data: "Number of Houses Destroyed by the Eruption"
  },
  housesAmountOrder: {
    title: "Description of Number of Houses Destroyed by the Eruption",
    validValues: '0 to 4',
    data: "For those events not offering an exact number of houses damaged, the following four-level scale was used to classify the damage and was listed in the Houses D column. If the actual number of houses destroyed was listed, a descriptor was also added for search purposes.\n" +
    "\n" +
    "0 = None\n" +
    "1 = Few (~1 to 50 houses)\n" +
    "2 = Some (~51 to 100 houses)\n" +
    "3 = Many (101 to 1000 houses)\n" +
    "4 = Very Many (~over 1000 houses)"
  }

};

export {
  VolcanoEventColumnDefinitions
}