import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import Products from './pages/Products'
import Layout from './layout/Layout'
import { GlobalStyles } from './styles/GlobalStyles'
import Favorites from './pages/Favorites'
import Cart from './pages/Cart'
import MyPage from './pages/MyPage'

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products:id' element={<Product />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/my-page' element={<MyPage />} />
          <Route path='/cart' element={<Cart />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
