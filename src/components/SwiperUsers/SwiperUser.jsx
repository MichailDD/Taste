import { Swiper, SwiperSlide } from 'swiper/react';
import CardSlide from '../CardSide/CardSlide';
import "swiper/css"
import styles from "./SwiperUser.module.css"


const SwiperUser = () => {
    return ( 
        <div className={styles.wrapper} >
        <Swiper
        spaceBetween={16}
        slidesPerView={5.1}
        >
            <SwiperSlide>
                <CardSlide img="/user1-2.webp"/>
            </SwiperSlide>
            <SwiperSlide>
                <CardSlide img="/user2.webp"/>
            </SwiperSlide>
            <SwiperSlide>
                <CardSlide img="/user3.webp"/>
            </SwiperSlide>
            <SwiperSlide>
                <CardSlide img="/user4.webp"/>
            </SwiperSlide>
            <SwiperSlide>
                <CardSlide img="/user5.webp"/>
            </SwiperSlide>
            <SwiperSlide>
                <CardSlide img="/user2.webp"/>
            </SwiperSlide>
        </Swiper>

        </div>
       
     );
}
 
export default SwiperUser;