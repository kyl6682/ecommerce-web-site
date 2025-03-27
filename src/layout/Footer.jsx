import styled from 'styled-components'
import Logo from '../assets/Logo'
import { Wrapper } from '../styles/CommonStyle'
import { Tweeter } from '../assets/icons/Tweeter'
import { Facebook } from '../assets/icons/Facebook'
import { TikTok } from '../assets/icons/TikTok'
import { Instagram } from '../assets/icons/Instagram'
import useDevice from '../hooks/useDevice'

const FooterContent = styled(Wrapper)`
  width: 100%;
  height: 100%;
  align-items: ${({ $isMobile }) => ($isMobile ? 'center' : 'flex-start')};
  text-align: ${({ $isMobile }) => ($isMobile ? 'center' : 'left')};
`

const FooterNav = styled(Wrapper)`
  gap: 80px;
  margin-bottom: 30px;
  flex-direction: ${({ $direction }) => $direction || 'row'};
  align-items: ${({ $isMobile }) => ($isMobile ? 'center' : 'flex-start')};
  text-align: ${({ $isMobile }) => ($isMobile ? 'center' : 'left')};

  h3 {
    color: white;
    line-height: 40px;
  }

  li {
    color: #cdcdcd;
    list-style: none;
    line-height: 32px;
  }
`

const FooterDiv = styled(Wrapper)`
  flex-direction: column;
  color: #cfcfcf;
  font-size: 14px;
  align-items: ${({ $isMobile }) => ($isMobile ? 'center' : 'flex-start')};
  gap: 16px;
  text-align: ${({ $isMobile }) => ($isMobile ? 'center' : 'left')};
`

const SocialNav = styled(Wrapper)`
  justify-content: ${({ $isMobile }) => ($isMobile ? 'center' : 'flex-start')};
  align-items: center;
  width: 100%;
  height: 60px;
  gap: 16px;
`

function Footer() {
  const { isMobile } = useDevice()

  return (
    <Wrapper
      $padding={isMobile ? '42px 32px' : '104px 160px'}
      $backgroundcolor='black'
      $direction='column'
    >
      <FooterContent $direction={isMobile ? 'column' : 'row'} $isMobile={isMobile}>
        <FooterDiv $isMobile={isMobile}>
          <Logo color='white' />
          <p>
            We are a residential interior design firm located in <br />
            Portland. Our boutique-studio offers more than
          </p>
        </FooterDiv>

        <FooterNav $direction={isMobile ? 'column' : 'row'} $isMobile={isMobile}>
          <ul>
            <h3>Services</h3>
            <li>Bonus program</li>
            <li>Gift cards</li>
            <li>Credit and payment</li>
            <li>Service contracts</li>
            <li>Non-cash account</li>
            <li>Payment</li>
          </ul>
          <ul>
            <h3>Assistance to the buyer</h3>
            <li>Find an order</li>
            <li>Terms of delivery</li>
            <li>Exchange and return of goods</li>
            <li>Guarantee</li>
            <li>Frequently asked questions</li>
            <li>Terms of use of the site</li>
          </ul>
        </FooterNav>
      </FooterContent>

      <SocialNav $isMobile={isMobile}>
        <li><Tweeter color='white' size={isMobile ? '24px' : '16px'} /></li>
        <li><Facebook color='white' size={isMobile ? '24px' : '16px'}/></li>
        <li><TikTok color='white' size={isMobile ? '24px' : '16px'} /></li>
        <li><Instagram color='white' size={isMobile ? '24px' : '16px'} /></li>
      </SocialNav>
    </Wrapper>
  )
}

export default Footer
