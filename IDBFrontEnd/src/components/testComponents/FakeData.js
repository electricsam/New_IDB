
import React from 'react'
import TestCell from "./TestCell"
import store from '../../store'
import {  } from "react-router-redux";
const headAccess = [
  {Header: "Color" , accessor: 'color' },
  {Header: "Food" , accessor: 'food' },
  {Header: "Actor" , accessor: 'actor' },
  {Header: "Edit", accessor: "edit", Cell: (props,  )=> (<button onClick={() => console.log(props)}>Edit</button>)}
]

const editRow = (value) =>{
  // store.dispatch(push("/tsunamis/update/5672"))
  console.log(value)
}

const data = [
  {color: "blue", actor: "Daniel Day Lewis", food: "beef"},
  {color: "green", actor: "Jessica Chastain", food: "chicken"},
  {color: "yellow", actor: "Audry Hepburn", food: "booze"},
]

export {data, headAccess}