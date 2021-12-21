import React from "react";
import styled from "styled-components";
import Image from "next/image";
import colors from "../styles/colors";
import dimensions from "../styles/dimensions";

const maxWidthMissionPage = 1200;

const CoOwnerContainer = styled.div`
    color: ${colors.white};
    width: 100%;
    margin-bottom: 70px;
    display: flex;
    flex-wrap: wrap;

    @media (max-width: ${maxWidthMissionPage}px) {
      flex-direction: column;
      flex-wrap: nowrap;
      margin-left: auto;
      margin-right: auto;
    }
`;

const RoundImage = styled.div`
  width: 214px;
  img {
    border-radius: 107px;
    width: 214px !important;
    height: 214px !important;
  }

  @media (max-width: ${maxWidthMissionPage}px) {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`;

const Info = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: ${maxWidthMissionPage}px) {
    flex-direction: column;
    margin-left: 0;
    margin-right: 0;
  }
`;

const Bio = styled.div`
  font-style: italic;
  max-width: 325px;
  @media (max-width: ${maxWidthMissionPage}px) {
    margin: auto;
  }
`;

const Degrees = styled.div`
  max-width: 325px;

  @media (max-width: ${maxWidthMissionPage}px) {
    margin: auto;
  }
`;

const Person = styled.div`
  margin-left: 6%;

  @media (max-width: ${maxWidthMissionPage}px) {
    margin-left: 0;
    flex-direction: column;
    text-align: center;
  }
`;

const Line = styled.div`
  background-color: ${({color}) =>
  color === 'yellow' && `${colors.yellow}` ||
  color === 'pink' && `${colors.pink}` ||
  color === 'blue' && `${colors.blue}`
};
  width: 2px;
  height: 88px;
  margin-left: 35px;
  margin-right: 45px;

  @media (max-width: ${maxWidthMissionPage}px) {
    width: 220px;
    height: 2px;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

const NameSection = styled.div`
  display: flex;
  p1 {
    font-style: italic;
    margin-top: 35px;
    margin-left: 10px;
  }
  @media (max-width: ${maxWidthMissionPage}px) {
    justify-content: center;
    p1 {
      margin-top: 35px;
      margin-left: 10px;
    }
  }
  @media (max-width: ${dimensions.maxwidthTablet}px) {
    p1 {
      margin-top: 24px;
    }
  }
`;

const Block = styled.div`
  background-color: ${({color}) =>
  color === 'yellow' && `${colors.yellow}` ||
  color === 'pink' && `${colors.pink}` ||
  color === 'blue' && `${colors.blue}`
  };
  width: 90px;
  height: 20px;
  position: absolute;

  margin-top: ${({color}) =>
  color === 'yellow' && `-180px` ||
  color === 'pink' && `-115px` ||
  color === 'blue' && `-50px`
  };

  margin-left: ${({color}) =>
  color === 'yellow' && `175px` ||
  color === 'pink' && `175px` ||
  color === 'blue' && `-30px`
  };
`;

export default function CoOwner(person) {
  let color = "yellow";
  if(person.index%2 == 0) {
    color = "blue"
  } else if (person.index%3 == 0) {
    color = "pink"
  }
    return (
      <CoOwnerContainer>
          <RoundImage>
            <Image src={person.person.image.url} width={214} height={214}/>
            <Block color={color}/>
          </RoundImage>
          <Person>
            <NameSection>
              <h3>{person.person.name[0].text} {person.person.pronouns[0].text}</h3>
              <p1> {person.person.title1[0].text} </p1>
            </NameSection>

          <Info>
            <Bio>
              <p1>{person.person.bio[0].text}</p1>
            </Bio>
            <Line color={color}/>
            <Degrees>
            {person.person.degrees.map(function(degree){
                    return <div> <p1>{degree.text}</p1> <br/> </div>
                  })}
          </Degrees>
          </Info>
          </Person>
      </CoOwnerContainer>
    )
}
          
