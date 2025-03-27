import styled from 'styled-components'
import { Wrapper } from '../../styles/CommonStyle'
import { Link } from 'react-router-dom'
import { categories } from '../common/CategoriesData.jsx'

const CategoryWrapper = styled(Wrapper)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  background-color: #fafafa;
  padding: 80px 160px;
  gap: 32px;
`

const ItemWrapper = styled(Wrapper)`
  justify-content: start;
  flex-wrap: wrap;
  margin: 0;
  gap: 32px;
`

const CategoryCard = styled(Wrapper)`
  flex-direction: column;
  width: 160px;
  height: 128px;
  background-color: #ededed;
  border-radius: 15px;
  padding: 24px;
  gap: 8px;
  h3 {
    font-size: 18px;
    line-height: 32px;
    font-weight: 400;
    cursor: pointer;
    color: black;
    text-decoration: none;
    &:hover {
      opacity: 0.8;
    }
  }
`

function Categories() {
  return (
    <CategoryWrapper>
      <h2
        style={{
          fontSize: '24px',
          lineHeight: '32px',
          fontWeight: "400",
        }}
      >
        Browse By Category
      </h2>
      <ItemWrapper>
        {categories.map((el) => {
          const IconComponent = el.icon
          return (
            <Link key={el.id} to={el.link}>
              <CategoryCard href={el.link}>
                {IconComponent ? <IconComponent /> : '준비중'}
                <h3>{el.name}</h3>
              </CategoryCard>
            </Link>
          )
        })}
      </ItemWrapper>
    </CategoryWrapper>
  )
}

export default Categories
