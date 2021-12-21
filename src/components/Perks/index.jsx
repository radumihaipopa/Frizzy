import React from 'react'
import {PerksContainer} from './PerksElements';
import Info from "../Info";
import {homeObjFour, homeObjThree} from "../Info/Data";

const Perks = () => {

  return (
    <>
      <PerksContainer id='perks'>
          <Info {...homeObjThree}/>
          <Info {...homeObjFour}/>
      </PerksContainer>
    </>
  )
}

export default Perks
