import {validationConstants} from "../../formConstants/constants";

const DateAndLocation = [
  {
    type: "TEXT",
    title: "Year",
    minThreshold: validationConstants.year.min,
    maxThreshold: validationConstants.year.max,
    model: ".volcano.insert.year",
    validMessage: "Invalid Year"
  },
  {
    type: "TEXT",
    title: "Month",
    minThreshold: validationConstants.month.min,
    maxThreshold: validationConstants.month.max,
    model: ".volcano.insert.month",
    validMessage: "Invalid Month"
  },
  {
    type: "TEXT",
    title: "Day",
    minThreshold: validationConstants.day.min,
    maxThreshold: validationConstants.day.max,
    model: ".volcano.insert.day",
    validMessage: "Invalid Day"
  },
  {
    type: "TEXT",
    title: "VEI",
    minThreshold: validationConstants.vei.min,
    maxThreshold: validationConstants.vei.max,
    model: ".volcano.insert.VEI",
    validMessage: "Invalid VEI"
  },
  {

  }
];

export {
  DateAndLocation
}