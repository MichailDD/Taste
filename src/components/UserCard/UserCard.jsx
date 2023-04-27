import styles from "./UserCard.module.css"
const UserCard = () => {
    return ( 
        <div className={styles.blok} >
            <img src="/user1-1.webp" alt="user_icon" className={styles.img} />
            <div className={styles.text}>
                <span className={styles.title}>User Name</span>
                <span className={styles.subtitle}>@username</span>
            </div>
        </div>
     );
}
 
export default UserCard;