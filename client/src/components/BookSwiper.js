import { Swiper, SwiperSlide } from 'swiper/react';
import f451 from '../imgs/fahrenheit451.jpg'
import fInOurStars from '../imgs/faultinourstars.jpg'
import harrpotter from '../imgs/harrypotter.jpg'
import thealchemist from '../imgs/thealchemist.jpg'
import greatgatsby from '../imgs/thegreatgatsby.jpg'
import outsiders from '../imgs/theoutsiders.jpg'
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper/modules';

const books = [
    {
        img: f451,
        about: "https://www.google.com/books/edition/Fahrenheit_451/y3CyRurE7P4C?hl=en&gbpv=0"
    },
    {
        img: fInOurStars,
        about: "https://www.google.com/books/edition/The_Fault_in_Our_Stars/UzqVUdEtLDwC?hl=en&gbpv=1&dq=fault+in+our+stars&printsec=frontcover"
    },
    {
        img: harrpotter,
        about: "https://www.google.com/books/edition/Harry_Potter_and_the_Sorcerer_s_Stone/wrOQLV6xB-wC?hl=en&gbpv=1&dq=harry+potter+sorcerer%27s+stone&printsec=frontcover"
    },
    {
        img: thealchemist,
        about: "https://www.google.com/books/edition/The_Alchemist/FzVjBgAAQBAJ?hl=en&gbpv=1&dq=the+alchemist&printsec=frontcover"
    },
    {
        img: greatgatsby,
        about: "https://www.google.com/books/edition/The_Great_Gatsby/iXn5U2IzVH0C?hl=en&gbpv=1&dq=the+great+gatsby&printsec=frontcover"
    },
    {
        img: outsiders,
        about: "https://www.google.com/books/edition/The_Outsiders/ha6GIYze5lEC?hl=en&gbpv=1&dq=the+outsiders&printsec=frontcover"
    }
]

export default function BookSwiper() {
    const imgs = [f451, fInOurStars, harrpotter, thealchemist, greatgatsby, outsiders]
    return (
        <Swiper
            modules={[A11y, Pagination, EffectCoverflow]}
            spaceBetween={5}
            slidesPerView={5}
            loop={true}
            tabIndex={0}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            effect='coverflow'
            coverflowEffect={{
                
                slideShadows: false
            }}
            id="personalFavorites">
            {books.map((e) => {
                return (
                    <SwiperSlide>
                        <div className="w-full h-full">
                            <a className="w-full h-full" href={e.about}>
                                <img className="w-full" src={e.img}></img>
                            </a>
                        </div>
                    </SwiperSlide>
                )
            })}

        </Swiper>
    )
}