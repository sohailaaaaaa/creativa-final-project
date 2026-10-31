import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Header from './Header'
import FindUs from './FindUs'
import SendMessage from './SendMessage'
import HappyClients from './HappyClients'

function AllContact() {
  return (
    <div>
        <Navbar/>
        <Header/>
        <FindUs/>
        <SendMessage/>
        <HappyClients/>
        <Footer/>
    </div>
  )
}

export default AllContact