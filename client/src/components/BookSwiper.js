import { Swiper, SwiperSlide } from 'swiper/react';
import f451 from '../imgs/fahrenheit451.jpg'
import fInOurStars from '../imgs/faultinourstars.jpg'
import harrpotter from '../imgs/harrypotter.jpg'
import thealchemist from '../imgs/thealchemist.jpg'
import greatgatsby from '../imgs/thegreatgatsby.jpg'
import outsiders from '../imgs/theoutsiders.jpg'
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper/modules';

export default function BookSwiper() {
    const imgs = [f451, fInOurStars, harrpotter, thealchemist, greatgatsby, outsiders]
    return (
        <Swiper
            modules={[A11y, Pagination, EffectCoverflow]}
            spaceBetween={5}
            slidesPerView={5}
            tabIndex={0}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            effect='coverflow'
            coverflowEffect={{
                rotate: 30,
                slideShadows: false
            }}>
            {imgs.map((e) => {
                return (
                    <SwiperSlide>
                        <div className="w-full h-full">
                            <a className="w-full h-full" href="/">
                                <img src={e}></img>
                            </a>
                        </div>
                    </SwiperSlide>
                )
            })}

        </Swiper>
    )
}