import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Header from './Header'
import HappyClients from './HappyClients'
import Services from './Services'
import BestFeatures from './BestFeatures'
import TeamMembers from './TeamMembers'

function AllAbout() {
  return (
    <div>
        <Navbar/>
        <Header/>
        <BestFeatures/>
        <TeamMembers/>
        <Services/>
        <HappyClients/>
        <Footer/>
    </div>
  )
}

export default AllAbout