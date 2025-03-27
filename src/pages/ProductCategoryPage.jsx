// pages/ProductCategoryPage.jsx
import styled from 'styled-components'
import { Wrapper } from '../styles/CommonStyle'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductCards from '../components/common/ProductCards'
import SidebarFilter from '../components/products/SidebarFilter'
import BreadCrumbs from '../components/products/BreadCrumbs'

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

function ProductCategoryPage() {
  const { category } = useParams()
  const [selectedBrands, setSelectedBrands] = useState([])

  const normalizedCategory = category.charAt(0).toUpperCase() + category.slice(1)

  return (
    <PageWrapper>
      <BreadCrumbs category={normalizedCategory} />
      <ContentWrapper>
        <SidebarFilter
          brands={[normalizedCategory]}
          selectedBrands={selectedBrands}
          setSelectedBrands={setSelectedBrands}
        />
        {/* 대소문자 관계없이 필터링 되도록 넘기기 */}
        <ProductCards selectedBrands={selectedBrands.length ? selectedBrands : [normalizedCategory]} />
      </ContentWrapper>
    </PageWrapper>
  )
}

export default ProductCategoryPage
