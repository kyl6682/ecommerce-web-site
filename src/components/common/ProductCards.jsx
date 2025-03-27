import styled from "styled-components";
import useFetch from '../../hooks/useFetch'
import ProductCard from './ProductCard'
import { Wrapper } from '../../styles/CommonStyle'

const ListWrapper = styled(Wrapper)`
  flex-wrap: wrap;
  gap: 32px;
`

function ProductCards({ selectedBrands }) {
  const { data: products, loading, error } = useFetch(
    'https://api.escuelajs.co/api/v1/products'
  )

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error loading products</p>

  const filteredProducts = selectedBrands.length
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

