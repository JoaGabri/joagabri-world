import { useEffect} from 'react';

import top from "../assets/images/TOP.png"
import about from "../assets/images/About.png"
import skills from "../assets/images/Skills.png"
import mail from "../assets/images/mail.png"
import linkedin from "../assets/images/linkedin.png"
import git from "../assets/images/GitIcon.png"
import '../index.css'


const Navbar = () => {

  useEffect(() => {

  }, []);


  return (
    <nav className="navbar opacity fixed bottom-[20px] left-1/2 transform -translate-x-1/2 w-[400px] h-[40px]  rounded-t-lg shadow-lg">
  <ul className="flex justify-around items-center h-full">

    <li className="border-r border-black pr-2">
      <div className='flex items-center'>
        <div className='bg-black rounded-full h-[35px] w-[35px] flex items-center justify-center'>
          <a href="#home">
          <img src={top} className='w-[30px] h-[30px]' />
          </a>
        </div>
      </div>
    </li>

    <li className="border-r border-black pr-2">
      <div className='flex items-center'>
          <div className='bg-black rounded-full h-[35px] w-[35px] flex items-center justify-center'>
            <a href="#about">
            <img src={about} className='w-[30px] h-[30px]' />
            </a>
          </div>
        </div>
    </li>

    <li className="border-r border-black pr-2">
    <div className='flex items-center'>
        <div className='bg-black rounded-full h-[35px] w-[35px] flex items-center justify-center'>
          <a href="#skills">
          <img src={skills} className='w-[25px] h-[25px]' />
          </a>
        </div>
      </div>

    </li>
    <li className="border-r border-black pr-2">
    <div className='flex items-center'>
        <div className='bg-black rounded-full h-[35px] w-[35px] flex items-center justify-center'>
          <a href="https://github.com/JoaGabri" target='_blank'>
          <img src={git} className='w-[25px] h-[25px]' />
          </a>
        </div>
      </div>
    </li>
    <li className="border-r border-black pr-2">
    <div className='flex items-center'>
        <div className='bg-black rounded-full h-[35px] w-[35px] flex items-center justify-center'>
          <a href="#contact">
          <img src={mail} className='w-[25px] h-[25px]' />
          </a>
        </div>
      </div>
    </li>
    <li >
    <div className='flex items-center'>
        <div className='bg-black rounded-full h-[35px] w-[35px] flex items-center justify-center'>
          <a href="https://www.linkedin.com/in/joaogabrielrocha/" target='_blank'>
          <img src={linkedin} className='w-[25px] h-[25px]' />
          </a>
        </div>
      </div>
    </li>
  </ul>

</nav>


  );
};

export default Navbar;
