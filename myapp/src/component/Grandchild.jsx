import React from 'react'
import Cards from './Cards'
import myImg from './assets/download.jpeg'
import myImg2 from './assets/download1.jpeg'
import myImg3 from './assets/download (1).jpeg'
const Grandchild = () => {
  return (
    <>
    <div> calling from Grandchild</div>
    <Cards 
    title = "Title 1" 
    myimg={myImg}
    subtitle = "First subtitle"
    />
    <Cards 
    title = "Title 2" 
    myimg={myImg2}
    subtitle = "Image 2"
    />
    <Cards 
    title = "Title 3" 
    myimg={myImg3}
    subtitle = "Image 3"
    />
    </>
  )
}
export default Grandchild