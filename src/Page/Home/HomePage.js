import React from 'react'
import CardHome from '../../Components/Home/CardHome'
import Cards from '../../Components/Articles/Cards'
import Section2 from '../../Components/Home/Section2'
import Section3 from '../../Components/Home/Section3'
import Footer from '../../Components/Utility/Footer'
import Navbar from '../../Components/Utility/Navbar'
import Tags from '../../Components/Tags/Tags'
import AllTags from '../../Components/Tags/AllTags'

function HomePage() {
  return (
    <div>
      <Navbar/>
        <AllTags/>
        <CardHome/>
        <Cards/>
        <Section2/>
        <Section3/>
        <Footer/>
    </div>
  )
}

export default HomePage