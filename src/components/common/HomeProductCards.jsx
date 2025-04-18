import styled from "styled-components"
import ProductCard from "./ProductCard"
import { Wrapper } from "../../styles/CommonStyle"

const ListWrapper = styled(Wrapper)`
  flex-wrap: wrap;
  gap: 32px;
`

const SimpleProductCards = ({ items = [] }) => {
  return (
    <ListWrapper>
      {items.slice(0, 8).map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ListWrapper>
  )
}

export default SimpleProductCards
