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
              <Img src={'/images/raCket.png'} alt={'logo'}/>
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
              <NavLinks to='roles'
                        smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >Roles</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='brand'
                        smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >Brand</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='creators'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >Creators & Contact</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink href='//xoxno.com/collection/FRIZZY-0153d1' onMouseEnter={onHover} onMouseLeave={onHover}>
              Buy Frizzy {hover ? <ArrowForward /> : <ArrowRight/>}
            </NavBtnLink>
          </NavBtn>
          <NavBtn>
            <NavBtnLink>
              🛠️ Read Book 🛠️
            </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
    </>
  )
}

export default Navbar
