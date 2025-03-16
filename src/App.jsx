import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import Products from './pages/Products'
import Layout from './layout/Layout'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products:id' element={<Product />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
