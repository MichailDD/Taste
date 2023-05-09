import styles from "./Header.module.css"
import { Link } from "react-router-dom";
const Header = () => {
    return ( 
        <header className={styles.header}>
            <div className={styles.blok}>
                <div className={styles.blok__img}>
                <a href="#"><img src="/logo.svg" alt="" className={styles.logo}/></a>
                </div>
                {/* <input type="text" placeholder="Search for ..." className={styles.input}/ > */}
                <div className={styles.input}>
                    <div className={styles.search}>
                    <img src="/icon08.svg" alt="icon" className={styles.img} />
                    <span className={styles.descr}>Search for ...</span>
                    </div>
                <div className={styles.nav}>
                <Link className={styles.nav__link} to={"/"}>Home</Link>
                <Link className={styles.nav__link} to={"/search"}>Search</Link>
                <Link className={styles.nav__link} to={"/artwork"}>Artwork</Link>
                <Link className={styles.nav__link} to={"/main"}>Artwork</Link>
                </div>
                </div>
                <button className={styles.btn}>Connect wallet</button>
                
            </div>
        </header>
     );
}
 
export default Header;

<Link to={"/sea"}><button>Click</button></Link>