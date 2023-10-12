import CloudWord from "../assets/animations/CloudOfWords/CloudWord.jsx";
import styles from '../styles.js';
import { Constants }  from '../Constants/Constants.jsx'

const Skills = () => {
  return (
<>
<section className={`${styles.HorizontalGrid1x1} section`} id="skills">
    <div className={styles.FlexCenter}>
      <h1 className="opacity pl-[30px]">
        {Constants.Skill.p1}
      </h1>

    </div>

    <div className={`${styles.FlexCenter} flex-col opacity`} >
      <h1 className="opacity text-[90px] leading-none">
        Skills<span className="text-green">!</span>
        <div className={`${styles.Border} border text-green`}></div>
      </h1>
      <CloudWord/>
    </div>


</section>
</>
  );
};

export default Skills;
