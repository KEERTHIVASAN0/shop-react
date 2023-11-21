import React from 'react'
import CarouselPage from './CarouselPage'
import CardPage from './CardPage'
import MDBContainer from './login'
import MDBFooter from './footer'

function HomePage() {
  return (
    <div style={{alignContent: 'center', marginTop:'0%', fontWeight:'bold'}}> 
    <CarouselPage/>
    <CardPage/>
   <MDBContainer />
    </div>
  )
}

export default HomePage