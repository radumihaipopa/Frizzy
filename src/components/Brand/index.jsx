import React from 'react'
import {BrandContainer} from './BrandElements';
import Info from "../Info";
import {homeObjFour} from "../Info/Data";

const Brand = () => {

  return (
    <>
      <BrandContainer id='brand'>
          <Info {...homeObjFour}/>
      </BrandContainer>
    </>
  )
}

export default Brand
