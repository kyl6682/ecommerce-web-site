import styled from 'styled-components'
import { WhiteStrokeButton } from './Hero.jsx'
import { Wrapper } from '../../styles/CommonStyle.jsx'
import MainPromotionPC from '../../assets/images/MainPromotion.png'
import MainPromotionMobile from '../../assets/images/MainPromotionMobile.png'
import useDevice from '../../hooks/useDevice.jsx'

const PromotionWrapper = styled(Wrapper)`
  position: relative;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const PromotionContent = styled(Wrapper)`
  position: absolute;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  align-items: center;
  z-index: 2;
  color: white;
  h1 {
    font-weight: 300;
    font-size: 72px;
  }
  p {
    color: #787878;
    font-size: 16px;
  }
`

const PromotionBackground = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

function MainPromotion() {
  const {isMobile} = useDevice()
  return (
    <PromotionWrapper>
      <PromotionBackground src={isMobile? `${MainPromotionMobile}` : `${MainPromotionPC}`} />
      <PromotionContent>
        <div>
          <h1>
            Big Summer <span style={{ fontWeight: '500' }}>Sale</span>
          </h1>
          <p>Commodo fames vitae vitae leo mauris in. Eu consequat.</p>
        </div>
        <WhiteStrokeButton>Shop Now</WhiteStrokeButton>
      </PromotionContent>
    </PromotionWrapper>
  )
}

export default MainPromotion
