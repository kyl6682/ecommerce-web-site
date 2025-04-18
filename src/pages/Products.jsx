import styled from 'styled-components'
import { Wrapper } from '../styles/CommonStyle'
import { useState } from 'react'
import ProductCards from '../components/common/ProductCards'
import SidebarFilter from '../components/products/SidebarFilter'
import BreadCrumbs from '../components/products/BreadCrumbs'
import { useProducts } from '../hooks/useProducts'

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

function ProductsPage() {
  const [selectedBrands, setSelectedBrands] = useState([])

  // 실제 상품 데이터 불러오기
  const {products} = useProducts()

  // 중복 없는 카테고리 이름만 추출
  const brands = products
    ? Array.from(new Set(products.map(p => p.category?.name).filter(Boolean)))
    : []

  return (
    <PageWrapper>
      <BreadCrumbs category="All Products" />
      <ContentWrapper>
        <SidebarFilter
          brands={brands}
          selectedBrands={selectedBrands}
          setSelectedBrands={setSelectedBrands}
        />
        <ProductCards selectedBrands={selectedBrands} />
      </ContentWrapper>
    </PageWrapper>
  )
}

export default ProductsPage
