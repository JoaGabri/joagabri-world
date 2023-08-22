  import React, { useEffect } from "react";
  import "./Marquee.css";
  import { gsap } from "gsap";  
  import { ScrollTrigger } from "gsap/ScrollTrigger"; 
  gsap.registerPlugin(ScrollTrigger);

  // @ts-ignore
import SectionAnimation from "./SectionsAnimation";


  const MarqueeText: React.FC = () => {
    useEffect(() => {
      SectionAnimation();

   }, []);
    return (

      <div className="marquee-horizontal">
      <div className="track-horizontal">
        <section className="marquee-text ">CAT FAN | MAYBE A PHOTOGRAPHER | CORINTHIANO</section>
        <div className="marquee-text ">PHOTO EDITOR | VIDEO EDITOR | A PERSONA</div>
        <div className="marquee-text ">BON VIVANT | AN IDEA | MESSI &amp; KENDRICK FANBOY</div>
        <div className="marquee-text ">CAT FAN | SOMETIMES A PHOTOGRAPHER | CORINTHIANO</div>
        <div className="marquee-text ">PHOTO EDITOR | VIDEO EDITOR | AESTHETIC</div>
        <div className="marquee-text ">BON VIVANT | AN IDEA | MESSI &amp; KENDRICK FANBOY</div>
      </div>
    </div>
    );
  };

  export default MarqueeText;
