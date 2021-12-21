import React from 'react'
import { HeroContainer, HeroContent, HeroP, Img } from './HeroElements'

const Hero = () => {

  return (
    <HeroContainer id='home'>
          <Img src={'/images/Cats_small.png'} alt={'cats'}/>
      <HeroContent>
        <HeroP>Hi, my name is Frizzy! As my name suggests I am this curly red haired boy who lives in the suburbs with his parents.
            My parents are launching a unique collection of NFTs with the purpose of helping premature babies! </HeroP>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero
