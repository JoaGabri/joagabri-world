import React, { useEffect } from "react";
import { gsap } from "gsap";  
import { ScrollTrigger } from "gsap/ScrollTrigger"; 
gsap.registerPlugin(ScrollTrigger);

import box from "../assets/images/BOX.svg"
import '../index.css'
// @ts-ignore
import SectionAnimation from "../assets/animations/SectionsAnimation";
// @ts-ignore
import OpacityAnimation from "../assets/animations/OpacityAnimation";


const AboutMe: React.FC = () => {
    useEffect(() => {
        SectionAnimation();
        OpacityAnimation();
     }, []);

  return (
    <>

    <section className="About section grid grid-cols-2 grid-rows-1 gap-2 h-screen place-items-center" id="about">
        <div className="text-center">
            <h1 className="text-xl text-white text-left opacity leading-none">
                About<br /><span className="text-blue">Me!</span>
                <div className="w-[400px] m-2 border-2 border-white"></div>
            </h1>
        </div>

  <div className=" text-center">
    <h1 className="text-[30px] leading-tight opacity text-right pr-[30px]">
    My name is João Gabriel, and I am 23 years old. Currently, <span className="text-blue">I'm pursuing a degree in Analysis and Development of Systems.</span> I'm <span className="text-yellow">Brazilian</span>, residing in São Paulo. 
    Ever since I was a kid, I have always loved computers. My curiosity has allowed me to better understand this aspect of myself. 
    As long as I can remember, <span className="text-blue">I have been captivated by technology</span>. The interaction with technology has enabled me to express myself, 
    gain knowledge, develop interests, and experience various emotions that form a <span className="text-blue">profound connection with my identity.</span> 
    I am deeply grateful for the information I have absorbed, as it has shaped me into who I am today. <span className="text-red">I truly love the person I have become.</span>
    </h1>
  </div>
</section>
<section className="section">

    <h1 className="opacity text-center text-xl leading-none pt-20 pb-20 text-white">
      I am a <span className="text-blue">truly</span>
      
    </h1>

    <div className="flex items-center justify-center">
  <img src={box} alt="Legend SVG" className="opacity h-[300px] w-[300px]" />
  </div>
</section>
    </>
  );
};

export default AboutMe;
