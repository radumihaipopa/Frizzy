import React, { useState } from 'react';
import { Modal } from '../Modal/Modal';
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServiceElements'

const Creators = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  };

  return (
    <ServicesContainer id='creators'>
      <ServicesH1>Creators</ServicesH1>
      <Modal showModal={showModal} setShowModal={setShowModal} image={'/images/riddle.gif'}/>

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
        <ServicesCard onClick={openModal}>
          <ServicesIcon src={'/images/marc.png'}/>
          <ServicesH2>Marcus</ServicesH2>
          <ServicesP>Inspirational character & Cute baby</ServicesP>
        </ServicesCard>

      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Creators
