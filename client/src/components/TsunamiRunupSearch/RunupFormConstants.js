import { regions, validationConstants, countries } from '../tsunamiForms/constants'
import RunupSearchStyles from './RunupSearchContainerStyle.css'


const RunupLocInfo = [
  {
    type: 'DROPDOWN',
    title: 'Region',
    model: '.tsunami.rnpsearch.region',
    data: regions,
    id: '.tsunami.rnpsearch.region',
    styles: {
      wrapper: RunupSearchStyles.rnpRegion,
      title: RunupSearchStyles.minMaxTitle
    }
  },
  {
    type: "DROPDOWN",
    title: "Country",
    model: ".tsunami.rnpsearch.country",
    id: ".tsunami.rnpsearch.country",
    data: countries,
    styles: {
      wrapper: RunupSearchStyles.rnpCountry,
      title: RunupSearchStyles.minMaxTitle
    }
  },
  {
    type: 'RADIO',
    title: "Location",
    sectionStyle: RunupSearchStyles.rnpLocTypes,
    titleStyle: RunupSearchStyles.minMaxTitle,
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
    sectionStyle:RunupSearchStyles.distance,
    titleStyle: RunupSearchStyles.minMaxTitle,
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
    sectionStyle: RunupSearchStyles.rnpCoordinates,
    titleStyle: RunupSearchStyles.minMaxTitle,
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

export {
  RunupLocInfo
}