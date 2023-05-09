import styles from "./Links.module.css"
const Links = () => {
    return ( 
        <div className={styles.links}>
            <div className={styles.blok}>
                <img src="/icon01.svg" alt="icon" />
            </div>
            <div className={styles.blok}>
                <img src="/icon02.svg" alt="icon" />
            </div>
            <div className={styles.blok}>
                <img src="/icon03.svg" alt="icon" />
            </div>
        </div>
     );
}
 
export default Links;