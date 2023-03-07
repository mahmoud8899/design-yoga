
import React from 'react'
import './css/index.css'
import { Footer } from './Screen/Footer'
import HomeScreen from './Screen/Home'
import { NavBar } from './Screen/Navbar/index'
export default function App() {

  return (
    <>

      <NavBar />
      <HomeScreen />
      <Footer />
    </>
  )
}