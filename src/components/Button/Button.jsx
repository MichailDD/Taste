import styles from "./Button.module.css"
const Button = (props) => {
    return ( 
        <button className={styles.btn} >
            {props.text}
            <img src="/icon09.svg" alt="arrow" />
        </button>
     );
}
 
export default Button;