import styled from "styled-components";
import ProductCard from './ProductCard'
import { Wrapper } from '../../styles/CommonStyle'
import { useProducts } from "../../hooks/useProducts";

const ListWrapper = styled(Wrapper)`
  flex-wrap: wrap;
  gap: 32px;
`

function ProductCards({ selectedBrands }) {
  const {products, loading, error} = useProducts();

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error loading products</p>

  const filteredProducts = selectedBrands && selectedBrands.length
    ? products.filter((product) =>
        selectedBrands.includes(product?.category?.name)
      )
    : products

  return (
    <ListWrapper>
      {filteredProducts.slice(0, 12).map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ListWrapper>
  )
}

export default ProductCards

