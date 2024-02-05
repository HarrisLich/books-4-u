import React from 'react'
import axios from 'axios'
import BookSwiper from '../components/BookSwiper'
import Navbar from '../components/Navbar'
import { FaArrowDownLong } from "react-icons/fa6"


function Home(){

    const api_key = process.env.React_App_API_KEY

    React.useEffect(()=>{
        axios.get("https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=" + api_key).then((res)=>{
            console.log(res.data.items)
        })
    }, [])

    return(
        <div className="w-full flex flex-col" style={{height: "calc(100vh)"}}>
            <Navbar></Navbar>
            <div className="grid w-full h-full grid-rows-3">
                <div className="row-span-2 w-full h-full flex flex-col items-center justify-center">
                    <h1 className="font-bold text-4xl font-[]">Personal Favorites</h1>
                    <div className="w-[1300px] mt-[4rem]">
                        <BookSwiper></BookSwiper>
                    </div>
                    
                </div>
                <div className="w-full relative h-full flex focus:outline-none items-center justify-center">
                    <div className="input-group">
                        <input id="name" placeholder=' ' type='text'></input>
                        <label for="name">Find a book...</label>
                    </div>
                    <div className="absolute left-50 bottom-2 animate-bounce">
                        <FaArrowDownLong size={30}></FaArrowDownLong>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
