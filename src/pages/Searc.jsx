import Header from "../components/Header/Header";
import Button from "../components/Button/Button"
import GalaryTop from '../components/GalaryTop/GalaryTop'
import SwiperUser from "../components/SwiperUsers/SwiperUser";
import styles from "./Searc.module.css"
const Searc = () => {
    return ( 
        <div>
            
                <Header/>
                <div className={styles.container}>  
                <div className={styles.buttons}>
                <Button text="Recently added"/>
                <Button text="Auctions"/>
                </div>
                   <div className={styles.galary}>
                   <GalaryTop/>
                   </div>
                   <div className={styles.btn}>
                        <button className={styles.btn__bg}>
                       <span className={styles.text__btn}>Show all</span>
                        </button>
                   </div>
                 <div className={styles.swiper}>
                 <SwiperUser/>
                 </div>
        
                    </div>
        </div>
     );
}
 
export default Searc;