import React from "react";
import { client } from "../prismicConfiguration";
import styled from "styled-components";
import colors from "../styles/colors";
import Header from "../components/header";
import Footer from "../components/footer";
import EmailForm from "../components/emailform";
import dimensions from '../styles/dimensions';
import Carousel from "../components/carousel";
import LeftTriangle from "../images/product-triangle01.svg";
import RightTriangle from "../images/product-triangle02.svg";
import Image from "next/image";
import GlobalStyle from "../styles/typography";

const ProductInfoContainer = styled.div`
  display: flex;
  margin-left: 45px;
  margin-right: 45px;
  width: stretch;
  margin-top: 100px;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    margin: 0;
    margin-top: 70px;
    padding: 0;
    flex-direction: column;
    width: 100%;
`

const MainProductImage = styled.div`
  width: 100%;
  height: 100%;
  margin-right: 57px;
  margin-top: 30px;
  margin-bottom: 44px;
  position: relative;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    width: 100%;
    margin: 0;
    padding: 0;
    height: auto;
}
`

const ProductTitle = styled.div`
  width: 551px;
  height: 80px;
  font-size: 80px;
  font-color: ${colors.black};
  margin-top: 57px;
  line-height: 80px;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    width: 326px;
    height: 40px;
    font-size: 44px;
    line-height: 44px;
    margin-left: 20px;
    margin-top: 30.58px;
}
`

const ProductPrice = styled.div`
  margin-top: 11px;
  width: 551px;
  height: 60px;
  font-size: 50px;
  line-height: 60px;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    width: 229px;
    height: 36px;
    font-size: 29px;
    line-height: 36px;
    margin-left: 20px;
    margin-top: 5px;
}
`

const CTAText = styled.div`
  width: 494px;
  height: 54px;
  margin-right: 57px;
  margin-top: 13px;
  line-height: 27px;
  font-family: Inter, Arial, sans-serif;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    width: 326px;
    height: 44px;
    line-height: 20px;
    margin-left: 20px;
    margin-top: 13px;
}
`

const ProductDescription = styled.div`
  width: 494px;
  height: 59px;
  margin-top: 24px;
  line-height: 27px;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    display:none;
}
`

const ProductTextContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    margin-bottom: 51px;
}
`

const SignUpList = styled.div`
  width: 489px;
  height: 121px;
  margin-top: 30px;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    width: 338px;
    height: 90px;
    margin-left: 20px;
    margin-top: 27px;
}
`

const ProductDetailsContainer = styled.div`
  width: 100%;
  padding-top: 44px;
  height: 100%;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 41px;
    padding-top: 0;
}
`

const ProductDetailsHeader = styled.div`
  display: flex;
  width: 100%;
`

const ProductDetailsHeading = styled.div`
  width: 437px;
  height: 60px;
  font-size: 50px;
  line-height: 60px;
  margin-left: 58px;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    width: 277px;
    height: 36px;
    font-size: 29px;
    line-height: 36px;
    margin-left: 22px;
}
`

const SizeComparisonImageContainer = styled.div`
  display: flex;
  margin-left: 292.02px;
  margin-top: 45px;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    display: none;
}
`

const SizeComparisonImage = styled.div`
  width: 457px;
  height: 100%;
  margin-left: 18.98px;
  background-color: ${colors.gray};
  position: relative;
`

const ColorBlock = styled.div`
  width: 253px;
  height: 25px;
  margin-top: 18px;
  background-color: ${({color}) =>
    color === 'yellow' && `${colors.yellow}` ||
    color === 'blue' && `${colors.blue}` ||
    color === 'pink' && `${colors.pink}`
    };

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    width: 68px;
    height: 17px;
    margin-top: 9px;
    position: absolute;
    right: 0;
  }
`
const DimensionsText = styled.div`
  width: 100%;
  height: 27px;
  font-size: 18px;
  line-height: 27px;
  margin-top: 15px;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    width: 183px;
    height: 25px;
    font-size: 14px;
    line-height: 20px;
  }
`

const DimensionsTextContainer = styled.div`
  max-width: 436px;
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-bottom: 163px;
  margin-left: 20px;
  flex-grow: 1;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    width: 183px;
    height: 25px;
    font-size: 14px;
    line-height: 20px;
    margin-top: 12px;
  }
`

const RowContainer = styled.div`
  display: flex;
  margin-left: 291px;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 64px;
    justify-content: flex-start;
  }
`

const ContainerCarousel = styled.div`
  margin-left: 311px;
  display: ${props => props.display || "block"};


  @media (max-width: ${dimensions.maxwidthTablet}px) {
    margin: 0;
    display: inline;
  }
