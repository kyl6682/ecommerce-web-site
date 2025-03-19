import styled from "styled-components";
import { Wrapper } from "../../styles/CommonStyle";
import ProductCard from "./ProductCard";

const CardsWrapper = styled(Wrapper)`
    gap: 16px;
    flex-wrap: wrap;
    justify-content: start;
    padding: 0;
`

const ProductCards = () => {
    return (
        <CardsWrapper>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </CardsWrapper>
    )
}

export default ProductCards