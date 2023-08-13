import React, { useEffect } from "react";
import { gsap } from "gsap";  
import { ScrollTrigger } from "gsap/ScrollTrigger"; 
gsap.registerPlugin(ScrollTrigger);

import '../index.css'
// @ts-ignore
import SectionAnimation from "../assets/animations/SectionsAnimation";
// @ts-ignore
import OpacityAnimation from "../assets/animations/OpacityAnimation";
// @ts-ignore
import CloudWord from "../assets/animations/CloudOfWords/CloudWord";
// @ts-ignore
import legend from "../assets/images/legend.svg"



const Skills: React.FC = () => {
    useEffect(() => {
        SectionAnimation();
        OpacityAnimation();
     }, []);

  return (
    <>

    <section className="section grid grid-cols-2 grid-rows-1" id="skills">

      <div className="flex items-center justify-center opacity">
        <h1 className=" text-blue text-left text-xl leading-none">

           Skills<span className="text-white">!</span>
          <div className="w-[400px] m-2 border-2 border-white"></div>

        </h1>
      </div>

      <div className="flex items-center justify-center section">
        <h1 className="text-[30px] leading-tight opacity text-right pr-[30px] ">

          <p className="mb-5">Focusing on starting my career with <span className='underline text-[#FA4B4B]'>python</span>, I have mastery of it, however, I have knowledge about <span className='underline text-[#FA4B4B]'>TypeScript</span> and <span className='underline text-[#FA4B4B]'>JavaScript</span>, in addition, I have experience in several <span className='underline text-blue'>frameworks</span>, both <span className='underline text-blue'>front-end</span> and <span className='underline text-blue'>back-end</span>, I also have knowledge in package management and I go beyond the development part going to <span className="underline text-[#ACFF70]">operating systems</span>, <span className='underline text-[#FA4B4B]'>automation</span>, <span className="underline text-[#4BFA7F]">ETL</span>, <span className="underline">Cloud</span>, <span className=" underline text-[#BD4BFA]">APIS</span>, <span className=" underline text-[#4BFA7F]">database</span>, <span className="underline text-[#F26BD7]">versioning</span> and other tools and <span className=" underline text-[#F26BD7]">technologies</span>.<br/> </p>
          <p>Talking about my professional profile, I am an <span className='underline text-[#3399FF]'>analytical</span> with a <span className='underline text-[#66CC99]'>focus on details</span>. I have a profile of <span className='underline text-[#FFCC66]'>adaptability</span> and continuous <span className='underline text-[#CC99FF]'>self-learning</span>, I love to <span className='underline text-[#FF6666]'>solve problems</span> using my <span className='underline text-[#66FFFF]'>logic</span> and beyond these details I believe I can go much further when I use my <span className='underline text-[#FF66CC]'>creativity</span> and my <span className='underline text-[#FF9900]'>willpower</span>.</p>
     
        </h1>
      </div>
  </section>

  <section className="section cloud">
    <div className="h-fit">
      <h1 className="opacity text-center text-[50px] leading-none pt-20">

      More about my Skills<span className="text-lblue">¡</span>

      </h1>
    </div>

  <div className="flex flex-col items-center justify-center">
    <div className="opacity">
      <CloudWord />
    </div>
    <div className="flex items-center justify-center mt-4">
      <img src={legend} alt="Legend SVG" className="opacity" />
    </div>
  </div>
</section>

</>
  );
};
export default Skills;

