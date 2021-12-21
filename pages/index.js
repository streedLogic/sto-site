import { client } from "../prismicConfiguration";
import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Header from "../components/header";
import Footer from "../components/footer";
import Img from "next/image";
import styled from "styled-components";
import dimensions from "../styles/dimensions";
import IconSection from "../components/icon-section";
import PhotosSection from "../components/photos-section";
import LeftLines from "../styles/visualleft.svg";
import RightLines from "../styles/visualright.svg";
import colors from "../styles/colors";

const textBreakPoint = 1200;

const InvestmentSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 942px;
`;

const InvestmentHeadline = styled.div`
  font-family: "NeueMachinaBold";
  text-align: center;

  h1 {
    color: ${colors.black};
  }
  span {
    background: linear-gradient(to top, ${colors.yellow} 60%, transparent 25%);
  }

  &.second-line {
    margin-top: 96px;
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    width: 335px;
  }
`;

const InvestmentDescription = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: center;
  margin-bottom: 70px;

  p {
    text-align: center;
    width: 60vw;
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    p {
      text-align: center;
      width: 335px;
    }

    margin-bottom: 60px;
  }
`;

const InvestmentCTA = styled.div`
  display: flex;
  justify-content: center;
  font-size: 30px;
  margin-bottom: 120px;
  a {
    padding: 16px 23px;
    text-decoration: none;
    color: ${colors.black};
    border-radius: 5px;
    border: solid ${colors.black} 5px;
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    font-size: 14px;
  }
`;

const HeroContainer = styled.div`
  background: #242121;
`;

const Animation = styled.canvas`
  position: -webkit-sticky;
  position: fixed;

  left: 50%;
  top: 15vh;
  width: 50vw;
  transform: translate(-50%, 0%);
  max-height: 100vh;

  z-index: 0;
  @media (max-width: ${dimensions.maxwidthTablet}px) {
    transform: translate(0%, -50%);
    width: 100vw;
    left: 0;
    top: 50vh;
  }
`;

const AnimationContainer = styled.div`
  // height: 13500px;
  margin-top: -230px;
  height: 9715px;
`;

const LeftVisual = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  .left-lines {
    position: absolute;
    z-index: 0;
  }
`;

const RightVisual = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  .left-lines {
    position: absolute;
    z-index: 0;
  }
`;

const AnimationText = styled.div`
  width: 100%;
  position: relative;
  z-index: 1;
  padding-top: 100px;

  h2 {
    line-height: 75px;
  }

  img {
    width: 20vw;

    @media (max-width: ${dimensions.maxwidthTablet}px) {
      width: 181px;
    }
  }
`;

const AnimationImage = styled.div`
  display: flex;
  width: 65px;
  justify-content: center;
  margin: auto;
  padding-top: 50px;
`;

const AnimationSubheading = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -45px;

  h2 {
    font-size: 110px;
    line-height: 110px;
    width: 54vw;
    text-align: center;
    color: white;

    @media (max-width: ${dimensions.maxwidthTablet}px) {
      font-size: 44px;
      width: 100%;
      line-height: 75px;

    }
  }
`;

const TextSection = styled.div`
  width: 50%;
  color: ${colors.white};
  height: 100%;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    width: 100%;
  }
`;

const BigNumber = styled.div`
  font-size: 250px;
  font-family: "NeueMachinaBold";
  margin-top: 100px;

  @media (max-width: ${textBreakPoint}px) {
    margin-top: 10px;
    font-size: 160px;
  }
`;

const StatSection = styled.div`
  width: 100%;
  display: flex;
  margin-top: 100px;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    flex-direction: column !important;
    position: relative;
    margin-top: 70px;
  }
`;

const StatImage = styled.div`
  width: 50%;
  position: absolute;
  right: 0;
  top: 0;

  img {
    object-fit: cover;
    width: 100%;
    height: calc(100vh - 100px);
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    top: -35px;
    img {
      height: calc((100vh - 70px) / 2);
      width: 100vw;
      position: absolute;
      right: 0;
      top: 50vh;
    }
  }
`;

const ColorBlock = styled.div`
  height: 310px;
  width: 100%;
  top: 0px;
  position: absolute;
  background-color: ${({ id }) =>
    (id === 0 && `${colors.yellow}`) || (id === 1 && `${colors.pink}`)};
  z-index: -10;
  @media (max-width: ${dimensions.maxwidthTablet}px) {
    height: 100px;
  }
`;

const ColorLine = styled.div`
  height: 118px;
  width: 4px;
  background-color: ${({ id }) =>
    (id === 0 && `${colors.yellow}`) || (id === 1 && `${colors.pink}`)};
  @media (max-width: ${dimensions.maxwidthTablet}px) {
    height: 90px;
    margin-top: 13px;
  }
`;

const LineSection = styled.div`
  display: flex;
  margin-left: 15%;
  @media (max-width: ${dimensions.maxwidthTablet}px) {
    margin-left: 50px;
    margin-top: 45px;
  }
