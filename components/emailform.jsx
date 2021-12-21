import React from 'react';
import styled from 'styled-components';
import colors from '../styles/colors';
import dimensions from '../styles/dimensions';
import GlobalStyle from '../styles/typography';

const EmailInput = styled.input`
    width: 489px;
    height: 50px;
    font-size: 18px;
    line-height: 27px;
    border-radius: 5px;
    border: 1px solid #242121;
    color: #C4C4C4;
    padding-left: 9.9px;
    font-family: 'Inter';

    @media (max-width: ${dimensions.maxwidthTablet}px) {
        width: 338px;
        height: 40.87px;
        font-size: 14px;
        line-height: 20px;
    }
`

const HiddenInput = styled.div`
    position: absolute;
    left: -5000px;
`

const SignUpButton = styled.button`
    width: 151px;
    height: 50px;
    background-color: ${colors.black};
    border-radius: 5px;
    margin-top: 15px;

    @media (max-width: ${dimensions.maxwidthTablet}px) {
        width: 97px;
        height: 36px;
        margin-top: 13.3px;
    }
`

const ButtonLabel = styled.p`
    color: ${colors.white};
    margin-top: 0px;
    margin-bottom: 0px;
`

export default function EmailForm() {
    return (
    <form action="https://northeastern.us20.list-manage.com/subscribe/post?u=d37108297acf9ffed2db20e8a&amp;id=fc057ec639"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            target="_blank" novalidate>
        <GlobalStyle/>

        <EmailInput type="email"
                placeholder="Enter Email Address..."
                name="EMAIL"
                id="mce-EMAIL" required/>

        <HiddenInput>
            <input type="text" name="b_b523daf54c78dd10603c7dc3b_5f6112400f" tabindex="-1" value=""/>
        </HiddenInput>

        <SignUpButton type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe">
            <ButtonLabel>
                Sign Up
            </ButtonLabel>
        </SignUpButton>
    </form>
    );
}