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
          <SidebarLink to='roadmap' onClick={toggle} offset={-80}>Roadmap</SidebarLink>
          <SidebarLink to='perks' onClick={toggle} offset={-80}>Perks</SidebarLink>
            <SidebarLink to='roles' onClick={toggle} offset={-80}>Roles</SidebarLink>
            <SidebarLink to='brand' onClick={toggle} offset={-80}>Brand</SidebarLink>
            <SidebarLink to='creators' onClick={toggle} offset={-80}>Creators & Contact</SidebarLink>
        <SideBtnWrap>
          <SidebarOutLink href='//xoxno.com/collection/FRIZZY-0153d1'>Buy Frizzy</SidebarOutLink>
        </SideBtnWrap>
          <SideBtnWrap>
              <SidebarOutLink>🛠️ Read Book 🛠️</SidebarOutLink>
          </SideBtnWrap>
        </SidebarMenu>
      </SidebarWrapper>
</SidebarContainer>
  )
}

export default Sidebar
