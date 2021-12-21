import React from "react";
import styled from "styled-components";
import Image from "next/image";
import colors from "../styles/colors";
import dimensions from "../styles/dimensions";
import Link from 'next/link';


const IconContainer = styled.div`
    color: ${colors.white};
    background-color: ${colors.black};
    width: 100%;
    height: 685px;
    position: relative;

    @media (max-width: ${dimensions.maxwidthTablet}px) {
      margin-left: auto;
      margin-right: auto;
      height: 1300px;
    }
`;

const Icons = styled.div`
    color: ${colors.white};
    background-color: ${colors.black};
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    text-align: center;

    @media (max-width: ${dimensions.maxwidthTablet}px) {
      flex-direction: column;
      flex-wrap: nowrap;
      margin-left: auto;
      margin-right: auto;
    }
`;


const Icon = styled.div`
    margin-top: 135px;

    @media (max-width: ${dimensions.maxwidthTablet}px) {
        margin-top: 100px;
    }
`;

const MissionLink = styled.div`
    margin-top: 100px;
    display: flex;
    justify-content: center;
    text-decoration: underline;
    cursor: pointer;

    :hover {
        text-decoration-color: ${colors.pink};

        .arrow {
            color: ${colors.pink}
        }
    }


    @media (max-width: ${dimensions.maxwidthTablet}px) {
        margin-top: 70px;
    }
`;


const ArrowImg = styled.div`
    margin-top: 40px;
    margin-left: 20px;
    width: 20px;
    height: 20px;
    border-width: 4px 4px 0 0;
    border-style: solid;
    transform: rotate(45deg);

    &:before{
        right: 0;
        top: -3px;
        position: absolute;
        height: 4px;
        box-shadow: inset 0 0 0 32px;
        transform: rotate(-45deg);
        width: 23px;
        transform-origin: right top;
    }

    position: relative;
    display: inline-block;
    vertical-align: middle;
    color: ${colors.white};
    box-sizing: border-box;
    &:after, &:before {
        content: "";
        box-sizing: border-box;
    }

    @media (max-width: ${dimensions.maxwidthTablet}px) {
        margin-top: 25px;
        margin-left: 15px;

        width: 15px;
        height: 15px;

        &:before{
            width: 18px;
        }
    }
`;

export default function IconSection(icons) {
    const listOfIcons = icons.icons.map((icon, index) =>
        <Icon>
            <Image src={icon.image.url} height={185} width={185}/>
            <h2>{icon.title[0].text}</h2>
        </Icon>
    )
      return (
        <IconContainer>
            <Icons>
                {listOfIcons}
            </Icons>

            <Link href="/about">
                <MissionLink>
                    <h3>{icons.missionLink.text}</h3>
                    <ArrowImg className="arrow"/>
                </MissionLink>
            </Link>
        </IconContainer>
      )
  }
