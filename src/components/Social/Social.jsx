import  styles from './Social.module.css'

const Social = () => {
    return ( 
        <div className={styles.social__blok}>
            <div className={styles.social__item}>
                <img src="/icon04.svg" alt="Twitch" />
                <a className={styles.link} href="#">Twitch</a>
            </div>
            <div className={styles.social__item}>
            <img src="/icon05.svg" alt="Instagram" />
                <a className={styles.link} href="#">Instagram</a>
            </div>
            <div className={styles.social__item}>
            <img src="/icon06.svg" alt="Twitter" />
                <a className={styles.link} href="#">Twitter</a>
            </div>
            <div className={styles.social__item}>
            <img src="/icon07.svg" alt="Onlyfans" />
            <a className={styles.link} href="#">Onlyfans</a>
            </div>
        </div>
     );
}
 
export default Social;