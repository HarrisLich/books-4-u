import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper/modules';
import React from 'react';
import axios from 'axios'



export default function NYTimesSwiper() {

    const [books, setBooks] = React.useState(null)

    const api_key = process.env.React_App_API_KEY

    React.useEffect(() => {
        axios.get("https://www.googleapis.com/books/v1/users/117522004192189783614/bookshelves/1015/volumes?key=" + api_key + "&maxResults=40").then((res) => {
            setBooks(res.data.items)
        })
    }, [])

    return (
        <Swiper
            className="mt-[50px]"
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
            {books ? books.map((e) => {
                let thumbnail = null
                try {
                    thumbnail = e.volumeInfo.imageLinks.thumbnail ? e.volumeInfo.imageLinks.thumbnail : null
                } catch (err) {
                    return
                }
                return (
                    <SwiperSlide>
                        <div className="w-full h-full">
                            <a href={e.volumeInfo.infoLink} className="w-full h-full" >
                                <img className="w-full" src={thumbnail}></img>
                            </a>
                        </div>
                    </SwiperSlide>
                )
            }) : null}

        </Swiper>
    )
}