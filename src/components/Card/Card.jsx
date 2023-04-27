import styles from "./Card.module.css"
import UserCard from "../UserCard/UserCard";
const Card = ({backgroundImage}) => {
    return ( 
        <div className={styles.card}>
             <div  className={styles.cart__top} style={{backgroundImage:`url(${backgroundImage})`}} >
                <UserCard src="/user1-1.webp"/>
             </div>
             <div className={styles.card__info}>
                <span className={styles.title}>WFH - art name</span>
             <div className={styles.about}>
             <div className={styles.left}>
                    <span className={styles.sold}>Sold for:</span>
                    <span  className={styles.sold}>Ending in:</span>
                </div>
                <div className={styles.right}>
                    <div className={styles.image}>
                        <img src="/card-logo.svg" alt="card-logo" />
                        <span className={styles.price}>1,5M</span>
                    </div>
                    <div className={styles.hours}>
                        <span className={styles.hour}>05h</span>
                        <span className={styles.hour}>02m</span>
                        <span className={styles.hour}>41s</span>
                    </div>
                </div>
             </div>
             </div>
        </div>
     );
}
 
export default Card;