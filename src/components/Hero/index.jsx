import React from 'react'
import { HeroContainer, HeroContent, HeroP, Img } from './HeroElements'

const Hero = () => {

  return (
    <HeroContainer id='home'>
          <Img src={'/images/frizzy.gif'} alt={'Loading...'}/>
      <HeroContent>
        <HeroP>Hi, my name is Frizzy! I am a playful curly red haired boy who lives in the suburbs with his parents.
            My parents are launching a unique collection of NFTs with the purpose of helping premature born babies! </HeroP>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero
