import React from "react";
import styled from "styled-components";
import Image from "next/image";
import colors from "../styles/colors";
import dimensions from "../styles/dimensions";

const PhotosContainer = styled.div`
    color: ${colors.white};
    background-color: ${colors.black};
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    @media (max-width: ${dimensions.maxwidthTablet}px) {
      margin-left: auto;
      margin-right: auto;
      flex-direction: column;
      flex-wrap: nowrap;
    }
`;


const Photo = styled.div`
    margin-top: -4px;

    img {
        width: 50vw !important;
        height: 50vw !important;
    }

    @media (max-width: ${dimensions.maxwidthTablet}px) {
        img {
            width: 100vw !important;
            height: 100vw !important;
        }
    }
`;

export default function PhotosSection(photos) {
    const listOfPhotos = photos.photos.map((photo, index) =>
        <Photo>
            <Image src={photo.square_image.url} height={700} width={700} loading='eager'/>
        </Photo>
    )
      return (
        <PhotosContainer>
            {listOfPhotos}
        </PhotosContainer>
      )
  }
