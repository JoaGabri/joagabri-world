import Marquee from "../assets/animations/Marquee/Marquee.tsx";
import styles from '../styles.js';

const Home = () => {

return (
<>
<div className="text-xl" id="home">
  <section className={`${styles.FlexCenter} section`}>
    <h1 className="opacity">
      Oi<span className="text-blue ">.</span>
    </h1>
  </section>

  <section className={`${styles.FlexCenter} section`}>
    <h1 className='opacity'>
      Eu sou o Joa<span className="text-blue">!</span>
    </h1>
  </section>

  <section className={`${styles.FlexCenter} section leading-none text-center`}>
    <h1 className="opacity align-top">
      <span>Um</span><br/>
      Desenvolvedor<br/>
      <span className="text-blue">& <br/></span>
      tech fan
    </h1>
  </section>

  <section className={`${styles.VerticalGrid1x1} section place-items-center`} >
    <h1 className="text-lg">E eu também sou</h1>
      <Marquee />
    </section>
</div>
</>
  );
};

export default Home;
