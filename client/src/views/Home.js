import React from 'react'
import axios from 'axios'
import BookSwiper from '../components/BookSwiper'
import Navbar from '../components/Navbar'
import { FaArrowDownLong } from "react-icons/fa6"
import { useNavigate } from 'react-router-dom'
import NYTimesSwiper from '../components/NYTimesSwiper'
import {motion, useAnimationControls} from 'framer-motion'


function Home() {

    const api_key = process.env.React_App_API_KEY
    const navigate = useNavigate()

    const [searchQuery, setSearchQuery] = React.useState(null)


    return (
        <div className="w-full flex flex-col" style={{ height: "calc(100vh)" }}>
            <Navbar></Navbar>
            <div className="grid w-full h-full grid-rows-3">
                <div className="row-span-2 w-full h-full flex flex-col relative items-center justify-center transition-all duration-300 ease-in">
                    <motion.div id="swiperTitle" className="font-bold text-4xl absolute top-10">Personal Favorites</motion.div>
                    <motion.div id="NYTSwiperTitle" className="font-bold text-4xl absolute top-10" style={{opacity: 0}}>NY Times Bestsellers</motion.div>
                    <div id="swiperContainer" className="large:w-[1200px] desktop:w-[800px] laptop:w-[800px] tablet:w-[500px] w-[1200px] mt-[4rem] absolute">
                        <BookSwiper/>
                    </div>
                    <div id="NYTSwiperContainer" className="mt-[4rem] absolute large:w-[1200px] desktop:w-[800px] laptop:w-[800px] tablet:w-[500px] w-[1200px]" style={{opacity: 0}}>
                        <NYTimesSwiper></NYTimesSwiper>
                    </div>

                </div>
                <div className="w-full relative h-full flex focus:outline-none items-center justify-center">
                    <div className="input-group">
                        <input onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                //send post request to google books api with search query
                                axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}+intitle&maxResults=40&printType=books&key=` + api_key).then((res) => {
                                    navigate("/search", { state: { items: res.data.items } })
                                })
                            }
                        }} onChange={(e) => setSearchQuery(e.target.value)} id="name" placeholder=' ' type='text'></input>
                        <label for="name">Find a book...</label>
                    </div>
                    <div className="absolute left-50 bottom-2 animate-bounce">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
