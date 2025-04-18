import styled from 'styled-components'
import { Wrapper } from '../styles/CommonStyle'
import { useState } from 'react'
import ProductCards from '../components/common/ProductCards'
import BreadCrumbs from '../components/products/BreadCrumbs'
import { useProducts } from '../hooks/useProducts'
import SidebarFilter from '../components/products/SidebarFilter'
import useInfiniteScroll from '../hooks/useInfiniteScroll'

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
  const [page, setPage] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [categoryId, setCategoryId] = useState(null)

  const { products, hasMore, loading } = useProducts({page, categoryId})

  const loadMoreRef = useInfiniteScroll({
    loading,
    hasMore,
    onLoadMore: () => setPage((prev) => prev + 1),
  })

  const handleCategoryChange = (category) => {
    if (!category) {
      setSelectedCategory(null)
      setCategoryId(null)
      setPage(1)
    } else {
      setSelectedCategory(category.name)
      setCategoryId(category.id)
      setPage(1)
    }
  }

  return (
    <PageWrapper>
      <BreadCrumbs category={selectedCategory || 'All Products'} />
      <ContentWrapper>
        <SidebarFilter
          selectedCategory={selectedCategory}
          onChangeCategory={handleCategoryChange}
        />
        {loading ? (
          <p>로딩 중...</p>
        ) : (
          <div>
            <ProductCards items={products} />
            <div ref={loadMoreRef} style={{ height: 1 }} />
          </div>
        )}
      </ContentWrapper>
    </PageWrapper>
  )
}

export default ProductsPage
