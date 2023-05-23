import { useState } from 'react'
import GlobalStyle from './GlobalStyles'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
// import './App.css'
import Products from './pages/Products'
import Home from './pages/Home'
import Company from './pages/Company'
import Contact from './pages/Contact'
import Cosmetics from './pages/Cosmetics'
import Privacy from './pages/Privacy'
import EcLaw from './pages/EcLaw'
import Confirm from './pages/Confirm'
import Business from './pages/Business'
import Footer from './components/Footer'
import Maker from './pages/Maker'
import SpecialArticle from './components/SpecialArticle'
import Article from './components/Article'
import ProductDetail from './pages/ProductDetail'


function App() {
  const [count, setCount] = useState(0)

  return (
		<>
				<GlobalStyle />
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/company" element={<Company />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/categories/cosmetics" element={<Cosmetics />} />
					<Route path="/privacy" element={<Privacy />} />
					<Route path="/eclaw" element={<EcLaw />} />
					<Route path="/confirm" element={<Confirm />} />
					<Route path="/article/:id" element={<Article />} />
					<Route path="/business" element={<Business />} />
					<Route path="/maker" element={<Maker />} />
					<Route path="/special_article/:id" element={<SpecialArticle />} />
					<Route path="/product_detail" element={<ProductDetail />} />


				</Routes>
				<Footer />
				{/**/}

		</>
  )
}

export default App
