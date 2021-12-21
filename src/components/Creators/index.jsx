import React from 'react'
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServiceElements'

const Creators = () => {
  return (
    <ServicesContainer id='creators'>
      <ServicesH1>Creators</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={'/images/mih.png'}/>
          <ServicesH2>Mihai</ServicesH2>
          <ServicesP>Co-founder & Programmer & Fun Dad</ServicesP>
        </ServicesCard>
        <ServicesCard>
        <ServicesIcon src={'/images/mom.png'}/>
          <ServicesH2>Andreea</ServicesH2>
          <ServicesP>Co-founder & Artist & Loving Mommy</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={'/images/marc.png'}/>
          <ServicesH2>Marcus</ServicesH2>
          <ServicesP>Inspirational character & Cute baby</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Creators
