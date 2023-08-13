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
import Form from "./Form";

const Contact: React.FC = () => {
    useEffect(() => {
        SectionAnimation();
        OpacityAnimation();
     }, []);

  return (
    <>  

    <section className="section" id="contact">
    <h1 className="opacity text-center text-xl leading-none h-fit pb-1">
      Contact<span className="text-blue">me</span>
    </h1>
    
    <h1 className="opacity text-center text-[30px] leading-none">
        my <a className="underline text-blue" href="https://www.linkedin.com/in/joaogabrielrocha/?locale=en_US" target="_blank">LinkedIn</a> is in the navigation bar, if you want to connect with me <br/> or want to send me a message you can call me there.
        You can also contact me here,<br/> <span className="text-blue">do not hesitate to send me something if there is any reason</span>, <br/>as soon as I can I will answer you.
    </h1>
    <div>
        <Form />
    </div>    

    </section>
    </>
  );
};

export default Contact;
