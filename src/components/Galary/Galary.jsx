import GalaryTop from "../GalaryTop/GalaryTop";
import GalatyBottom from "../GalaryBottom/GalaryBottom";
import styles from './Galary.module.css'
const Galary = () => {
    return (  
        <div className={styles.galary} >
            <GalaryTop/>
            <GalatyBottom/>
        </div>
     );
}
 
export default Galary;