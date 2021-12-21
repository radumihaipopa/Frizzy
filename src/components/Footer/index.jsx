import React from 'react'
import { FaDiscord, FaInstagram, FaTwitter } from 'react-icons/fa'
import { FooterContainer, FooterWrap, Img, ImgWrap, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights } from './FooterElements'
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <FooterContainer id='contact'>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
              <ImgWrap>
                <Img src={'/images/logo192.png'} alt={'logo'}/>
              </ImgWrap>
            </SocialLogo>
            <WebsiteRights>Born in Romania 👪 @ 2020.</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href='//www.instagram.com/frizzy_eboy/' target='_blank' arial-label='Instagram'>
                <FaInstagram/>
              </SocialIconLink>
              <SocialIconLink href='//twitter.com/frizzy_eboy' target='_blank' arial-label='Twitter'>
                <FaTwitter/>
              </SocialIconLink>
              <SocialIconLink href='//discord.gg/aQjQx5e5' target='_blank' arial-label='Discord'>
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
