import './index.css'
import Home from  './Components/Home.tsx'
import AboutMe from './Components/AboutMe.tsx'
import Skills from './Components/Skills.tsx'
import Projects from './Components/Projects.tsx'
import Contact from './Components/Contact.tsx'
import Final from './Components/Final.tsx'
import Navbar from './Components/NavBar.tsx'


function App() {


  return (
    <>
    <body>
    <div className='min-h-screen flex items-center justify-center text-white leading-[200px]'>
      <section>
      <Home />
      <AboutMe />
      <Skills/>
      <Projects />
      <Contact />
      <Final />
      <Navbar />

    </section>
  </div>
</body>
    </>
  )
}

export default App


