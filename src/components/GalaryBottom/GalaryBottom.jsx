import styles from "./GalaryBottom.module.css"
import Card from "../Card/Card";
const GalatyBottom = () => {
    return ( 
        <div className={styles.galary__bottom}>
             <Card backgroundImage="/card5.webp"/>
             <Card backgroundImage="/card6.webp"/>
             <Card backgroundImage="/card7.webp"/>
             <Card backgroundImage="/card8.webp"/>
        </div>
     );
}
 
export default GalatyBottom;