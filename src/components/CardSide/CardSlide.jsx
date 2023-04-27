import styles from "./CardSlide.module.css"
const CardSlide = (props) => {
    return ( 
        <div className={styles.card}>
            <div  className={styles.img}>
                <img src={props.img} alt="user" />
            </div>
            <div className={styles.info}>
                <span className={styles.title}>User Name</span>
                <span className={styles.subtitle}>@username</span>
                <span className={styles.price}>24 sales on 32ETH</span>
            </div>
        </div>
     );
}
 
export default CardSlide;