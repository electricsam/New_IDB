import {regions, validationConstants, countries, rnpMeasureType} from '../tsunamiForms/constants'
import {deleteRunup} from "../../sagas/tsunamiSaga";


const RunupLocInfo = [
  {
    type: 'DROPDOWN',
    title: 'Region',
    model: '.tsunami.rnpsearch.regionCode',
    data: regions,
    id: '.tsunami.rnpsearch.regionCode',
  },
  {
    type: "DROPDOWN",
    title: "Country",
    model: ".tsunami.rnpsearch.country",
    id: ".tsunami.rnpsearch.country",
    data: countries,
  },
  {
    type: 'RADIO',
    title: "Location",
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
    title: "Distance",
    minThreshold: validationConstants.distanceRnpLoc.min,
    maxThreshold: validationConstants.distanceRnpLoc.max,
    min: {
      model: ".tsunami.rnpsearch.minDistFromSource",
      validMessage: "Invalid Min Distance"
    },
    max: {
      model: ".tsunami.rnpsearch.maxDistFromSource",
      validMessage: "Invalid Max Distance"
    }
  },
  {
    type: "MULTIMINMAX",
    title: "Range of Coordinates in decimal degrees of the Runup Location",
    data : [
      {
        model: ".tsunami.rnpsearch.maxLatitude",
        title: "Northermost Latitude",
        minThreshold: validationConstants.latitude.min,
        maxThreshold: validationConstants.latitude.max,
        validMessage: "Invalid Latitude"
      },
      {
        model: ".tsunami.rnpsearch.minLatitude",
        title: "Southernmost Latitude",
        minThreshold: validationConstants.latitude.min,
        maxThreshold: validationConstants.latitude.max,
        validMessage: "Invalid Latitude"
      },
      {
        model: ".tsunami.rnpsearch.minLongitude",
        title: "Westernmost Longitude",
        minThreshold: validationConstants.longitude.min,
        maxThreshold: validationConstants.longitude.max,
        validMessage:"Invalid Longitude"
      },
      {
        model: ".tsunami.rnpsearch.maxLongitude",
        title: "Easternmost Longitude",
        minThreshold: validationConstants.longitude.min,
        maxThreshold: validationConstants.longitude.max,
        validMessage:"Invalid Longitude"
      }
    ]
  }
];


const RunupSourceInfo = [
  {
    type: 'MINMAX',
    title: "Year",
    minThreshold: validationConstants.year.min,
    maxThreshold: validationConstants.year.max,
    min:{
      model: ".tsunami.rnpsearch.tsMinYear",
      validMessage: "Invalid Year"
    },
    max:{
      model: ".tsunami.rnpsearch.tsMaxYear",
      validMessage: "Invalid Year"
    }
  },
  {
    type: "DROPDOWN",
    title: "Region",
    model: ".tsunami.rnpsearch.tsRegionCode",
    id: ".tsunami.rnpsearch.tsRegionCode",
    data: regions
  },
  {
    type: "DROPDOWN",
    title: "Country",
    model: ".tsunami.rnpsearch.tsCountry",
    id: ".tsunami.rnpsearch.tsCountry",
    data: countries
  }
];


const RunupParamsEffects = [
  {
    type: "DROPDOWN",
    title: "Type of Measurement",
    model: ".tsunami.rnpsearch.typeMeasurementId",
    id: ".tsunami.rnpsearch.typeMeasurementId",
    data: rnpMeasureType
  },
  {
    type: "MINMAX",
    title: "Water Height",
    minThreshold: validationConstants.waterHeight.min,
    maxThreshold: validationConstants.waterHeight.max,
    min:{
      model:".tsunami.rnpsearch.minRunupHt",
      validMessage: "Invalid Min Water Height"
    },
    max: {
      model: ".tsunami.rnpsearch.maxRunupHt",
      validMessage: "Invalid Max Water Height"
    }
  },
  {
    type: "MINMAX",
    title: "Number of Deaths at Runup Location",
    minThreshold: validationConstants.numberOfDeaths.min,
    maxThreshold: validationConstants.numberOfDeaths.max,
    min:{
      model: ".tsunami.rnpsearch.minDeaths",
      validMessage: "Invalid Min Deaths"
    },
    max:{
      model: ".tsunami.rnpsearch.maxDeaths",
      validMessage: "Invalid Max Deaths"
    }
  },
  {
    type: "MINMAX",
    title: "Damage in Millions of Dollars at the Runup Location",
    minThreshold: validationConstants.damageInMillions.min,
    maxThreshold: validationConstants.damageInMillions.max,
    min: {
      model: ".tsunami.rnpsearch.minDamageMillionsDollars",
      validMessage: "Invalid Min Damage"
    },
    max:{
      model: ".tsunami.rnpsearch.maxDamageMillionsDollars",
      validMessage: "Invalid Max Damage"
    }
  }
];


export {
  RunupLocInfo,
  RunupSourceInfo,
  RunupParamsEffects
}