`

const LeftTriangleImage = styled.div`
  left: 0;
  top: 0;
  position: absolute;
  z-index: -1;
  @media (max-width: ${dimensions.maxwidthTablet}px) {
    display: none;
  }
`

const RightTriangleImage = styled.div`
  right: 0;
  top: 696.58px;
  position: absolute;
  z-index: -1;
  @media (max-width: ${dimensions.maxwidthTablet}px) {
    display: none;
  }
`;

export default function Product({ product, logo}) {
  return (
    <div>
      <Header mode='white' current="product" image={logo.data.black_logo.url} mobileImage={logo.data.white_logo.url}/>
      <GlobalStyle/>

      <LeftTriangleImage>
        <Image className="" src={LeftTriangle} />
      </LeftTriangleImage>

      <RightTriangleImage>
        <Image className="" src={RightTriangle} />
      </RightTriangleImage>

      <ProductInfoContainer>
        <MainProductImage>
          <Image src={product.data.product_image.url}
                 alt={product.data.product_image.alt}
                 width={product.data.product_image.dimensions.width}
                 height={product.data.product_image.dimensions.width}
                 layout="responsive"
                 objectFit="cover"
                 quality="100"
                 priority
                 />
        </MainProductImage>
        <ProductTextContainer>
          <ProductTitle className="neue-bold">
            {product.data.product_name[0].text}
          </ProductTitle>

          <ProductPrice className="neue-regular">
            {product.data.price[0].text}
          </ProductPrice>

          <CTAText>
            {product.data.call_to_action[0].text} <br/>
            {product.data.call_to_action[1].text}
          </CTAText>

          <SignUpList>
            <EmailForm/>
          </SignUpList>

          <ProductDescription>
            <p1>{product.data.description[0].text}</p1>
          </ProductDescription>
        </ProductTextContainer>
      </ProductInfoContainer>

      <ProductDetailsContainer>
        <ProductDetailsHeader>
          <ColorBlock color='yellow'/>
          <ProductDetailsHeading className="neue-regular">
            {product.data.size_comparison[0].text}
          </ProductDetailsHeading>
        </ProductDetailsHeader>

        <SizeComparisonImageContainer>
          {product.data.size_comparison_images.map((img) => (
              <SizeComparisonImage>
                <Image src={img.comparison_image.url}
                        alt={img.comparison_image.alt}
                        quality="100"
                        layout="responsive"
                        width="457"
                        height="547"/>
              </SizeComparisonImage>
            ))}
        </SizeComparisonImageContainer>

        <ContainerCarousel display="none">
            <Carousel pictures={product.data.size_comparison_images}
                      mode="gallery"/>
        </ContainerCarousel>
      </ProductDetailsContainer>

      <ProductDetailsContainer>
        <ProductDetailsHeader>
          <ColorBlock color='blue'/>
          <ProductDetailsHeading className="neue-regular">
            {product.data.how_to_fold[0].text}
          </ProductDetailsHeading>
        </ProductDetailsHeader>
        <ContainerCarousel>
          <Carousel pictures={product.data.step} mode="tutorial"/>
        </ContainerCarousel>
      </ProductDetailsContainer>

      <ProductDetailsContainer>
        <ProductDetailsHeader>
          <ColorBlock color='pink'/>
          <ProductDetailsHeading className="neue-regular">
            {product.data.size_and_weight[0].text}
          </ProductDetailsHeading>
        </ProductDetailsHeader>

        <RowContainer>
          <DimensionsTextContainer>
           <DimensionsText style={{fontWeight: "bold"}}>
              Upright
            </DimensionsText>
            {
              product.data.upright.map((dimensions) =>
              <DimensionsText> {dimensions.text} </DimensionsText>)
              }
          </DimensionsTextContainer>

          <DimensionsTextContainer>
            <DimensionsText style={{fontWeight: "bold"}}>
              Folded
            </DimensionsText>
            {
              product.data.folded.map((dimensions) =>
              <DimensionsText> {dimensions.text} </DimensionsText>)
              }
          </DimensionsTextContainer>
        </RowContainer>
      </ProductDetailsContainer>

      <Footer mode='black' image={logo.data.white_logo.url}></Footer>
    </div>
  );
}

export async function getStaticProps() {
  // query() is empty on purpose!
  // https://prismic.io/docs/rest-api/query-the-api/query-all-documents
  const res = await client.query();
  const product = await client.getSingle("product_page");
  const logo = await client.getSingle("logo");

  return {
    props: {
      product,
      logo
    },
  };
}
