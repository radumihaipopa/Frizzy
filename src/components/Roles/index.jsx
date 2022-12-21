import React from 'react';
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServiceElements'

const Roles = () => {

  return (
    <ServicesContainer id='roles'>
      <ServicesH1>Roles</ServicesH1>
      <ServicesWrapper>

        <ServicesCard background={'#cedfe7'}>
          <ServicesIcon src={'/images/god.png'}/>
          <ServicesH2>Gods <br/> 50+ NFTs</ServicesH2>
          <ServicesP> ❤ 3x farm gains;<br/>
            ❤ 4x raffles multiplier; <br/>
            ❤ WL, free mints & gifts;
          </ServicesP>
        </ServicesCard>

        <ServicesCard background={'#eec632'}>
        <ServicesIcon src={'/images/king.png'}/>
          <ServicesH2>Kings <br/> 30+ NFTs</ServicesH2>
          <ServicesP> ❤ 2x farm gains;<br/>
            ❤ 3x raffles multiplier; <br/>
            ❤ WL & free mints;
          </ServicesP>
        </ServicesCard>

        <ServicesCard background={'#964d45'}>
          <ServicesIcon src={'/images/knight.png'}/>
          <ServicesH2>Knights <br/> 20+ NFTs</ServicesH2>
          <ServicesP> ❤ 1.75x farm gains;<br/>
            ❤ 3x raffles multiplier; <br/>
            ❤ WL on presales;
          </ServicesP>
        </ServicesCard>

        <ServicesCard background={'#857878'}>
          <ServicesIcon src={'/images/squire.png'}/>
          <ServicesH2>Squires <br/> 10+ NFTs</ServicesH2>
          <ServicesP> ❤ 1.5x farm gains;<br/>
            ❤ 2x raffles multiplier; <br/>
            ❤ WL on presales;
          </ServicesP>
        </ServicesCard>

        <ServicesCard background={'#397e5b'}>
          <ServicesIcon src={'/images/ranger.png'}/>
          <ServicesH2>Rangers <br/> 5+ NFTs</ServicesH2>
          <ServicesP> ❤ 1.25x farm gains;<br/>
            ❤ 2x raffles multiplier;
          </ServicesP>
        </ServicesCard>

        <ServicesCard background={'#b8d2e7'}>
          <ServicesIcon src={'/images/scout.png'}/>
          <ServicesH2>Scouts<br/> 1+ NFTs</ServicesH2>
          <ServicesP> ❤ 1x farm gains;<br/>
            ❤ 1x raffles multiplier;
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Roles
