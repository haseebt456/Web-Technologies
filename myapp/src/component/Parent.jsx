import React from 'react'
import Child from './Child'
import parentprp from './assets/images.jpeg'
const Parent = () => {
  return (
    <>
    <h2 className='prbg'> Calling from Parent</h2>
    <Child
    parentPrp={parentprp}
    />
    </>
  )
}
export default Parent;