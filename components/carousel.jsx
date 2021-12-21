import React, {useState} from 'react';
import styled from 'styled-components';
import colors from '../styles/colors';
import dimensions from '../styles/dimensions';
import Image from 'next/image'
import LeftArrow from '../images/left-arrow.svg';
import RightArrow from '../images/right-arrow.svg';
import GlobalStyle from '../styles/typography';

const CarouselContainer = styled.div`
  max-width: 891px;
  position: relative;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    padding: 0;
    max-width: 100%;
    display: flex;
    flex-direction: column;
  }
`

const ImageSlider = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    width: 100%;
    height: ${({mode}) =>
    mode === 'gallery' && `auto` ||
    mode === 'tutorial' && `auto`
    };
    margin-left: 0;
    margin-right: 0;
    margin-top: 11px;
  }
`

const SliderText = styled.div`
  max-width: 642px;
  text-align: center;
  margin: auto;
  padding-left: 52px;
  padding-right: 52px;
  margin-top: -95px;
  height: 132px;
  display: ${({mode}) =>
  mode === 'gallery' && `none` ||
  mode === 'tutorial' && `block`
  };

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    margin-top: 31px;
    height: 115px;
    max-width: 350px;
    margin-bottom: 51px;
    order: 5;
  }
`

const ControlArrowContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 25px;
  justify-content: space-between;

@media (max-width: ${dimensions.maxwidthTablet}px) {
  top: ${({mode}) =>
  mode === 'gallery' && `36%` ||
  mode === 'tutorial' && `15%`
  };
  position: absolute;
  z-index: 10;
  box-sizing: border-box;
  padding-left: 5px;
  padding-right: 5px;
}
`

const ControlArrow = styled.button`
  width: 52px;
  height: 50px;
  border-radius: 50%;
  background-color: ${colors.black};
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-top: 35px;
  float: ${({direction}) =>
  direction === 'left' && `left` ||
  direction === 'right' && `right`
  };
  &:hover {
    cursor: pointer;
  }
  &:active {
    transform: scale(0.98);
  }
`

const IndicatorContainer = styled.div`
  height: 20px;
  padding-left: 320px;
  margin-top: -56px;
  width: fit-content;
  position: absolute;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    height: auto;
    margin: auto;
    padding: 0px;
    padding-bottom: 24.62px;
  }
`

const IndicatorDot = styled.button`
  width: 20px;
  height: 20px;
  border: 1px solid #000000;
  margin-left: 17px;
  margin-right: 17px;
  border-radius: 50%;
  background-color: transparent;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
  &:active {
    transform: scale(1);
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    width: 14.76px;
    height: 14.76px;
    margin-left: 12.55px;
    margin-right: 12.55px;
    padding: 0;
    position: relative;
    z-index: 11;
  }
  `;

  const ImageIndicatorContainer = styled.div`
    max-width: 891px;
    margin-top: 42px;
    padding-bottom: 28px;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    width: 100%;
    height: 100%;
    margin-left: 0;
    margin-right: 0;
    margin-top: 11px;
    padding-bottom: 0px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
  `;

export default function Carousel({pictures, mode}) {
    const [value, setValue] = useState(0);

    const renderSteps = ({mode}) => {
      if (mode === "tutorial") {
      return <>
          <p><b>Step {value + 1}:</b><br/>
          {pictures[value].step_text[0].text}</p>
          </>
      }
    }

    const renderImages = ({mode}) => {
      return (
        <ImageSlider mode={mode}>
          {(mode === "gallery") ? (
            <Image src={pictures[value].comparison_image.url}
                    alt={pictures[value].comparison_image.alt}
                    layout="responsive"
                    width="413"
                    height="500"
                    objectFit="cover"
                    priority="true"/>
          ) : (
            <Image src={pictures[value].step_image.url}
                    alt={pictures[value].step_image.alt}
                    layout="responsive"
                    width="891"
                    height="485"
                    objectFit="cover"
                    priority={true}/>
          )}
        </ImageSlider>
      )
    }

    const renderDots = () => {
      const selectedDot = value;
      return pictures.map((step) => (
        <IndicatorDot type="button"
                      onClick={() => {setValue(pictures.indexOf(step))}}
                      style={{backgroundColor: (selectedDot === (pictures.indexOf(step)) ? `${colors.black}` : 'transparent')}}/>
        ));
      };

    return (
      <CarouselContainer>
        <GlobalStyle />
        <ControlArrowContainer mode={mode}>
          <ControlArrow direction="left" onClick={() => value === 0 ? setValue(pictures.length-1) : setValue(value - 1)}>
            <Image className="" src={LeftArrow} />
          </ControlArrow>
          <ControlArrow direction="right" onClick={() => value === pictures.length-1 ? setValue(0) : setValue(value + 1)}>
            <Image className="" src={RightArrow} />
          </ControlArrow>
        </ControlArrowContainer>
        <SliderText mode={mode}>
          {renderSteps({mode})}
        </SliderText>
        <ImageIndicatorContainer>
          {renderImages({mode})}
          <IndicatorContainer>
            {renderDots()}
          </IndicatorContainer>
        </ImageIndicatorContainer>
    </CarouselContainer>
    )
}