import styled from 'styled-components'
import { Wrapper } from '../styles/CommonStyle'
import { useState } from 'react'
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

function ProductsPage() {
  const [selectedBrands, setSelectedBrands] = useState([])

  const mockBrands = [
    'Apple', 'Samsung', 'Xiaomi', 'Poco', 'OPPO', 'Honor', 'Motorola', 'Nokia', 'Realme'
  ]

  return (
    <PageWrapper>
      <BreadCrumbs category="Smartphones" />
      <ContentWrapper>
        <SidebarFilter
          brands={mockBrands}
          selectedBrands={selectedBrands}
          setSelectedBrands={setSelectedBrands}
        />
        <ProductCards selectedBrands={selectedBrands} />
      </ContentWrapper>
    </PageWrapper>
  )
}

export default ProductsPage
