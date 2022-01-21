import React, {useState, useEffect} from 'react'
import { FaBars } from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavLinks, NavItem, NavBtn, NavBtnLink, ImgWrap, Img, ArrowForward, ArrowRight } from './NavbarElements'
import { animateScroll as scroll } from 'react-scroll';

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)
  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover)
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <>
    <IconContext.Provider value={{ color: '#fff'}}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo src to='/' onClick={toggleHome}>
            <ImgWrap>
              <Img src={'/images/logo192.png'} alt={'logo'}/>
            </ImgWrap>
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='about'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='giveaways'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >Giveaways</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='roadmap'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >Roadmap</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='perks'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >Perks</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='creators'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >Creators & Contact</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink href='//trust.market/buy/Frizzy' onMouseEnter={onHover} onMouseLeave={onHover}>
              Mint now ! {hover ? <ArrowForward /> : <ArrowRight/>}
            </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
    </>
  )
}

export default Navbar
