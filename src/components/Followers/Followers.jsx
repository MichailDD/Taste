import Links from '../Links/Links';
import styles from './Followers.module.css'
const Followers = () => {
    return ( 
       <div className={styles.info}>
            <div  className={styles.followers}>
            <span className={styles.number}>234</span>
            <p className={styles.descr}>Followers</p>
        </div>
        <div  className={styles.followers}>
            <span className={styles.number}>15</span>
            <p className={styles.descr}>Following</p>
        </div>
        <button className={styles.btn}>Follow</button>
        <div className={styles.icons}>
            <Links/>
        </div>
       </div>
     );
}
 
export default Followers;