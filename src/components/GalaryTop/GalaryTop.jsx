import Card from "../Card/Card";
import styles from "./GalaryTop.module.css"
const GalaryTop = () => {
    return ( 
        <div className={styles.galary__top} >
           <Card backgroundImage="/card1.webp"/>
           <Card backgroundImage="/card2.webp"/>
           <Card backgroundImage="/card3.webp"/>
           <Card backgroundImage="/card4.webp"/>
        </div>
     );
}
 
export default GalaryTop;