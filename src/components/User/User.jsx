import styles from  "./User.module.css"
import Followers from "../Followers/Followers";
const User = () => {
    return ( 
        <div className={styles.blok}>
                <div className={styles.blok__left}>
                    <img src="/user1.webp" alt="User" />
                    <div className={styles.blok__text}>
                        <h1 className={styles.title}>
                        User Name
                        </h1>
                        <h2 className={styles.subtitle}>
                        @username
                        </h2>
                    </div>
                </div>
                <div className={styles.blok__right}>
                <Followers/>
                </div>  
        </div>
     );
}
 
export default User;