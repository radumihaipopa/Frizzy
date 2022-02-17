import React from 'react'
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon1, ServicesIcon2, ServicesH2} from './ServiceElements'

const Partners = () => {
  return (
    <ServicesContainer id='partners'>
      <ServicesH1>Partners</ServicesH1>
      <ServicesWrapper>
        <ServicesCard href='//elrondgiants.com//'>
          <ServicesIcon1 src={'/images/giants.jpeg'}/>
            <ServicesH2 src={'/images/giants.png'}/>

        </ServicesCard>
              <ServicesCard href='//karmagurunft.com/'>
                  <ServicesIcon2 src={'/images/guru.png'}/>
              </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Partners