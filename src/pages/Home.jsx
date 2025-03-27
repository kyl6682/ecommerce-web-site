import SEO from '../components/common/SEO'
import Banner from '../components/home/Banner'
import Categories from '../components/home/Categories'
import Hero from '../components/home/Hero'
import MainPromotion from '../components/home/MainPromotion'
import MainProducts from '../components/home/Products'
import Promotions from '../components/home/Promotions'

function Home() {
  return (
    <>
    <SEO 
            title="Home"
            description="최신 상품을 지금 만나보세요!"
    />
      <Hero />
      <Promotions />
      <Categories />
      <MainProducts />
      <Banner />
      <MainPromotion />
    </>
  )
}

export default Home
