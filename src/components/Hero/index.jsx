import React, { useState } from 'react'
import { HeroContainer, HeroContent, HeroP, HeroP2, Img } from './HeroElements'
import {Modal} from "../Modal/Modal";

const Hero = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev);
    };

  return (
    <HeroContainer id='home'>
        <Modal showModal={showModal} setShowModal={setShowModal} image={'/images/postcard.jpg'}/>
        <Img src={'/images/Santa_small.png'} onClick={openModal} alt={'Loading...'}/>
      <HeroContent>
        <HeroP>Hi there, I know you've been awesome this year! Have yourself a merry jolly freezy breezy Christmas!</HeroP>
          <HeroP2>Click Santa's bag, save the postcard, write something nice on it and send it to your loved ones! </HeroP2>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero
