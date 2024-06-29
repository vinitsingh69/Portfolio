import React from 'react'
import { useState } from 'react';
import { Nav, NavLink, NavbarContainer,NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileLink } from './NavbarStyledComponent'
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { useTheme } from 'styled-components';  

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  let theme = useTheme() 
  
  return (
    <Nav>
      <NavbarContainer>  
        <MobileIcon> <FaBars onClick={() => { setIsOpen(!isOpen) }} /></MobileIcon>

        <NavItems> 
          <NavLink href="#about">About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#experience'>Experience</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#education'>Education</NavLink>
          <NavLink href='#contact'>Contact</NavLink>
         
        </NavItems>


        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">Check Github</GitHubButton>
        </ButtonContainer>

        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => { setIsOpen(!isOpen) }}>About</MobileLink>
            <MobileLink href='#skills' onClick={() => { setIsOpen(!isOpen) }}>Skills</MobileLink>
            <MobileLink href='#experience' onClick={() => { setIsOpen(!isOpen) }}>Experience</MobileLink>
            <MobileLink href='#projects' onClick={() => { setIsOpen(!isOpen) }}>Projects</MobileLink>
            <MobileLink href='#education' onClick={() => { setIsOpen(!isOpen) }}>Education</MobileLink>
            <MobileLink href='#contact' onClick={() => { setIsOpen(!isOpen) }}>Contact</MobileLink>
            <GitHubButton style={{ padding: '10px 16px', background: `${theme.primary}`, color: 'black', width: 'max-content' }} href={Bio.github} target="_blank">Check Github</GitHubButton>
          </MobileMenu>
        }


      </NavbarContainer>
    </Nav>
  )
}

export default Navbar