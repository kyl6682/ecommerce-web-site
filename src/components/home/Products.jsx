import styled from 'styled-components'
import { Wrapper } from '../../styles/CommonStyle.jsx'
import ProductCards from '../common/ProductCards.jsx'
import { categories } from '../common/CategoriesData.jsx'
import { useProducts } from '../../hooks/useProducts.js'
import ProductCardSkeleton from '../common/ProductCardSkeleton.jsx'
import SimpleProductCards from '../common/HomeProductCards.jsx'

const ProductWrapper = styled(Wrapper)`
  padding: 40px 160px;
  flex-direction: column;
  gap: 32px;
`

const ProductsFilter = styled.ul`
  align-self: start;
  display: flex;
  gap: 16px;
  li {
    font-size: 18px;
    line-height: 32px;
    list-style: none;
    color: #8b8b8b;
    &:hover {
      color: black;
    }
    &:active {
      color: black;
      text-decoration: underline 2px solid black;
      text-underline-offset: 5px;
    }
  }
`

function MainProducts() {
  const { products, loading } = useProducts({ page: 1 })

  if (loading)
    return (
      <>
        {Array(8)
          .fill(0)
          .map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))}
      </>
    )

  return (
    <ProductWrapper>
      <ProductsFilter>
        <li>all</li>
        {categories.map((el) => {
          return (
            <li key={el.id} id={el.id}>
              {el.name}
            </li>
          )
        })}
      </ProductsFilter>
      {categories.map((cat) => {
        const filtered = products.filter((p) => p.category.name === cat.name)
        return (
          <div key={cat.id}>
            <SimpleProductCards items={filtered} />
          </div>
        )
      })}
    </ProductWrapper>
  )
}

export default MainProducts
