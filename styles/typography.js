import dimensions from "../styles/dimensions";
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

    h1 {
        font-size: 80px;
        line-height: 80px;
        font-weight: 700;
        font-family: NeueMachinaBold;
        color: white;
        @media(max-width:${dimensions.maxwidthTablet}px) {
            font-size: 44px;
            line-height: 44px;
        }
    }

    h2 {
        font-size: 50px;
        line-height: 60px;
        font-family: NeueMachinaRegular;
        @media(max-width:${dimensions.maxwidthTablet}px) {
            font-size: 29px;
            line-height: 36px;
        }
    }

    //Subhead
    h3 {
        line-height: 36px;
        font-size: 30px;
        font-weight: 600;
        @media(max-width:${dimensions.maxwidthTablet}px) {
            font-size: 21px;
            line-height: 25px;
        }
    }
    p {
        line-height: 33px;
        font-size: 24px;
        font-weight: 400;
        @media(max-width:${dimensions.maxwidthTablet}px) {
            font-size: 18px;
            line-height: 25px;
        }
    }
    p1 {
        line-height: 27px;
        font-size: 18px;
        font-weight: 400;
        @media(max-width:${dimensions.maxwidthTablet}px) {
            font-size: 14px;
            line-height: 20px;
        }
    }
`

export default GlobalStyle;