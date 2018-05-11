import {regions, validationConstants, countries, rnpMeasureType} from '../tsunamiForms/constants'
import Styles from './RunupSearchContainerStyle.css'
import {deleteRunup} from "../../sagas/tsunamiSaga";


const RunupLocInfo = [
  {
    type: 'DROPDOWN',
    title: 'Region',
    model: '.tsunami.rnpsearch.region',
    data: regions,
    id: '.tsunami.rnpsearch.region',
    styles: {
      wrapper: Styles.rnpRegion,
      title: Styles.minMaxTitle
    }
  },
  {
    type: "DROPDOWN",
    title: "Country",
    model: ".tsunami.rnpsearch.country",
    id: ".tsunami.rnpsearch.country",
    data: countries,
    styles: {
      wrapper: Styles.rnpCountry,
      title: Styles.minMaxTitle
    }
  },
  {
    type: 'RADIO',
    title: "Location",
    sectionStyle: Styles.rnpLocTypes,
    titleStyle: Styles.minMaxTitle,
    htmlFor:'.tsunami.runupLocType',
    model: ".tsunami.runupLocType",
    radios: [
      {value: "locStart", label: "Starts With"},
      {value: "locEnd", label: "Ends With"},
      {value: "locIncludes", label: "Includes"},
      {value: "locMatch", label: "Matches"},
      {value: "locNot", label: "or Does Not Match"}
    ],
    textModelPreface:".tsunami.rnpsearch."
  },
  {
    type: "MINMAX",
    sectionStyle:Styles.distance,
    titleStyle: Styles.minMaxTitle,
    title: "Distance",
    minThreshold: validationConstants.distanceRnpLoc.min,
    maxThreshold: validationConstants.distanceRnpLoc.max,
    min: {
      model: ".tsunami.rnpsearch.distancemin",
      validMessage: "Invalid Min Distance"
    },
    max: {
      model: ".tsunami.rnpsearch.distancemax",
      validMessage: "Invalid Max Distance"
    }
  },
  {
    type: "MULTIMINMAX",
    title: "Range of Coordinates in decimal degrees of the Runup Location",
    sectionStyle: Styles.rnpCoordinates,
    titleStyle: Styles.minMaxTitle,
    data : [
      {
        model: ".tsunami.rnpsearch.latnorth",
        title: "Northermost Latitude",
        minThreshold: validationConstants.latitude.min,
        maxThreshold: validationConstants.latitude.max
      },
      {
        model: ".tsunami.rnpsearch.latsouth",
        title: "Southernmost Latitude",
        minThreshold: validationConstants.latitude.min,
        maxThreshold: validationConstants.latitude.max
      },
      {
        model: ".tsunami.rnpsearch.longwest",
        title: "Westernmost Longitude",
        minThreshold: validationConstants.longitude.min,
        maxThreshold: validationConstants.longitude.max
      },
      {
        model: ".tsunami.rnpsearch.longeast",
        title: "Easternmost Longitude",
        minThreshold: validationConstants.longitude.min,
        maxThreshold: validationConstants.longitude.max
      }
    ]
  }
];


const RunupSourceInfo = [
  {
    type: 'MINMAX',
    sectionStyle: Styles.year,
    titleStyle: Styles.minMaxTitle,
    title: "Year",
    minThreshold: validationConstants.year.min,
    maxThreshold: validationConstants.year.max,
    min:{
      model: ".tsunami.rnpsearch.tsminyear",
      validMessage: "Invalid Year"
    },
    max:{
      model: ".tsunami.rnpsearch.tsmaxyear",
      validMessage: "Invalid Year"
    }
  },
  {
    type: "DROPDOWN",
    title: "Region",
    model: ".tsunami.rnpsearch.tsregion",
    id: ".tsunami.rnpsearch.tsregion",
    styles:{
      wrapper: Styles.region,
      title: Styles.minMaxTitle
    },
    data: countries
  },
  {
    type: "DROPDOWN",
    title: "Country",
    model: ".tsunami.rnpsearch.tscountry",
    id: ".tsunami.rnpsearch.tscountry",
    styles:{
      wrapper: Styles.country,
      title: Styles.minMaxTitle
    },
    data: regions
  }
];


const RunupParamsEffects = [
  {
    type: "DROPDOWN",
    title: "Type of Measurement",
    model: ".tsunami.rnpsearch.typeofmeasure",
    id: ".tsunami.rnpsearch.typeofmeasure",
    styles:{
      wrapper: Styles.typeOfMeasure,
      title: Styles.minMaxTitle
    },
    data: rnpMeasureType
  },
  {
    type: "MINMAX",
    title: "Water Height",
    sectionStyle: Styles.waterHt,
    titleStyle: Styles.minMaxTitle,
    minThreshold: validationConstants.waterHeight.min,
    maxThreshold: validationConstants.waterHeight.max,
    min:{
      model:".tsunami.rnpsearch.minwaterht",
      validMessage: "Invalid Min Water Height"
    },
    max: {
      model: ".tsunami.rnpsearch.maxwaterht",
      validMessage: "Invalid Max Water Height"
    }
  },
  {
    type: "MINMAX",
    title: "Number of Deaths at Runup Location",
    sectionStyle: Styles.deaths,
    titleStyle: Styles.minMaxTitle,
    minThreshold: validationConstants.numberOfDeaths.min,
    maxThreshold: validationConstants.numberOfDeaths.max,
    min:{
      model: ".tsunami.rnpsearch.deathsmin",
      validMessage: "Invalid Min Deaths"
    },
    max:{
      model: ".tsunami.rnpsearch.deathsmax",
      validMessage: "Invalid Max Deaths"
    }
  },
  {
    type: "MINMAX",
    title: "Damage in Millions of Dollars at the Runup Location",
    sectionStyle: Styles.damage,
    titleStyle: Styles.minMaxTitle,
    minThreshold: validationConstants.damageInMillions.min,
    maxThreshold: validationConstants.damageInMillions.max,
    min: {
      model: ".tsunami.rnpsearch.damagemillionsmin",
      validMessage: "Invalid Min Damage"
    },
    max:{
      model: ".tsunami.rnpsearch.damagemillionsmax",
      validMessage: "Invalid Max Damage"
    }
  }
];



export {
  RunupLocInfo,
  RunupSourceInfo,
  RunupParamsEffects
}