import Search from '../../assets/icons/Search'
import styled from 'styled-components'

const SearchForm = styled.div`
    background-color: #F5F5F5;
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 16px;
    width: ${(props) => props.width};
`

function SearchInput({width}) {
  return (
    <SearchForm width = {width}>
      <Search />
      <input placeholder='Search' />
    </SearchForm>
  )
}

export default SearchInput
