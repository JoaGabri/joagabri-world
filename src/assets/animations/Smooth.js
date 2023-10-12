import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

//this is a animation to do the smooth section change

function SmoothAnimation() {
    const containers = gsap.utils.toArray(".section");
    containers.forEach((container) => {
        gsap.to(container,{
            autoAlpha: 0,
            ease: "power.in",
            scrollTrigger: {
                trigger: container,
                scrub: true,
                start: 'center top',
                end: 'bottom end'
                
            }
        })
    })
}



export default SmoothAnimation;