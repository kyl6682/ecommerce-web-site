import styled from 'styled-components'
import { Wrapper } from '../../styles/CommonStyle'
import PlayStation from '../../assets/images/PlayStation.png'
import Headphone from '../../assets/images/Headphone.png'
import VisionPro from '../../assets/images/VisionPro.png'
import MacBookPro14 from '../../assets/images/MacBookPro14.png'

export const BlackStrokeButton = styled.button`
  border: 1px solid black;
  padding: 12px 40px;
  border-radius: 7px;
  margin: 16px 0;
  width: 191px;
`

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, auto);
  position: relative;
`

const GridItem = styled(Wrapper)`
  justify-content: start;
  gap: 24px;
  margin: 0;
  padding: 0;
  background-color: ${(props) => props.$background};
  grid-column: ${(props) => props.$column};
  grid-row: ${(props) => props.$row};
  height: ${(props) => props.$height};
`

const PromotionItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.$gap || '8px'};
  padding: ${(props) => props.$padding || '0'};
  h2 {
    font-weight: ${(props) => props.$titleWeight || '300'};
    font-size: ${(props) => props.$titleSize || '29px'};
    color: ${(props) => props.$titleColor || 'black'};
    span {
      font-weight: 500;
    }
  }
  p {
    font-size: 14px;
    color: #909090;
  }
`

function PromotionsPC() {
  return (
    <GridWrapper>
      <GridItem $background='white' $column='1 / 3' $row='1' $height='328px'>
        <img src={PlayStation} />
        <PromotionItems $titleWeight='500' $titleSize='49px'>
          <h2>Playstation 5</h2>
          <p>
            Incredibly powerful CPUs, GPUs, and an SSD with
            <br />
            integrated I/O will redefine your PlayStation
            <br />
            experience.
          </p>
        </PromotionItems>
      </GridItem>
      <GridItem $background='#ededed' $column='1 / 2' $row='2' $height='272px'>
        <div>
          <img src={Headphone} />
        </div>
        <PromotionItems>
          <h2>
            Apple <br />
            AirPods
            <br />
            <span>Max</span>
          </h2>
          <p>
            Computational audio. <br />
            Listen, it's powerful
          </p>
        </PromotionItems>
      </GridItem>
      <GridItem $background='#353535' $column='2 / 3' $row='2' $height='272px'>
        <img src={VisionPro} />
        <PromotionItems $titleColor='white'>
          <h2>
            Apple <br />
            Vision <span>Pro</span>
          </h2>
          <p>
            An immersive way to
            <br />
            experience
            <br />
            entertainment
          </p>
        </PromotionItems>
      </GridItem>
      <GridItem
        $background='#ededed'
        $column='3 / 5'
        $row='1 / 3'
        $height='600px'
      >
        <PromotionItems $titleSize='64px' $gap='16px' $padding='0 0 0 32px'>
          <h2>
            Macbook <span>Air</span>
          </h2>
          <p>
            The new 15‑inch MacBook Air makes room for more
            <br />
            of what you love with a spacious Liquid Retina
            <br />
            display.
          </p>
          <BlackStrokeButton>Shop Now</BlackStrokeButton>
        </PromotionItems>
        <img
          src={MacBookPro14}
          style={{
            position: 'absolute',
            right: '0',
          }}
        />
      </GridItem>
    </GridWrapper>
  )
}

export default PromotionsPC
