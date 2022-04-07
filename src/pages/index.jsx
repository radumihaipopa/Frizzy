import React, {useEffect, useState} from 'react'
import Footer from '../components/Footer';
import Hero from '../components/Hero'
import Info from '../components/Info'
import {homeObjOne, homeObjTwo} from '../components/Info/Data';
import Navbar from '../components/Navbar'
import Roadmap from '../components/Roadmap';
import Creators from '../components/Creators';
import Sidebar from '../components/SideBar';
import Perks from '../components/Perks';
import {isMobile} from 'react-device-detect';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false),
    rootElement = document.getElementById('root');

  const toggle = () =>{
    setIsOpen(!isOpen);
  }

  if (isMobile) {
     rootElement.style.width = `fit-content`;
  }
  const updateWidthAndHeight = () => {
     if (isMobile) {
         // rootElement.style.width = `${window.innerWidth}px`;
     }
  };

  useEffect(() => {
      window.addEventListener("resize", updateWidthAndHeight);
      return () => window.removeEventListener("resize", updateWidthAndHeight);
  });

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
