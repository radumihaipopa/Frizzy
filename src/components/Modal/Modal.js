import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

const Background = styled.div`
  position: absolute;
  display: flex;
  border-radius: 20px;
  z-index: 10;
`;

const ModalWrapper = styled.div`
  width: 600px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  z-index: 10;
  border-radius: 20px;
    @media screen and (max-width: 768px) {
    width: 500px;
  }
  @media screen and (max-width: 480px) {
    width: 350px;
  }  
  @media screen and (max-width: 350px) {
    width: 250px;
  }  
`;

const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background: #000;
  
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

export const Modal = ({ showModal, setShowModal, image }) => {
    const modalRef = useRef();

    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(5%)` : `translateY(-100%)`
    });

    const closeModal = e => {
        if (modalRef.current === e.target) {
            setShowModal(false);
        }
    };

    const keyPress = useCallback(
      e => {
          if (e.key === 'Escape' && showModal) {
              setShowModal(false);
          }
      },
      [setShowModal, showModal]
    );

    useEffect(
      () => {
          document.addEventListener('keydown', keyPress);
          return () => document.removeEventListener('keydown', keyPress);
      },
      [keyPress]
    );

    return (
      <>
          {showModal ? (
            <Background onClick={closeModal} ref={modalRef}>
                <animated.div style={animation}>
                    <ModalWrapper showModal={showModal}>
                        <ModalImg src={image} alt='modal' />
                        <CloseModalButton
                          aria-label='Close modal'
                          onClick={() => setShowModal(prev => !prev)}
                        />
                    </ModalWrapper>
                </animated.div>
            </Background>
          ) : null}
      </>
    );
};