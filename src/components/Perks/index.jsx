import React from 'react'
import {PerksContainer} from './PerksElements';
import Info from "../Info";
import {homeObjThree} from "../Info/Data";

const Perks = () => {

  return (
    <>
      <PerksContainer id='perks'>
          <Info {...homeObjThree}/>
      </PerksContainer>
    </>
  )
}

export default Perks
