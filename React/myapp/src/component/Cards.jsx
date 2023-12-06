import React from 'react'

const Cards = (props) => {
  return (
    <>
    <h2>From cards component</h2>
    <h1>{props.title}</h1>
    <img src={props.myimg} alt="" />
    <h2>{props.subtitle}</h2>
    </>
  )
}
export default Cards