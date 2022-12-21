import React from 'react'
import { FaDiscord, FaTwitter } from 'react-icons/fa'
import { FooterContainer, FooterWrap, Img, ImgWrap, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap } from './FooterElements'
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
                <Img src={'/images/friends.png'} alt={'friends'}/>
              </ImgWrap>
            </SocialLogo>
            <SocialIcons>
              <SocialIconLink href='//twitter.com/thefrizzyboy' target='_blank' arial-label='Twitter'>
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
