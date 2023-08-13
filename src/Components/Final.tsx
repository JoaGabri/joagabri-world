import React, { useEffect } from "react";

// GSAP ANIMATION IMPORT
import { gsap } from "gsap";  
import { ScrollTrigger } from "gsap/ScrollTrigger"; 
gsap.registerPlugin(ScrollTrigger);


// @ts-ignore
import SectionAnimation from "../assets/animations/SectionsAnimation";
// @ts-ignore
import OpacityAnimation from "../assets/animations/OpacityAnimation";
import '../index.css'

const Final: React.FC = () => {
    useEffect(() => {
        SectionAnimation();
        OpacityAnimation();
     }, []);

  return (
    <>  
    <section className="section">
    <h1 className="opacity text-center text-xl leading-none h-fit pb-5">
      Final<span className="text-blue">considerations</span>
    </h1>
    <div className="">
        <h1 className="opacity text-center text-[30px] leading-none">
        Before I talk a little about this project, I wanted to leave a simple salute to all my friends who inspire me to express myself in my own way, you are all <span className="text-blue">references.</span><br/>
        <br/>
        Finally, this portfolio was entirely made by me, from the assembly, design, stylization and programming, I used <span className="text-yellow">Figma</span> to help me in the aesthetic part and in the programming part I used, <span className="text-blue">Typescript, React, GSAP, TagCanvas and TailwindCSS</span>      
        </h1>
    </div>
    </section>
    </>
  );
};

export default Final;
