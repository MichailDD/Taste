import styles from "./Atwork.module.css"
import Header from "../components/Header/Header";
import Current from "../components/Current/Current";
import User from "../components/User/User"
import Links from "../components/Links/Links";
import Bid from "../components/Bid/Bid";
import Galary from "../components/Galary/Galary"
const Artwork = () => {
    return ( 
        <div className={styles.atwork}>
            <Header/>
            <div className={styles.picture}>
            <img src="/pic1.webp" alt="" />
            </div>
            <div className={styles.current}>
                <Current/>
            </div>
            <div className={styles.information}>
                <div className={styles.left}>
                    <div className={styles.user}>
                        <User/>
                    </div>
                    <h1 className={styles.title}>
                    WFH - art name
                    </h1>
                    <div className={styles.span__blok}>
                    <span className={styles.span}><span>Сopy:</span> 2 of 10</span>
                    </div>
                    <div className={styles.text__blok}>
                        <p className={styles.desrc}><span>Description:</span> The iconic meme that became a viral Internet sensation and an indispensable part of the gachimuchi music genre. This was taken when I was very young and in my full `performance` attire. That part of me now `lives` on platforms like Twitch, YouTube, VK (ВКонта́кте), and Bilibili (B 站). The iconic meme that became a viral Internet sensation and an indispensable part of the gachimuchi music genre. This was taken when I was very young and in my full `performance` attire. That part of me now `lives` on platforms like Twitch, YouTube, VK (ВКонта́кте), and Bilibili (B 站).</p>
                    </div>
                    <div className={styles.link}>
                        <Links/>
                    </div>
                </div>
                <div className={styles.right}>
                <h2 className={styles.subtitle}>Activity</h2>
                <div className={styles.list}>
                <Bid/>
                <Bid/>
                <Bid/>
                <Bid/>
                <Bid/>
                <Bid/>
                </div>

                </div>
                
            </div>
            <h3 className={styles.works}>Feature works</h3>
            <div className={styles.galary}>
                <Galary/>
            </div>
        </div>
     );
}
 
export default Artwork;