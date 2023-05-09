import Header from "../components/Header/Header";
import User from "../components/User/User";
import Social from "../components/Social/Social";
import Description from "../components/Description/Description";
import Collected from "../components/Collected/Collected";
import Galary from "../components/Galary/Galary";
import Followers from "../components/Followers/Followers";
import styles from "./Creator.module.css"
const Creator = () => {
    return ( 
        <div>
     <div>
      <Header/>
      <div className={styles.blok} >
         <User/>
         <Followers/>

      </div>
      <Social/>
      <Description/>
      <Collected/>
      <Galary/>
         </div>
        </div>
     );
}
 
export default Creator;