import React from 'react'
import './styles/app.scss'

import Header from './components/Header';
import Home from './components/Home';
import Products from './components/Products';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
    <Header />
    <Home />
    <Products />
    <ContactUs />
    <Footer />
    </>
  )
}

export default App