`;

const BodyText = styled.div`
  max-width: 420px;
  margin-left: 20px;
  margin-top: ${({ id }) => (id === 0 && "-30px") || (id === 1 && "-18px")};
  @media (max-width: ${dimensions.maxwidthTablet}px) {
    margin-top: -10px;
    max-width: 275px;
  }
`;

const SectionTitle = styled.div`
  margin-top: ${({ id }) => (id === 0 && "230px") || (id === 1 && "170px")};
  margin-left: 100px;
  color: ${colors.black};
  max-width: 400px;
  @media (max-width: ${dimensions.maxwidthTablet}px) {
    margin-top: 35px;
    margin-left: 20px;
  }
`;

const NumberSection = styled.div`
  min-width: 400px;

  height: 100%;
  @media (max-width: ${dimensions.maxwidthTablet}px) {
    position: relative;
    min-width: 0px;
    width: 100vw;
    h3 {
      margin-top: -10px;
    }
  }
`;

const NumberText = styled.div`
  position: absolute;
  // margin-top: 50%;
  margin-top: calc((100vh - 100px) / 2);
  transform: translateY(calc(((100vh - 100px) / 2) * -1));
  text-align: center;
  width: 100%;
  height: calc(100vh - 100px);
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    margin-top: calc((100vh - 30px) / 2);
    transform: translateY(-calc((100vh - 70px) / 2));
    width: 100vw;
    display: block;
  }
`;

const Stats = styled.div`
  background-color: ${colors.black};
`;

const SubText = styled.div`
  font-style: italic;
  margin-left: 20px;
`;

const PinkShape = styled.div`
  z-index: -10;
  position: absolute;
  left: 0;
  top: 0;
  background-color: ${colors.pink};
  height: calc(100vh - 100px);
  width: 100%;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    height: calc((100vh - 70px) / 2);
    width: 100vw;
  }
`;

const BlackRect = styled.div`
  background-color: ${colors.black};
  height: calc((100vh - 100px) / 2);
  width: 100%;
  @media (max-width: ${dimensions.maxwidthTablet}px) {
    height: calc((100vh - 70px) / 4);
    width: 100vw;
  }
`;

const BlackShape = styled.div`
  background-color: ${colors.black};
  height: calc((100vh - 100px) / 2);
  width: 100%;
  border-bottom-left-radius: calc((100vw - 100px) / 2);
  border-bottom-right-radius: calc((100vw - 100px) / 2);
  @media (max-width: ${dimensions.maxwidthTablet}px) {
    height: calc((100vh - 70px) / 4);
    border-bottom-left-radius: calc((100vw - 70px) / 2);
    border-bottom-right-radius: calc((100vw - 70px) / 2);
    width: 100vw;
  }
`;

const BlueShape = styled.div`
  z-index: -10;
  background-color: ${colors.blue};
  position: absolute;
  left: 0;
  top: 0;
  height: calc(100vh - 100px);
  width: 100vh;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    height: calc((100vh - 70px) / 2);
    width: 100vw;
  }
`;

const BlackCircle = styled.div`
  background-color: ${colors.black};
  height: calc(100vh - 100px);
  width: calc((100vh - 100px) / 2);
  border-bottom-left-radius: calc((100vh - 100px) * 2);
  border-top-left-radius: calc((100vh - 100px) * 2);
  position: absolute;
  right: 0;
  z-index: -9;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    height: calc((100vh - 70px) / 2);
    width: calc((100vh - 70px) / 4);
    border-bottom-left-radius: calc((100vh - 70px) * 2);
    border-top-left-radius: calc((100vh - 70px) * 2);
    margin-left: 50%;
  }
`;

const WrapperSection = styled.div`
  width: 100% !important;
  max-width: 100% !important;
`;

const Spacer = styled.div`
  height: 740px;
  background-color: ${colors.black};
  @media (max-width: ${dimensions.maxwidthTablet}px) {
    height: 740px;
  }
`;

const PastAnimationContent = styled.div`
  position: relative;
  z-index: 5;

  background-color: ${colors.white};
