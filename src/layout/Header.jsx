import styled from 'styled-components'
import Cart from '../assets/icons/Cart'
import Favorite from '../assets/icons/Favorite'
import User from '../assets/icons/User'
import Logo from '../assets/logo'
import SearchInput from '../components/common/SearchInput'
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

function Header() {
  return (
    <>
      <Wrapper
        style={{ padding: '16px 160px', justifyContent: 'space-between' }}
      >
        <Link to={'/'}>
          <Logo color={'black'} />
        </Link>
        <SearchInput width={'370px'} />
        <Wrapper style={{ gap: '24px' }}>
          <Link to={'/favorites'}><Favorite /></Link>
          <Link to={'/cart'}><Cart /></Link>
          <Link to={'/my-page'}><User /></Link>
        </Wrapper>
      </Wrapper>
    </>
  )
}

export default Header
