import React from "react";
import styled from "styled-components";
import dimensions from "../styles/dimensions";

import CoOwner from "../components/co-owner";

const CoOwnerListContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 100px;

    @media (max-width: ${dimensions.maxwidthTablet}px) {
        margin-left: center;
        margin-right: center;
      }
`;

export default function CoOwnerList(people) {
    const listOfPeople = people.people.map((person, index) =>
        <CoOwner person={person} index={index + 1}/>
    )
    return (
      <CoOwnerListContainer>
        {listOfPeople}
      </CoOwnerListContainer>
    )
}