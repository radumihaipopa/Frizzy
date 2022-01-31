import React from 'react'
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServiceElements'

const Roadmap = () => {
  return (
    <ServicesContainer id='roadmap'>
      <ServicesH1>Roadmap</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={'/images/yellow.png'}/>
          <ServicesH2>Q1/Q2 2022</ServicesH2>
          <ServicesP> ❤ Give back to the community (giveaways & new art);<br/>
            ❤ Create a stake DAO for owners; <br/>
            ❤ Expand the community.
           </ServicesP>
        </ServicesCard>
        <ServicesCard>
        <ServicesIcon src={'/images/red.png'}/>
          <ServicesH2>Q3/Q4 2022</ServicesH2>
          <ServicesP>❤ Create Frizzy merchandise; <br/>
            ❤ Create a 3D Frizzy collection; <br/>
            ❤ Donate! </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={'/images/blue.png'}/>
          <ServicesH2>2023</ServicesH2>
          <ServicesP>❤ Start developing a PLAY-TO-EARN game; <br/> ❤ Create a toy shop!</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Roadmap
