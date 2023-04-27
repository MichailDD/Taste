
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
            <div className={styles.icon}>
                <img src="/icon01.svg" alt="icon" />
            </div>
            <div className={styles.icon}>
                <img src="/icon02.svg" alt="icon" />
            </div>
            <div className={styles.icon}>
                <img src="/icon03.svg" alt="icon" />
            </div>
        </div>
       </div>
     );
}
 
export default Followers;