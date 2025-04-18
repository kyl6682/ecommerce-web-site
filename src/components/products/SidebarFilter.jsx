import styled from 'styled-components'
import { Wrapper } from '../../styles/CommonStyle'
import { useCategories } from '../../hooks/useCategories'

const SidebarWrapper = styled(Wrapper)`
  flex-direction: column;
  width: 240px;
  padding: 24px;
  background-color: #fff;
  border-right: 1px solid #eee;
  gap: 24px;
`

const FilterBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const FilterTitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
`

const FilterItem = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #333;
`

function SidebarFilter({ selectedBrands, setSelectedBrands }) {
  const {categories, loading, error} = useCategories();

  const handleBrandChange = (brand) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((b) => b !== brand))
    } else {
      setSelectedBrands([...selectedBrands, brand])
    }
  }

  if (loading) return <p>Loading filters...</p>
  if (error) return <p>Error loading filters</p>

  return (
    <SidebarWrapper>
      <FilterBlock>
        <FilterTitle>Category</FilterTitle>
        {categories.map((cat) => (
          <FilterItem key={cat.id}>
            <input
              type="checkbox"
              checked={selectedBrands.includes(cat.name)}
              onChange={() => handleBrandChange(cat.name)}
            />
            {cat.name}
          </FilterItem>
        ))}
      </FilterBlock>
    </SidebarWrapper>
  )
}

export default SidebarFilter
