import styled from 'styled-components'
import Cart from '../assets/icons/Cart'
import Favorite from '../assets/icons/Favorite'
import User from '../assets/icons/User'
import Logo from '../assets/logo'
import SearchInput from '../components/common/SearchInput'
import { Link } from 'react-router-dom'
import useDevice from '../hooks/useDevice'
import Hamburger from '../assets/icons/Hamburger'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ padding }) => padding || '16px 16px'};
`

const NavItems = styled.div`
  display: flex;
  gap: 24px;
`

const NavBar = ({ isPC, isTablet }) => {
  return (
    <Wrapper padding={isPC ? '16px 160px' : isTablet ? '16px 40px' : '16px 16px'}>
      <Link to={'/'}>
        <Logo color={'black'} />
      </Link>

      {isPC && <SearchInput width="370px" />}
      {isTablet && <SearchInput width="370px" />}

      {isPC ? (
        <NavItems>
          <Link to="/favorites"><Favorite /></Link>
          <Link to="/cart"><Cart /></Link>
          <Link to="/my-page"><User /></Link>
        </NavItems>
      ) : (
        <Hamburger />
      )}
    </Wrapper>
  )
}

function Header() {
  const { isMobile, isTablet, isPC } = useDevice()
  return <NavBar isPC={isPC} isTablet={isTablet} isMobile={isMobile} />
}

export default Header
