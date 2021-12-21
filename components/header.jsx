import React, { useState } from "react";
import styled from "styled-components";
import colors from "../styles/colors";
import Image from "next/image";
import Link from "next/link";
import Hamburger from "../images/hamburger.png";
import BlackHamburger from "../images/hamburger-black.png";
import dimensions from "../styles/dimensions";
import XButton from "../images/x-button.png";
import GlobalStyle from "../styles/typography";

const NavContainer = styled.div`
  width: 100%;
  top: 0;
  z-index: 3;
  position: fixed;
  height: 100px;
  display: flex;
  align-items: center;
  background-color: ${({ color }) =>
    (color === "black" && `${colors.black}`) ||
    (color === "white" && `${colors.white}`)};
  z-index: 100;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    height: 70px;
  }
`;

const NavLogo = styled.a`
  margin-left: 35px;
`;

const LogoSize = styled.div`
  img {
    width: 106px;
    height: 32px;
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    img {
      width: 99px;
      height: 30px;
    }
  }
`;

const NavCTA = styled.div`
  color: ${colors.black};
  background-color: ${colors.white};
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 12px;
  padding-bottom: 12px;
  border-radius: 5px;
  border: 1px solid black;
  cursor: pointer;
  @media (max-width: ${dimensions.maxwidthTablet}px) {
    display: none;
  }
`;

const NavHamburger = styled.div`
  position: absolute;
  right: 35px;

  img {
    width: 26px;
    height: 19px;
  }
  @media (min-width: ${dimensions.maxwidthTablet}px) {
    display: none;
  }
`;

const Block = styled.div`
  display: ${({ isVisible }) => (isVisible ? `block` : `none`)};
  width: 10px;
  height: 20px;
  background-color: ${({ color }) =>
    (color === "pink" && `${colors.pink}`) ||
    (color === "blue" && `${colors.blue}`)};
  position: absolute;
  margin-left: -15px;
  margin-top: 30px;
`;

const HeaderLink = styled.div`
  color: ${({ color }) =>
    (color === "black" && `${colors.white}`) ||
    (color === "white" && `${colors.black}`)};
  margin-right: 75px;
  cursor: pointer;

  &:hover ${Block} {
    display: block;
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    display: none;
  }
`;

export const OpenNavContainer = styled.div`
  display: none;
  &.open {
    position: absolute;
    top: 0;
    z-index: 4;
    width: 100%;
    height: 100vh;
    background-color: ${colors.black};
    display: flex;
    flex-direction: column;
  }
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 22px;
  right: 45px;
`;

export const MobileLink = styled.div`
  width: 100%;
  height: 100px;
  background-color: ${({ color, currentPage }) =>
    (color === "blue" && currentPage && `${colors.blue}`) ||
    (color === "pink" && currentPage && `${colors.pink}`) ||
    (color === "red" && currentPage && `${colors.red}`)};
  text-decoration: none;
  color: white;
  h2 {
    margin-left: 35px;
    margin-top: 40px;
    margin-bottom: 40px;
  }
`;

export const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const MobileNavLogo = styled.div`
  margin-left: 35px;
  margin-top: 18px;
`;

const NavLinks = styled.div`
  position: absolute;
  right: 45px;
  display: flex;
  align-items: center;
`;

export default function Header(props) {
  const [open, setOpen] = useState(false);
  return (
    <NavContainer color={props.mode} open={open ? "open" : ""}>
      <GlobalStyle />
      <NavLogo href="/">
        <LogoSize>
          <Image
            className="logo-image"
            src={props.image}
            width={'106px'}
            height={'32px'}
            priority
          />
        </LogoSize>
      </NavLogo>

      <NavLinks>
        <HeaderLink color={props.mode}>
          <Block color="blue" isVisible={props.current == "home"} />
          <Link href="/">
            <p>home</p>
          </Link>
        </HeaderLink>

        <HeaderLink color={props.mode}>
          <Block color="pink" isVisible={props.current == "about"} />
          <Link href="/about">
            <p>mission</p>
          </Link>
        </HeaderLink>

        <div>
          <Link href="/product">
            <NavCTA color={props.mode}>learn more</NavCTA>
          </Link>
        </div>
      </NavLinks>

      <NavHamburger onClick={() => setOpen(!open)}>
        <Image src={props.mode === "black" ? Hamburger : BlackHamburger} />
      </NavHamburger>

      <OpenNavContainer className={open ? "open" : ""}>
        <TopBar>
          <CloseButton
            onClick={() => setOpen(!open)}
            className={open ? "open" : ""}
          >
            <Image src={XButton} />
          </CloseButton>

          <MobileNavLogo>
            <LogoSize>
              <Image className="logo-image" src={props.mobileImage} width={'99px'} height={'30px'}/>
            </LogoSize>
          </MobileNavLogo>
        </TopBar>
        <MobileMenu>
          <Link href="/">
            <MobileLink color={"blue"} currentPage={props.current == "home"}>
              <h2> home </h2>
            </MobileLink>
          </Link>

          <Link href="/about">
            <MobileLink color={"pink"} currentPage={props.current == "about"}>
              <h2> about </h2>
            </MobileLink>
          </Link>

          <Link href="/product">
            <MobileLink color={"red"} currentPage={props.current == "product"}>
              <h2> learn more </h2>
            </MobileLink>
          </Link>
        </MobileMenu>
      </OpenNavContainer>
    </NavContainer>
  );
}