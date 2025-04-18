import styled from "styled-components";
import ProductCard from './ProductCard'
import { Wrapper } from '../../styles/CommonStyle'

const ListWrapper = styled(Wrapper)`
  flex-wrap: wrap;
  gap: 32px;
`

function ProductCards({ items }) {
  if (!items || !items.length) return <p>상품이 없습니다.</p>


  return (
    <ListWrapper>
      {items.slice(0, 12).map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ListWrapper>
  )
}

export default ProductCards

