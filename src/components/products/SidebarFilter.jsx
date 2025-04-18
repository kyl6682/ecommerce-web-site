import styled from 'styled-components'
import { Wrapper } from '../../styles/CommonStyle'
import { useCategories } from '../../hooks/useCategories'

const SidebarWrapper = styled(Wrapper)`
  flex-direction: column;
  width: 150px;
  background-color: #fff;
  border-right: 1px solid #eee;
  gap: 24px;
  padding-right: 20px;
`

const FilterBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const FilterTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 15px;
`

const FilterItem = styled.button`
  display: flex;
  line-height: 20px;
  padding: 3px;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #333;
  &:hover {
    background-color: #ececec;
    border-radius: 3px;
  }
`
const SidebarFilter = ({ selectedCategory, setSelectedCategory }) => {
  const { categories, loading, error } = useCategories()

  const handleCategoryChange = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(null) // 선택한 카테고리가 현재 카테고리와 동일하다면 해제
    } else {
      setSelectedCategory(category)
    }
  }

  if (loading) return <p>상품을 불러오고 있습니다.</p>
  if (error) return <p>상품 불러오기에 실패했습니다.</p>

  return (
    <SidebarWrapper>
      <FilterBlock>
        <FilterTitle>Category</FilterTitle>
        {categories.map((cat) => {
          return (
            <FilterItem
              key={cat.id}
              onClick={() => handleCategoryChange(cat.name)}
            >
              {cat.name}
            </FilterItem>
          )
        })}
      </FilterBlock>
    </SidebarWrapper>
  )
}

export default SidebarFilter
