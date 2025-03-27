import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import Products from './pages/Products'
import Layout from './layout/Layout'
import { GlobalStyles } from './styles/GlobalStyles'
import Favorites from './pages/Favorites'
import Cart from './pages/Cart'
import MyPage from './pages/MyPage'
import { Helmet } from 'react-helmet'
import ProductCategoryPage from './pages/ProductCategoryPage'

function App() {
  return (
    <>
      <GlobalStyles />
      <Helmet>
        <title>Cyber</title>
        <meta name='description' content='심화반 프로젝트' />
        <meta property='og:title' content='Cyber' />
        <meta property='og:description' content='심화반 프로젝트' />
        {/* <meta property='og:image' content='#' /> */}
      </Helmet>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/category/:category' element={<ProductCategoryPage />} />
          <Route path='/products:id' element={<Product />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/my-page' element={<MyPage />} />
          <Route path='/cart' element={<Cart />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
