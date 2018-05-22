import {referenceHave} from "../../tsunamiForms/constants";



const Parameters = [
  {
    type: "TEXTNOVAL",
    title: "Year",
    model: ".reference.search.year"
  },
  {
    type: "RADIO",
    title: "Author",
    htmlFor: ".reference.author",
    model: ".reference.author",
    radios: [
      {value: "authorStart", label: "Starts With"},
      {value: "authorIncludes", label: "Includes"},
      {value: "authorMatches", label: "Matches"},
      {value: "authorNot", label: "or Does Not Match"}
    ],
    textModelPreface: ".reference.search.",
    condition: 'author'
  },
  {
    type: "RADIO",
    title: "Citation",
    htmlFor: ".reference.citation",
    model: ".reference.citation",
    radios: [
      {value: "citStart", label: "Starts With"},
      {value: "citIncludes", label: "Includes"},
      {value: "citMatches", label: "Matches"},
      {value: "citNot", label: "or Does Not Match"}
    ],
    textModelPreface: ".reference.search.",
    condition: 'citation'
  },
  {
    type: "DROPDOWN",
    title: "Have? and DB Status",
    model: ".reference.search.have",
    id: ".reference.search.have",
    data: referenceHave
  },
  {
    type: "RADIO",
    title: "Comments",
    htmlFor: ".reference.comments",
    model: ".reference.comments",
    radios: [
      {value: "commentsStart", label: "Starts With"},
      {value: "commentsIncludes", label: "Includes"},
      {value: "commentsMatches", label: "Matches"},
      {value: "commentsNot", label: "or Does Not Match"}
    ],
    textModelPreface: ".reference.search.",
    condition: 'comments'
  }
];


export {
  Parameters
}