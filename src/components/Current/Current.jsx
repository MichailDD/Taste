
import styles from "./Current.module.css"
const Current = () => {
    return ( 
        <div className={styles.card}>
            <div className={styles.blok}>
                <span className={styles.text}>Current Bid:</span>
                <div className={styles.descr}>
                    <img className={styles.img} src="/icon10.svg" alt="logo" />
                    <span className={styles.info}>1,5M</span>
                    <span className={styles.price}>(1308.54$)</span>
                </div>
            </div>
            <div className={styles.blok__2}>
            <span className={styles.text}>Auction ending in:</span>
            <div className={styles.hour}>
                <span className={styles.hours}>1 <span>h</span></span>
                <span className={styles.hours}>28 <span>m</span></span>
                <span className={styles.hours}>32 <span>s</span></span>
            </div>
            </div>
            <div className={styles.blok-3}>
                <button className={styles.btn}>Place a bid</button>
            </div>
        </div>
     );
}
 
export default Current;