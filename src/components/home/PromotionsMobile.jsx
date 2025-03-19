import styled from 'styled-components'
import { Wrapper } from '../../styles/CommonStyle'
import PlayStation from '../../assets/images/Playstation_Mobile.png'
import Headphone from '../../assets/images/Headphone_Mobile.png'
import VisionPro from '../../assets/images/VisionPro_Mobile.png'
import MacBookPro14 from '../../assets/images/MacBookPro14_Mobile.png'
import { BlackStrokeButton } from './PromotionsPC'

const PromotionWrapper = styled(Wrapper)`
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0;
`

const ItemWrapper = styled(PromotionWrapper)`
  padding: 40px 16px;
  margin: 0;
  gap: 24px;
  background-color: ${(props) => props.$background};
  width: 100%;
`

const PromotionItems = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: ${(props) => props.$padding || '0 32px 0 0'};
  h2 {
    font-weight: ${(props) => props.$titleWeight || '300'};
    font-size: '34px';
  }
  color: ${(props) => props.$titleColor || 'black'};
  span {
    font-weight: 500;
  }
  p {
    font-size: 14px;
    color: #909090;
  }
`

function PromotionsMobile() {
  return (
    <PromotionWrapper>
      <ItemWrapper
        $background='#ededed'
        $column='1 / 2'
        $row='2'
        $height='272px'
      >
        <img src={Headphone} />
        <PromotionItems>
          <h2>
            Apple AirPods <span>Max</span>
          </h2>
          <p>
            Computational audio.
            <br />
            Listen, it's powerful
          </p>
        </PromotionItems>
      </ItemWrapper>
      <ItemWrapper
        $background='#353535'
        $column='2 / 3'
        $row='2'
        $height='272px'
      >
        <img src={VisionPro} />
        <PromotionItems $titleColor='white'>
          <h2>
            Apple Vision <span>Pro</span>
          </h2>
          <p>
            An immersive way toexperience
            <br />
            entertainment
          </p>
        </PromotionItems>
      </ItemWrapper>
      <ItemWrapper>
        <img src={PlayStation} />
        <PromotionItems $titleWeight='500' $titleSize='49px'>
          <h2>Playstation 5</h2>
          <p>
            Incredibly powerful CPUs, GPUs, and an SSD
            <br />
            withintegrated I/O will redefine your <br />
            PlayStationexperience.
          </p>
        </PromotionItems>
      </ItemWrapper>
      <ItemWrapper
        $background='#ededed'
        $column='3 / 5'
        $row='1 / 3'
        $height='600px'
      >
        <PromotionItems $titleSize='64px' $gap='16px' $padding='0 0 0 32px'>
          <img src={MacBookPro14} style={{ maxWidth: '330px' }} />

          <h2>
            Macbook <span>Air</span>
          </h2>
          <p>
            The new 15‑inch MacBook Air makes room for moreof what you love with
            a spacious Liquid Retinadisplay.
          </p>
          <BlackStrokeButton>Shop Now</BlackStrokeButton>
        </PromotionItems>
      </ItemWrapper>
    </PromotionWrapper>
  )
}

export default PromotionsMobile
