import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import './pages.css'
import { CartProvider } from './context/CartContext'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import ScrollReveal from './components/ScrollReveal'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Login from './pages/Login'
import Register from './pages/Register'
import Checkout from './pages/Checkout'
import OurStory from './pages/OurStory'
import Contact from './pages/Contact'
import Careers from './pages/Careers'
import CustomerCare from './pages/CustomerCare'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import NotFound from './pages/NotFound'

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <ScrollToTop />
        <ScrollReveal />
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="product/:slug" element={<ProductDetail />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="ourstory" element={<OurStory />} />
            <Route path="contact" element={<Contact />} />
            <Route path="careers" element={<Careers />} />
            <Route path="customercare" element={<CustomerCare />} />
            <Route path="terms" element={<Terms />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
