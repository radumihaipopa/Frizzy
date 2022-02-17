import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarOutLink, SideBtnWrap } from './SidebarElements'

const Sidebar = ({isOpen,toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='about' onClick={toggle} offset={-80}>About</SidebarLink>
          <SidebarLink to='giveaways' onClick={toggle} offset={-80}>Giveaways</SidebarLink>
          <SidebarLink to='roadmap' onClick={toggle} offset={-80}>Roadmap</SidebarLink>
          <SidebarLink to='perks' onClick={toggle} offset={-80}>Perks</SidebarLink>
          <SidebarLink to='creators' onClick={toggle} offset={-80}>Creators</SidebarLink>
          <SidebarLink to='partners' onClick={toggle} offset={-80}>Partners</SidebarLink>
          <SidebarLink to='contact' onClick={toggle} offset={-80}>Contact</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarOutLink href='//trust.market/buy/Frizzy'>Mint</SidebarOutLink>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
