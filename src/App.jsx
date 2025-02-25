import './index.css'
import About from './components/About'
import Navbar from './components/Navbar'
import Optimize from './components/Optimize'
import Services from './components/Services'
import Testing from './components/Testing'
import OurProcess from './components/OurProcess'



function App() {
  

  return (
    <>
    <div className='background-img bg-fade-img'>
    <Navbar/>
    <About/>
    </div>
    <Optimize/>
    <Services/>
    <Testing/>
    <OurProcess/>
    </>
    
  )
}

export default App
