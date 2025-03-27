import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { Wrapper } from '../../styles/CommonStyle'

const CrumbWrapper = styled(Wrapper)`
  justify-content: start;
  gap: 12px;
  font-size: 16px;
  color: #6d6d6d;
  margin-bottom: 32px;
  width: 100%;

  a {
    text-decoration: none;
    color: #6d6d6d;

    &:hover {
      text-decoration: underline;
    }
  }

  span {
    color: #000;
    font-weight: 500;
  }
`

function BreadCrumbs() {
  const location = useLocation()
  const pathnames = location.pathname.split('/').filter(Boolean)

  return (
    <CrumbWrapper   >
      <Link to="/">Home</Link>
      <span>{'>'}</span>
      <Link to="/catalog">Catalog</Link>
      {pathnames.length > 1 && (
        <>
          <span>{'>'}</span>
          <span style={{ textTransform: 'capitalize' }}>{pathnames[1]}</span>
        </>
      )}
    </CrumbWrapper>
  )
}

export default BreadCrumbs
