import React, {useState} from 'react'
import { FaDiscord, FaInstagram, FaTwitter } from 'react-icons/fa'
import { FooterContainer, FooterWrap, Img, ImgWrap, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights } from './FooterElements'
import { animateScroll as scroll } from 'react-scroll';
import {Modal} from "../Modal/Modal";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  }

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  };
  return (
    <FooterContainer id='contact'>
      <FooterWrap>
        <Modal showModal={showModal} setShowModal={setShowModal} image={'/images/treasure.png'}/>

        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
              <ImgWrap>
                <Img src={'/images/logo192.png'} alt={'logo'}/>
              </ImgWrap>
            </SocialLogo>
            <WebsiteRights>Born in Romania <WebsiteRights onClick={openModal}>👪</WebsiteRights> 2022.</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href='//www.instagram.com/frizzy_eboy/' target='_blank' arial-label='Instagram'>
                <FaInstagram/>
              </SocialIconLink>
              <SocialIconLink href='//twitter.com/frizzy_eboy' target='_blank' arial-label='Twitter'>
                <FaTwitter/>
              </SocialIconLink>
              <SocialIconLink href='//discord.gg/98UnqFATbS' target='_blank' arial-label='Discord'>
                <FaDiscord />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
