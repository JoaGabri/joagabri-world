import React, { useEffect } from "react";

// GSAP ANIMATION IMPORT
import { gsap } from "gsap";  
import { ScrollTrigger } from "gsap/ScrollTrigger"; 
gsap.registerPlugin(ScrollTrigger);
// @ts-ignore
import SectionAnimation from "../assets/animations/SectionsAnimation";
// @ts-ignore
import OpacityAnimation from "../assets/animations/OpacityAnimation";

// STYLES IMPORT
import '../index.css'
import cat from "../assets/images/image 2.png"


const Projects: React.FC = () => {
    useEffect(() => {
        SectionAnimation();
        OpacityAnimation();
     }, []);

  return (
    <>  
    <section className="section">
        <div className="grid grid-cols-2 grid-rows-2 gap-2 h-[100vh]">
            <div className="flex items-center justify-center opacity" >
                <h1 className=" text-white text-left text-xl leading-none">

                    Projects<span className="text-purple">!</span>
                    <div className="w-[520px] m-2 border-2 border-purple"></div>

                </h1>
            </div>



        <div className="col-start-2 row-start-2 flex items-start justify-start">

            <h1 className="text-[30px] leading-none opacity  pr-[30px] text-center opacity">
                    All my projects are on my <a href="https://github.com/JoaGabri" target="_blank" className="underline text-purple">GitHub</a>, all are documented and have a step by step how to install and use them. 
            </h1> 
        </div>

        <div className="col-start-1 row-start-2 relative"> 
            <div className='absolute'>
                <img src={cat} className="overflow-hidden h-1/2 w-1/2 opacity" />
            </div>
        </div>
    </div>
   </section>
    </>
  );
};

export default Projects;
