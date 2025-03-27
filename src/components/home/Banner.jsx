import styled from 'styled-components'
import { Wrapper } from '../../styles/CommonStyle.jsx'
import { BlackStrokeButton } from './PromotionsPC.jsx'
import { WhiteStrokeButton } from './Hero.jsx'
import useDevice from '../../hooks/useDevice.jsx'

const ItemWrapper = styled(Wrapper)`
  flex-direction: column;
  width: ${(props) => props.$width || '25%'};
  height: ${(props) => props.$height || '552px'};
  background-color: ${(props) => props.$background || 'white'};
  padding: 32px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const ItemContent = styled(Wrapper)`
  flex-direction: column;
  padding: 0;
  align-items: start;
  gap: 16px;
  margin: 24px 0;
  h3 {
    font-size: 33px;
    font-weight: 400;
    color: ${(props) => props.$color || 'black'};
  }
`

function Banner() {
  const { isMobile } = useDevice()

  return (
    <Wrapper $direction={isMobile ? 'column' : 'row'}>
      <ItemWrapper $width={isMobile?'100%' : '25%'} $background={isMobile ? undefined : 'white'}>
        <img src='#' alt='clothes' />
        <ItemContent $color={isMobile ? undefined : 'black'}>
          <h3>Clothes</h3>
          <BlackStrokeButton>Shop Now</BlackStrokeButton>
        </ItemContent>
      </ItemWrapper>

      <ItemWrapper $width={isMobile?'100%' : '25%'}>
        <img src='#' alt='electronics' />
        <ItemContent>
          <h3>Electronics</h3>
          <BlackStrokeButton>Shop Now</BlackStrokeButton>
        </ItemContent>
      </ItemWrapper>

      <ItemWrapper $width={isMobile?'100%' : '25%'} $background='#EAEAEA'>
        <img src='#' alt='furniture' />
        <ItemContent>
          <h3>Furniture</h3>
          <BlackStrokeButton>Shop Now</BlackStrokeButton>
        </ItemContent>
      </ItemWrapper>

      <ItemWrapper $width={isMobile?'100%' : '25%'} $background='#2C2C2C'>
        <img src='#' alt='shoes' />
        <ItemContent $color='white'>
          <h3>Shoes</h3>
          <WhiteStrokeButton $padding='12px 40px' $width='191px'>
            Shop Now
          </WhiteStrokeButton>
        </ItemContent>
      </ItemWrapper>
    </Wrapper>
  )
}

export default Banner
