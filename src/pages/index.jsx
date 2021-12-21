import React, {useState} from 'react'
import Footer from '../components/Footer';
import Hero from '../components/Hero'
import Info from '../components/Info'
import {homeObjOne, homeObjTwo} from '../components/Info/Data';
import Navbar from '../components/Navbar'
import Roadmap from '../components/Roadmap';
import Creators from '../components/Creators';
import Sidebar from '../components/SideBar';
import Perks from '../components/Perks';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () =>{
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle}/>
      <Hero />
      <Info {...homeObjOne}/>
      <Info {...homeObjTwo}/>
      <Roadmap />
        <Perks />
      <Creators />
      <Footer />
    </>
  )
}

export default Home
