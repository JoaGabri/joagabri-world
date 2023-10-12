import box from "../assets/images/BOX.svg"
import '../index.css'
import styles from '../styles.js'
import  { Constants } from '../Constants/Constants.jsx'

const AboutMe = () => {
  return (
<>
<section className={`${styles.HorizontalGrid1x1} section`} id="about">
   <div className={styles.FlexCenter}> 
   {/* left side */}
      <h1 className={`${styles.TextLine} opacity text-[110px]`}>
        Sobre<br/>Mim<span className="text-blue">!</span>
        <div className={`${styles.Border} border-blue`}></div>
      </h1>
  </div>
  
  <div className={styles.FlexCenter}>
    {/* right side */}
    <h1 className="text-[20px] opacity pr-[30px]">
    {Constants.About.p1}
    <br/> <br/>
    {Constants.About.p2}
    </h1>

  </div>
</section>

<section className="section">
    <h1 className="opacity text-center text-[60px] leading-none pt-20 pb-20">
      Algumas vezes eu tento 
    </h1>

    <div className={styles.FlexCenter}>
  <img src={box} alt="Legend SVG" className="opacity text-center h-[350px] w-[350px]" />
  </div>
</section>
    </>
  );
};

export default AboutMe;
