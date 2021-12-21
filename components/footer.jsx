import React from "react";
import styled from "styled-components";
import colors from "../styles/colors";
import Image from "next/image";
import Link from "next/link";
import dimensions from "../styles/dimensions";

const FooterContainer = styled.div`
  width: 100%;
  height: 250px;
  background-color: ${({ color }) =>
    (color === "black" && `${colors.black}`) ||
    (color === "white" && `${colors.white}`)};
  display: flex;
  position: relative;
  cursor: default;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    height: 374px;
  }
`;

const FooterLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterLogo = styled.div`
  margin-left: 45px;
  margin-top: 40px;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    margin-left: 20px;
    margin-top: 32px;
  }
`;

const FooterLogoSize = styled.div`
  width: 102.64px;
  height: 50px;
`;

const FooterCopyright = styled.div`
  color: ${({ color }) =>
    (color === "black" && `${colors.white}`) ||
    (color === "white" && `${colors.black}`)};
  margin-left: 45px;
  margin-top: 166px;
  position: absolute;
  width: 208px;
  height: 27px;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    margin-left: 20px;
    margin-top: 315px;
    // position: absolute;
    // width: 374px;
  }
`;

const FooterLinkContainer = styled.div`
  right: 0;
  margin-top: 40px;
  position: absolute;
  display: flex;
  flex-direction: column;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    left: 0;
    margin-left: 20px;
    margin-top: 115px;
  }
`;

const Block = styled.div`
  display: none;
  width: 10px;
  height: 20px;
  background-color: ${({ color }) =>
    (color === "pink" && `${colors.pink}`) ||
    (color === "blue" && `${colors.blue}`) ||
    (color === "red" && `${colors.red}`)};
  position: absolute;
  margin-left: -15px;
`;

const FooterLink = styled.div`
  Link {
    display: block;
  }

  color: ${({ color }) =>
    (color === "black" && `${colors.white}`) ||
    (color === "white" && `${colors.black}`)};
  width: 208px;
  height: 33px;
  text-decoration: none;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    // width: 374px;
    // height: 25px;
  }
`;

const LinkWithBlock = styled.div`
  &:hover ${Block} {
    display: block;
  }
`;

export default function Footer(props) {
  return (
    <FooterContainer color={props.mode}>
      <FooterLeft>
        <FooterLogo>
          <FooterLogoSize>
            <Image src={props.image} width="142px" height="42px" />
          </FooterLogoSize>
        </FooterLogo>

        <FooterCopyright color={props.mode}>
          © 2021 Stо̄ Scooters
        </FooterCopyright>
      </FooterLeft>

      <FooterLinkContainer>
        <LinkWithBlock>
          <Block color="blue" />
          <Link href="/" passHref>
            <FooterLink color={props.mode}>home</FooterLink>
          </Link>
        </LinkWithBlock>

        <LinkWithBlock>
          <Block color="pink" />
          <Link href="/about" passHref>
            <FooterLink color={props.mode}>mission</FooterLink>
          </Link>
        </LinkWithBlock>

        <LinkWithBlock>
          <Block color="red" />
          <Link href="/product" passHref>
            <FooterLink color={props.mode}>learn more</FooterLink>
          </Link>
        </LinkWithBlock>
      </FooterLinkContainer>
    </FooterContainer>
  );
}
