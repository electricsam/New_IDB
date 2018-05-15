import { validationConstants, countries, regions } from "../tsunamiForms/constants";

import Styles from './InsertTsunamiStyles.css';


const DateAndLocation = [
  {
    type: "TEXT",
    sectionStyle: Styles.year,
    titleStyle: Styles.minMaxTitle,
    title: "Year",
    minThreshold: validationConstants.year.min,
    maxThreshold: validationConstants.year.max,
    model: ".tsunami.insert.year",
    validMessage: "Invalid Year"
  },
  {
    type: "TEXT",
    sectionStyle: Styles.month,
    titleStyle: Styles.minMaxTitle,
    title: "Month",
    model: ".tsunami.insert.month",
    minThreshold: validationConstants.month.min,
    maxThreshold: validationConstants.month.max,
    validMessage: "Invalid Month"
  },
  {
    type: "TEXT",
    sectionStyle: Styles.day,
    titleStyle: Styles.minMaxTitle,
    title: "Day",
    model: ".tsunami.insert.day",
    minThreshold: validationConstants.day.min,
    maxThreshold: validationConstants.day.max,
    validMessage: "Invalid Day"
  },
  {
    type: "TEXT",
    sectionStyle: Styles.hour,
    titleStyle: Styles.minMaxTitle,
    title: "Hour",
    model: ".tsunami.insert.hour",
    minThreshold: validationConstants.hour.min,
    maxThreshold: validationConstants.hour.max,
    validMessage: "Invalid Hour"
  },
  {
    type: "TEXT",
    sectionStyle: Styles.second,
    titleStyle: Styles.minMaxTitle,
    title: "Second",
    model: ".tsunami.insert.second",
    minThreshold: validationConstants.second.min,
    maxThreshold: validationConstants.second.max,
    validMessage: "Invalid Second"
  },
  {
    type: "TEXT",
    sectionStyle: Styles.latitude,
    titleStyle: Styles.minMaxTitle,
    title: "Latitude",
    model: ".tsunami.insert.latitude",
    minThreshold: validationConstants.latitude.min,
    maxThreshold: validationConstants.latitude.max,
    validMessage: "Invalid Latitude"
  },
  {
    type: "TEXT",
    sectionStyle: Styles.longitude,
    titleStyle: Styles.minMaxTitle,
    title: "Longitude",
    model: ".tsunami.insert.longitude",
    minThreshold: validationConstants.longitude.min,
    maxThreshold: validationConstants.longitude.max,
    validMessage: "Invalid Longitude"
  },
  {
    type: "TEXTNOVAL",
    sectionStyle: Styles.location,
    titleStyle: Styles.minMaxTitle,
    title: "Location",
    model: ".tsunami.insert.locationName",
  },
  {
    type: "DROPDOWN",
    title: "Country",
    model: ".tsunami.insert.country",
    id: ".tsunami.insert.country",
    data: countries,
    styles:{
      wrapper: Styles.country,
      title: Styles.minMaxTitle
    }
  },
  {
    type: "DROPDOWN",
    title: "Region",
    model: ".tsunami.insert.regionCode",
    id: ".tsunami.insert.regionCode",
    data: regions,
    styles:{
      wrapper: Styles.region,
      title: Styles.minMaxTitle
    }
  },
  {
    type: "DROPDOWNOR",
    title: "State",
    model: ".tsunami.insert.area",
    id: ".tsunami.insert.area",
    disabled: "USA",
    styles:{
      wrapper: Styles.area
    }
  }
];

export {
  DateAndLocation,
}