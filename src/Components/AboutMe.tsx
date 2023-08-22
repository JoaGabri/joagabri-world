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
    <h1 className="text-[30px] leading-10 opacity text-right pr-[30px]">
   
 My name is João Gabriel, and I'm 23 years old. I'm studying Analysis and System Development. I live in São Paulo in Brazil. 

Ever since I was a child, I loved using computers. My curiosity helped me learn more about this interest. <br/><br/>Technology has always fascinated me. 

 The way I use technology helps me express myself, 

learn things, develop my interests, and feel different emotions that strongly connect with my identity.

I'm very thankful for the knowledge I've gained because it's made me who I am today. I really like the person I've become.
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
