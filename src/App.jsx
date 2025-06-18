import './App.css'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './sections/About'
import Contact from './sections/Contact'
import Home from './sections/Home'
import Projects from './sections/Projects'

function App() {

  return (
    <div className=''>
      <Navbar />
      <main className=''>
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ToastContainer />
    </div>
  )
}

export default App
