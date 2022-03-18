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
          <ServicesP> ❤ Giveaways & NFT drops;<br/>
            ❤ Create a stake DAO; <br/>
            ❤ Expand the community.
           </ServicesP>
        </ServicesCard>
        <ServicesCard>
        <ServicesIcon src={'/images/red.png'}/>
          <ServicesH2>Q2/Q3/Q4 2022</ServicesH2>
          <ServicesP>❤ Create toys & merchandise; <br/>
            ❤ 3D Frizzy collection; <br/>
            </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={'/images/blue.png'}/>
          <ServicesH2>After mint</ServicesH2>
          <ServicesP>❤ Create a toy shop; <br/> ❤ Start developing a game!</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Roadmap
