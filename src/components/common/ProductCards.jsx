import styled from "styled-components";
import ProductCard from './ProductCard'
import { Wrapper } from '../../styles/CommonStyle'
import ProductCardSkeleton from "./ProductCardSkeleton";

const ListWrapper = styled(Wrapper)`
  flex-wrap: wrap;
  gap: 32px;
`

const ProductCards = ({ items, loading }) => {
  if (!items?.length && loading) {
    return (
      <ListWrapper>
        {Array(8).fill(0).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </ListWrapper>
    )
  }

  return (
    <ListWrapper>
      {items.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      {loading &&
        Array(2).fill(0).map((_, i) => <ProductCardSkeleton key={`load-${i}`} />)}
    </ListWrapper>
  )
}

export default ProductCards

