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
            ❤ Expand the community; <br/>
            ❤ Donate.
           </ServicesP>
        </ServicesCard>
        <ServicesCard>
        <ServicesIcon src={'/images/red.png'}/>
          <ServicesH2>Q3/Q4 2022</ServicesH2>
          <ServicesP>❤ Transform Frizzy into a brand; <br/>
            ❤ Expand the community; <br/>
            ❤ Create merchandise. </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={'/images/blue.png'}/>
          <ServicesH2>2023</ServicesH2>
          <ServicesP>❤ Start developing a Frizzy game; <br/> ❤ Create a toy shop !!!</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Roadmap
