import cat from "../assets/images/image 2.png"
import  { Constants } from '../Constants/Constants.jsx'
import styles from '../styles.js'


const Projects = () => {
  return (
    <>  
    <section className="section">
        <div className={ `${styles.Grid2x2} gap-2 h-[100vh]`}>
            <div className= {`${styles.FlexCenter} opacity`} >
                <h1 className=" text-xl leading-none">

                    Projetos<span className="text-purple">!</span>
                    <div className={`${styles.Border} border-purple`}></div>
                </h1>
            </div>



        <div className="col-start-2 row-start-2 flex items-start justify-start">

            <h1 className="text-[30px] leading-none opacity  pr-[30px] text-center opacity">
                    {Constants.Projects.p1} 
            </h1> 
        </div>

        <div className="col-start-1 row-start-2 relative"> 
            <div className='absolute'>
                <img src={cat} className="overflow-hidden h-1/2 w-1/2 opacity" />
            </div>
        </div>
    </div>
   </section>
    </>
  );
};

export default Projects;
