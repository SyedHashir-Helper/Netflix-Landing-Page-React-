import React from 'react'
import Header from './components/Header/Header'
import HorizontalLine from './components/UIComponents/HorizontalLine'
import img1 from "./assets/images/1.jpg"
import img2 from "./assets/images/2.png"
import img3 from "./assets/images/3.png"
import img4 from "./assets/images/Net.png"
import BlackSection from "./components/Main/BlackSection.jsx"
import FAQ from './components/Main/FAQ.jsx'
import TextField from './components/UIComponents/TextField.jsx'
import _Button from './components/UIComponents/_Button.jsx'
import Membership from './components/Main/Membership.jsx'
import Footer from './components/Footer/Footer.jsx'



const App = () => {

  const black_sections = [
    {
      bigText: "Enjoy on your TV",
      smallText: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
      img: img2,
      reverse: true
    },
    {
      bigText: "Download your shows to watch offline",
      smallText: "Save your favorites easily and always have something to watch.",
      img: img1,
      reverse: false
    },
    {
      bigText: "Create profiles for kids",
      smallText: "Send kids on adventures with their favorite characters in a space made just for them—free with your membership.",
      img: img3,
      reverse: true
    },
    {
      bigText: "Watch everywhere",
      smallText: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
      img: img4,
      reverse: false
    },
  ]


  return (
    <>
      <Header/>
      <HorizontalLine/>

      {
        black_sections.map((element,index)=>{
          return (
            <div key={index}>
              <BlackSection
                bigText={element.bigText}
                smallText={element.smallText}
                img={element.img}
                reverse={element.reverse}
              > 
              </BlackSection>
              <HorizontalLine/>
            </div>
          )
        })
      }

      <FAQ/>

      <Membership/>
      <HorizontalLine/>
      <Footer/>
    </>
  )
}

export default App