`;

gsap.registerPlugin(ScrollTrigger);
export default function Home({ home, logo}) {
  useEffect(() => {
    console.clear();
    const canvas = document.getElementById("hero-lightpass");
    const context = canvas.getContext("2d");
    canvas.width = 2048;
    canvas.height = 2048;
    const frameCount = 119;
    const currentFrame = (index) =>
      `https://epic-wescoff-070dc5.netlify.app/${index}image.png`;

    const images = [];
    const airpods = {
      frame: 0,
    };

    for (let i = 0; i <= frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.push(img);
    }

    const loadImage = new Image();

    loadImage.src =
      "https://media4.giphy.com/media/L05HgB2h6qICDs5Sms/giphy.gif";

    gsap.to(airpods, {
      frame: frameCount,
      snap: "frame",
      scrollTrigger: {
        scrub: 1,
      },
      onUpdate: render, // use animation onUpdate instead of scrollTrigger's onUpdate
    });

    images[0].onload = render;

    function render() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(images[airpods.frame], 0, 0);
    }

    ScrollTrigger.defaults({
      markers: false,
    });

    var points = gsap.utils.toArray(".point");

    var height = 100 * points.length;

    var tl = gsap.timeline({
      duration: points.length,
      scrollTrigger: {
        trigger: ".stats-section",
        start: "top center",
        end: "+=" + height + "%",
        scrub: true,
        id: "points",
      },
    });

    var pinner = gsap.timeline({
      scrollTrigger: {
        trigger: ".stats-section .wrapper",
        start: "top top",
        end: "+=" + height + "%",
        scrub: true,
        pin: ".stats-section .wrapper",
        pinSpacing: true,
        id: "pinning",
      },
    });

    points.forEach(function (elem, i) {
      gsap.set(elem, { position: "absolute", top: 0 });

      tl.from(elem.querySelector(".animated-img"), { autoAlpha: 0 }, i);
      tl.from(
        elem.querySelector(".article"),
        { autoAlpha: 0, translateY: 100 },
        i
      );

      if (i != points.length - 1) {
        tl.to(
          elem.querySelector(".article"),
          { autoAlpha: 0, translateY: -100 },
          i + 0.75
        );
        tl.to(elem.querySelector(".animated-img"), { autoAlpha: 0 }, i + 0.75);
      }
    });
  }, []);

  return (
    <div>
      <Header current="home" mode="black" image={logo.data.white_logo.url} mobileImage={logo.data.white_logo.url}/>
      <HeroContainer>
        <LeftVisual>
          <Img className="left-lines" src={LeftLines} priority/>
        </LeftVisual>

        <RightVisual>
          <Img className="right-lines" src={RightLines} priority/>
        </RightVisual>

        <AnimationText>
          <AnimationImage>
            <Img alt="homelogo" src={home.data.icon.url} height={'68px'} width={'66px'} priority/>
          </AnimationImage>
          <AnimationSubheading>
            <h2>{home.data.hero_text}</h2>
          </AnimationSubheading>
        </AnimationText>
        <AnimationContainer>
          <Animation id="hero-lightpass" />
        </AnimationContainer>
      </HeroContainer>
      <PastAnimationContent>
      <InvestmentSection>
        <div>
          <InvestmentHeadline>
            <h1>
              the <span>newest</span> way to travel.
            </h1>
          </InvestmentHeadline>
          <InvestmentDescription>
            <div>
              {home.data.secondary_section_description.map((paragraph, id) => {
                return (
                  <p className={(id = 2 ? "second" : "")} key={id}>
                    {paragraph.text}
                  </p>
                );
              })}
            </div>
          </InvestmentDescription>

          <InvestmentCTA>
            <a href={home.data.cta_link}>{home.data.cta_text}</a>
          </InvestmentCTA>
        </div>
      </InvestmentSection>

      <Stats className="stats-section">
        <WrapperSection className="wrapper">
          {home.data.section_1.map(function (section, i) {
            return (
              <StatSection className="point">
                <TextSection className="article">
                  <ColorBlock id={i} />
                  <SectionTitle id={i}>
                    <h2> {section.title[0].text}</h2>
                  </SectionTitle>
                  <LineSection>
                    <ColorLine id={i} />
                    <div>
                      <BodyText id={i}>
                        <p> {section.body[0].text} </p>
                      </BodyText>
                      <SubText>
                        <p1> {section.sub_text[0].text} </p1>
                      </SubText>
                    </div>
                  </LineSection>
                </TextSection>

                <StatImage>
                  <img className="animated-img" src={section.image.url} />
                </StatImage>
              </StatSection>
            );
          })}

          {home.data.section_2.map(function (section, i) {
            return (
              <StatSection className="point">
                <TextSection className="article">
                  <NumberSection>
                    <NumberText>
                      <div>
                        <h2> {section.title[0].text}</h2>
                        <BigNumber> {section.number[0].text}</BigNumber>
                        <h3>{section.units[0].text} </h3>
                      </div>
                    </NumberText>

                    {i == 2 && (
                      <div>
                        <BlackRect />
                        <BlackShape />
                        <PinkShape />
                      </div>
                    )}
                    {i == 0 && (
                      <div>
                        <BlackCircle />
                        <BlueShape />
                      </div>
                    )}
                  </NumberSection>
                </TextSection>
                <StatImage>
                  <img className="animated-img" src={section.image.url} />
                </StatImage>
              </StatSection>
            );
          })}
        </WrapperSection>
      </Stats>

      <Spacer />

      <IconSection
        icons={home.data.icons}
        missionLink={home.data.mission_link[0]}
      />
      <PhotosSection photos={home.data.images} />
      </PastAnimationContent>

      <Footer mode="black"  image={logo.data.white_logo.url} ></Footer>
    </div>
  );
}

export async function getStaticProps() {
  // query() is empty on purpose!
  // https://prismic.io/docs/rest-api/query-the-api/query-all-documents
  const res = await client.query();
  const home = await client.getSingle("homepage");

  const logo = await client.getSingle("logo");

  return {
    props: {
      home,
      logo
    },
  };
}