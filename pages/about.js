import { client } from "../prismicConfiguration";
import CoOwnerList from "../components/co-ownerList";
import colors from "../styles/colors";
import styled from "styled-components";
import GlobalStyle from "../styles/typography"
import Header from "../components/header";
import dimensions from "../styles/dimensions";
import Image from "next/image";
import Triangle from "../images/about-triangle.svg";
import Footer from "../components/footer";

const maxWidthMissionPage = 1200;

const AboutContainer = styled.div`
  background-color: ${colors.black};
  position: relative;
  overflow: hidden;
`;

const MissionContent = styled.div`
  margin-left: 15%;
  color: ${colors.white};
  margin-top: 200px;
  display: flex;

  @media (max-width: ${maxWidthMissionPage}px) {
    margin-left: 20px;
    margin-right: 40px;
    flex-direction: column;
  }
`;

const Mission = styled.div`
  max-width: 520px;
  margin-left: 20px;

  @media (max-width: ${maxWidthMissionPage}px) {
    width: 100%;
    margin-top: -20px;
    margin-left: 0;
  }
`;

const MissionTitle = styled.div`
  max-width: 450px;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    width: 100%;
    margin-top: -20px;
  }
`;

const YellowBox = styled.div`
  background-color: ${colors.yellow};
  width: 10%;
  height: 25px;
  float: left;
  margin-top: 162px;
  z-index: 1000;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    float: right;
    width: 78px;
    height: 15px;
    margin-top: 110px;
    z-index: 1000;
  }
`;

const BlueBox = styled.div`
  background-color: ${colors.blue};
  width: 10%;
  height: 25px;
  float: left;
  margin-top: 162px;
  z-index: 1000;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    float: right;
    width: 78px;
    height: 15px;
    margin-top: 110px;
    z-index: 1000;
  }
`;

const TriangleImage = styled.div`
  top: 0;
  right: 0;
  position: absolute;
  z-index: 10;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    width: 1000px;
    height: 1058px;
    right: -200px;
    top: -25px;
  }
`;

const TeamSection = styled.div`
  color: ${colors.white};
  margin-left: 15%;
  margin-top: 150px;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 100px;
  }
`;

const AwardsSection = styled.div`
  color: ${colors.white};
  margin-left: 15%;
  margin-top: 150px;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 100px;
  }
`;

const Award = styled.div`
  width: 50%;
  margin-top: 75px;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    width: 100%;
  }
`;

const Logo = styled.div`
  width: 33%;
  margin-top: 30px;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    width: 50%;
  }
`;

const LogoList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 100px;
`;

const AwardsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: space-around;
  margin-right: 20%;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    margin-right: 0;
  }
`;

const WorkExperience = styled.div`
  margin-top: 50px;
`;

const AwardTitle = styled.div`
  margin-top: 0;
`;

const OrganizationText = styled.div`
  margin-top: -20px;
  padding-left: 20%;
  padding-right: 20%;
`;


export default function About({ about, logo}) {
  const listOfAwards = about.data.awards.map((award, index) =>
        <Award>
            <Image src={award.image.url} height={160} width={100}/>
            <AwardTitle>
              <h3>{award.award_title[0].text}</h3>
            </AwardTitle>
            <OrganizationText>
              <p>{award.organization[0].text}</p>
            </OrganizationText>
        </Award>
    )

  const listOfLogos = about.data.companies.map((logo, index) =>
    <Logo>
      <Image src={logo.logo.url} height={200} width={350}/>
    </Logo>
)

  return (
    <AboutContainer>
      <Header mode='black' current="about" image={logo.data.white_logo.url} mobileImage={logo.data.white_logo.url}/>
      <GlobalStyle />

        <TriangleImage>
          <Image className="" src={Triangle} />
        </TriangleImage>

        <MissionContent>
          <MissionTitle>
            <h1>{about.data.title[0].text}</h1>
          </MissionTitle>

          <Mission>
            <p>{about.data.mission_statement[0].text}</p>
          </Mission>
        </MissionContent>

      <YellowBox/>
      <AwardsSection>
        <h2>{about.data.awards_title[0].text}</h2>

        <AwardsList>
          {listOfAwards}
        </AwardsList>

      </AwardsSection>

      <BlueBox/>
      <TeamSection>
        <h2>{about.data.sub_title[0].text}</h2>

        <CoOwnerList className={'co-owners'} people={about.data.people}/>

        <WorkExperience>
          <h2>{about.data.work_experience[0].text}</h2>

          <LogoList>
            {listOfLogos}
          </LogoList>

      </WorkExperience>
      </TeamSection>

      <Footer mode='white' image={logo.data.black_logo.url} ></Footer>
              
    </AboutContainer>
    
  );
}

export async function getStaticProps() {
  // query() is empty on purpose!
  // https://prismic.io/docs/rest-api/query-the-api/query-all-documents
  const res = await client.query();
  const about = await client.getSingle("about_page");
  const logo = await client.getSingle("logo");

  return {
    props: {
      about,
      logo
    },
  };
}