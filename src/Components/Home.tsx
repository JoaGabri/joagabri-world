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
import Marquee from "../assets/animations/Marquee";



const Home: React.FC = () => {
  useEffect(() => {

     SectionAnimation();
     OpacityAnimation();
  }, []);

  return (
    <>
      <div className="text-xl" id="home">
        <section className="section flex items-center justify-center">
          <h1 className="opacity">
              Hi<span className="text-blue ">.</span>
          </h1>
        </section>

        <section className="section flex items-center justify-center">
          <h1 className='opacity '>
            I am  Joa<span className="text-blue">!</span></h1>
        </section>

          <section className="section flex items-center justify-center">
            <h1 className="text-center opacity leading-none"> A<br/>DEV <span className="text-blue">&</span> TECH ENTHUSIAST</h1>
          </section>

        <section className="section grid grid-cols-1 place-items-center gap-0">
          <h1 className="text-lg">also i am too</h1>
          <Marquee />
        </section>
      </div>
    </>
  );
};

export default Home;
