import styled from 'styled-components'
import { Wrapper } from '../../styles/CommonStyle'
import { BlackStrokeButton } from './PromotionsPC'
import { WhiteStrokeButton } from './Hero'

const ItemWrapper = styled(Wrapper)`
  flex-direction: column;
  width: 25%;
  height: 552px;
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
  return (
    <Wrapper>
      <ItemWrapper>
        <img src='#' />
        <ItemContent>
          <h3>Clothes</h3>
          <BlackStrokeButton>Shop Now</BlackStrokeButton>
        </ItemContent>
      </ItemWrapper>
      <ItemWrapper>
        <img src='#' />
        <ItemContent>
          <h3>Electronics</h3>
          <BlackStrokeButton>Shop Now</BlackStrokeButton>
        </ItemContent>
      </ItemWrapper>
      <ItemWrapper $background='#EAEAEA'>
        <img src='#' />
        <ItemContent>
          <h3>Furniture</h3>
          <BlackStrokeButton>Shop Now</BlackStrokeButton>
        </ItemContent>
      </ItemWrapper>
      <ItemWrapper $background='#2C2C2C'>
        <img src='#' />
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
