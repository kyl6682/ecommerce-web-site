import styled from 'styled-components'
import { Wrapper } from '../../styles/CommonStyle'
import Favorite from '../../assets/icons/Favorite'
import { useState } from 'react'

const ItemWrapper = styled(Wrapper)`
  flex-direction: column;
  background-color: #f6f6f6;
  border-radius: 9px;
  width: 268px;
  height: 432px;
  position: relative;
  padding: 16px 24px;
`

const ItemInfo = styled(Wrapper)`
  flex-direction: column;
  gap: 16px;
  h3 {
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
  }
  p {
    font-size: 24px;
    font-weight: 600;
  }
`

const BlackFillButton = styled.button`
  padding: 24px 56px;
  color: #fff;
  background-color: black;
  font-size: 16px;
  border-radius: 6px;
  margin-top: 24px;
`

const ProductCard = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <ItemWrapper>
      <div style={{ alignSelf: 'end', cursor: 'pointer' }}>
        <span onClick={() => setIsFavorite(prev => !prev)}>
          {isFavorite ? (
            <Favorite color="red" fill="red" />
          ) : (
            <Favorite />
          )}
        </span>
      </div>

      <div
        style={{
          width: '160px',
          height: '160px',
          objectFit: 'fill',
          alignSelf: 'center',
        }}
      >
        <img
          src={product?.images?.[0]}
          alt={product?.title}
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
      </div>

      <ItemInfo>
        <h3>{product?.title}</h3>
        <p>${product?.price}</p>
        <BlackFillButton>Buy Now</BlackFillButton>
      </ItemInfo>
    </ItemWrapper>
  )
}

export default ProductCard
