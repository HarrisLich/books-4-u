import { motion, useScroll, useSpring, useAnimationControls } from "framer-motion"
import React from "react"
import NYTimesSwiper from "./NYTimesSwiper"
import BookSwiper from "./BookSwiper"
import { useLocation } from "react-router-dom"

function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1) {
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}

function unfade(element) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1) {
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}

const underlineVariants = {
    rest: {
        width: 0,
        transition: {
            duration: 0.5
        }
    },
    animate: {
        width: "100%",
        transition: {
            duration: 0.5,
            delay: 0.5
        },
        backgroundColor: "pink"
    }
}

export default function Navbar() {

    const [active, setActive] = React.useState(null)
    const location = useLocation()
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const favoritesControls = useAnimationControls()
    const nytControls = useAnimationControls()

    React.useEffect(() => {
        favoritesControls.start(underlineVariants.animate)
    }, [])

    const onPersonalFavorites = () => {
        const swiperContainer = document.getElementById("swiperContainer")
        const toHide = document.getElementById("NYTSwiperContainer")
        const swiperTitle = document.getElementById("swiperTitle")
        const toHideTitle = document.getElementById("NYTSwiperTitle")
        //add new swiper
        fade(toHide)
        unfade(swiperContainer)
    
        //change inner html of swiper title
        fade(toHideTitle)
        unfade(swiperTitle)

        favoritesControls.start(underlineVariants.animate)
        nytControls.start(underlineVariants.rest)
    }
    
    const onNYTimesBS = () => {
        const swiperContainer = document.getElementById("NYTSwiperContainer")
        const toHide = document.getElementById("swiperContainer")
        const swiperTitle = document.getElementById("NYTSwiperTitle")
        const toHideTitle = document.getElementById("swiperTitle")
        //add new swiper
        fade(toHide)
        unfade(swiperContainer)
        //change inner html of swiper title
        fade(toHideTitle)
        unfade(swiperTitle)
        //
        favoritesControls.start(underlineVariants.rest)
        nytControls.start(underlineVariants.animate)
        
    }

    return (
        <>
            {location.pathname === "/search" ? <motion.div style={{ scaleX }} className="top-0 w-full left-0 fixed h-[10px] bg-pink-300"></motion.div> : null}
            <div className="w-full h-[5rem] grid grid-cols-3 border-b-2 border-black">
                <div className="w-full h-full flex flex-row items-center justify-center">
                    <a href="/" className="font-bold font-[sans] text-xl transition-all duration-300 hover:text-pink-300/80">Books4U</a>
                </div>
                {location.pathname === "/" ?
                    <div className="w-full h-full flex flex-row items-center justify-center gap-4">
                        <div className="relative">
                            <button onClick={() => onPersonalFavorites()}>Personal Favorites</button>
                            <motion.div initial={underlineVariants.rest} animate={favoritesControls} className="h-[2px] w-full absolute bottom-0 bg-black"></motion.div>
                        </div>
                        <div className="relative">
                            <button onClick={() => onNYTimesBS()}>NY Times Bestsellers</button>
                            <motion.div initial={underlineVariants.rest} animate={nytControls} className="h-[2px] w-full absolute bottom-0 bg-black"></motion.div>
                        </div>

                        <a>Google Bookshelf Finder</a>
                    </div> : null}

                <div></div>
            </div>
        </>
    )
}