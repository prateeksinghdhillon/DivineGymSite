import './index.css'
import About from './components/About'
import Navbar from './components/Navbar'
import Optimize from './components/Optimize'


function App() {
  

  return (
    <>
    <div className='background-img bg-fade-img'>
    <Navbar/>
    <About/>
    </div>
    <Optimize/>
    </>
    
  )
}

export default App
