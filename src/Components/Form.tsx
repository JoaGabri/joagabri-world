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


const Form: React.FC = () => {
    useEffect(() => {
        SectionAnimation();
        OpacityAnimation();
     }, []);

  return (
    <>  
    
    <div className="flex justify-center items-center  p-10 h-fit opacity">
  <form>
    <div className="grid grid-cols-1 gap-2">
      <div className="flex space-x-2">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="w-1/2 h-8 bg-transparent  bg-[#1F1F1F] rounded-2xl text-white p-2"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-1/2 h-8 bg-transparent border-black bg-[#1F1F1F] rounded-2xl text-white p-2"
          required
        />
      </div>
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        className="w-full h-8  border-black bg-[#1F1F1F] rounded-2xl text-white p-2"
        required
      />
      <textarea
        name="message"
        className="w-full h-32 border-black border bg-[#1F1F1F] rounded-2xl text-white  leading-none p-2"
        required
      />

      <input
      type="submit"
      value="send"
      className=" border-black border bg-[#1F1F1F] rounded-2xl text-white  leading-none p-2"
       />
    </div>
    
  </form>
</div>
    </>
  );
};

export default Form;
