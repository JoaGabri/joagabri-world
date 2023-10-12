import  { Constants } from '../Constants/Constants.jsx'
import styles from '../styles.js'
const Final = () => {

  return (
<>  
<section className={`${styles.FlexCenter} h-screen section`}>
  <div className={styles.FlexCenter}>
    <h1 className='w-[800px] opacity'>
      {Constants.Final.p1}
    </h1>
  </div>
</section>

</>
  );
};

export default Final;
