import styled from 'styled-components'
import { Wrapper } from '../../styles/CommonStyle'
import { categories } from '../common/categories'

const CategoryCard = styled(Wrapper)`
  width: 160px;
  height: 120px;
  background-color: #ededed;
  border-radius: 15px;
`

function Categories() {
  return (
    <Wrapper>
      {categories.map((el) => {
        const IconComponent = el.icon
        return (
          <CategoryCard key={el.id} href={el.link}>
            {IconComponent ? <IconComponent /> : '준비중'}
            <span>{el.name}</span>
          </CategoryCard>
        )
      })}
    </Wrapper>
  )
}

export default Categories
