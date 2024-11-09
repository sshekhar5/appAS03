import { useState, useRef } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import InitialInfo from './components/mainContent/InitialInfo'

function App() {
  const [count, setCount] = useState(0)
  const footerRef = useRef(null);

  const scrollToFooter = () => {
    // Check if footerRef.current is available
    if (footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
    <Header onContactClick={scrollToFooter}></Header>
    <InitialInfo></InitialInfo>
    <Footer ref={footerRef}></Footer>
    </>
  )
}

export default App
