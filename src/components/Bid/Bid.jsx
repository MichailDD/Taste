import styles from "./Bid.module.css"

const Bid = () => {
    return ( <div className={styles.card}>
            <div className={styles.left}>
                <div className={styles.image}>
                    <img src="/user6.webp" alt="image" />
                </div>
                <div className={styles.text}>
                <span className={styles.title}>Bid placed by 0x6FC0...14A4</span>
                <span className={styles.subtitle}>May 19, 2021 at 2:27pm</span>
                </div>      
            </div>
            <div className={styles.right}>
                <div className={styles.icon}>
                    <img src="/icon10.svg" alt="icon" />
                    <span>1,5M</span>
                </div>
                <div className={styles.price}>
                    <span>(1308.54$)</span>
                </div>
                <div className={styles.link}>
                    <div className={styles.link__bg}>
                    <img src="/icon01.svg" alt="icon" />
                    </div>
                </div>

            </div>
    </div> );
}
 
export default Bid;