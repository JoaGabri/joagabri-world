import React, { useEffect } from "react";
import './index.css';
import { AboutMe, Final,Home,NavBar,Projects,Skills} from "./Components/index.js";
import opacity from './assets/animations/Opacity.js';
import smooth from './assets/animations/Smooth.js';



const App: React.FC = () => {
  useEffect(() => {
     opacity();
     smooth();
  }, []);

  return (
    <>
    <body>
    <div className='text-white'>
      <Home />
      <AboutMe />
      <Skills/>
      <Projects />
      <Final />
      <NavBar />
  </div>
</body>
    </>
  )
}

export default App


