import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// this is a simple opacity animation

function OpacityAnimation() {
  const opacities = gsap.utils.toArray(".opacity");
  opacities.forEach((opacity) => {
    gsap.set(opacity, { opacity: 0 });

    gsap.to(opacity, { duration: 2, 
        opacity: 1,
        scrub:true,
        scrollTrigger: {
          trigger: opacity,         
        }
     });
  });
}

export default OpacityAnimation;
