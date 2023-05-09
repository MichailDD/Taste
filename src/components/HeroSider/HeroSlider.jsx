
import './HeroSlider.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Pagination } from "swiper";
import "swiper/css/effect-cards";
import HeroSlide from '../HeroSlide/HeroSlide';
export function HeroSlider() {

	// let listSlides = props.slides.map((elem, index) => (
	// 	<SwiperSlide key={index}>
	// 		<img src={elem.img} alt={elem.title} loading="lazy" />
	// 	</SwiperSlide>
	// ))

	return (<>
		<Swiper
			effect={"cards"}
			cardsEffect={{
				rotate: false,
				perSlideOffset: 29,
			}}
			pagination={{
				clickable: true
			}}
			modules={[EffectCards, Pagination]}
			className="hero-slider"
		>
			<SwiperSlide>
                <HeroSlide />
            </SwiperSlide>
            <SwiperSlide>
                <HeroSlide/>
            </SwiperSlide>
            <SwiperSlide>
                <HeroSlide />
            </SwiperSlide>
            <SwiperSlide>
                <HeroSlide />
            </SwiperSlide>
		</Swiper>
	</>);
}
export default HeroSlider