import styles from  "./User.module.css"
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
        </div>
     );
}
 
export default User;