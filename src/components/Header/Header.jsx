import styles from "./Header.module.css"

const Header = () => {
    return ( 
        <header className={styles.header}>
            <div className={styles.blok}>
                <div className={styles.blok__img}>
                <a href="#"><img src="/logo.svg" alt="" className={styles.logo}/></a>
                </div>
                <input type="text" placeholder="Search for ..." className={styles.input} />
                <button className={styles.btn}>Connect wallet</button>
            </div>
        </header>
     );
}
 
export default Header;