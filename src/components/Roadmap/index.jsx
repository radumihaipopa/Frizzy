import React from 'react'
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServiceElements'

const Roadmap = () => {
  return (
    <ServicesContainer id='roadmap'>
      <ServicesH1>Roadmap</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={'/images/yellow.png'}/>
          <ServicesH2>Q1 2022</ServicesH2>
          <ServicesP>Give back to the community ❤<br/>
            (future NFT projects airdrops & giveaways in EGLD), donate and help NGOs, help Elrond community grow.</ServicesP>
        </ServicesCard>
        <ServicesCard>
        <ServicesIcon src={'/images/red.png'}/>
          <ServicesH2>Q2 2022</ServicesH2>
          <ServicesP>Transform Frizzy into a brand, increase visibility through marketing, create merchandise (3D printed limited edition `Frizz`, colouring books, T-shirts).</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={'/images/blue.png'}/>
          <ServicesH2>2023</ServicesH2>
          <ServicesP>Introduce Freezy to the Metaverse through a child friendly game !</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Roadmap
