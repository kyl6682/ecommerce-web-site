import styled from 'styled-components'
import IphoneImage from '../../assets/images/IphoneImage.png'
import { Wrapper } from '../../styles/CommonStyle'
import useDevice from '../../hooks/useDevice'

export const WhiteStrokeButton = styled.button`
  padding: ${(props) => props.$padding || "24px 56px"};
  color: #fff;
  font-size: 16px;
  border: 1px solid #fff;
  border-radius: 6px;
  width: ${(props) => props.$width || "auto"};
`

const HeroWrapper = styled(Wrapper)`
  background-color: #211c24;
  color: #fff;
  padding: ${(props) => props.$padding};  
  flex-direction: ${(props) => props.$direction}; 
`;

const ContentWrapper = styled(Wrapper)`
  flex-direction: column;
  gap: 20px;
  align-items: ${(props) => props.$align}; 
  h3 {
    opacity: 0.4;
    font-size: 25px;
  }
  h1 {
    font-size: ${(props) => props.$titleSize || "75px"}; 
    font-weight: 300;
  }
  p {
    color: '#909090';
    font-size: 18px;
  }
`;

function Hero() {
  const { isMobile, isTablet } = useDevice();

  return (
    <>
      <HeroWrapper
        $padding={isMobile || isTablet ? "88px 16px 0" : "0 160px"}
        $direction={isMobile ? "column" : "row"}
      >
        <ContentWrapper
          $align={isMobile ? "center" : "start"}
          $titleSize={isMobile ? "75px" : "92px"}
        >
          <h3>Pro.Beyond.</h3>
          <h1>
            iPhone 14 <span style={{ fontWeight: 900 }}>Pro</span>
          </h1>
          <p>Created to change everything for the better. For everyone</p>
          <WhiteStrokeButton>Shop Now</WhiteStrokeButton>
        </ContentWrapper>
        <div>
          <img src={IphoneImage} alt="iPhone 14 Pro" />
        </div>
      </HeroWrapper>
    </>
  );
}

export default Hero