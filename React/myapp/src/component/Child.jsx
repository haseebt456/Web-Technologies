import React from 'react'
import Grandchild from './Grandchild'
const Child = (props) => {
  return (
    <>
    <div>Calling from Child</div>
    <Grandchild
    parentChildprp={props.parentprp}
    />
    </>
  )
}
export default Child