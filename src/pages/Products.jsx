import styled from 'styled-components'
import { Wrapper } from '../styles/CommonStyle'
import { useState } from 'react'
import ProductCards from '../components/common/ProductCards'
import BreadCrumbs from '../components/products/BreadCrumbs'
import { useProducts } from '../hooks/useProducts'
import SidebarFilter from '../components/products/SidebarFilter'
import { useSearchParams } from 'react-router-dom'

const PageWrapper = styled(Wrapper)`
  flex-direction: column;
  padding: 48px 160px;
  gap: 40px;
`

const ContentWrapper = styled(Wrapper)`
  justify-content: start;
  align-items: flex-start;
  gap: 40px;
`
const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const { products, loading } = useProducts()

  const [searchParams] = useSearchParams()
  const queryCategory = searchParams.get('category')

  const effectiveCategory = selectedCategory || queryCategory

  const filteredProducts = selectedCategory
    ? products.filter((p) => p.category.name === selectedCategory)
    : products


  return (
    <PageWrapper>
      <BreadCrumbs category={effectiveCategory || 'All Products'} />
      <ContentWrapper>
        <SidebarFilter
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        {loading ? (
          <p>로딩 중...</p>
        ) : (
          <ProductCards items={filteredProducts} />
        )}
      </ContentWrapper>
    </PageWrapper>
  )
}

export default ProductsPage
