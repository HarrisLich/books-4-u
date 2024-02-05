import { motion, useInView } from 'framer-motion'
import React from 'react'
import { useLocation } from 'react-router-dom'
import BookSearchResult from '../components/BookSearchResult';
import Navbar from '../components/Navbar';

export default function SearchResults() {
    let location = useLocation();

    const [results, setResults] = React.useState(null);

    React.useEffect(() => {
        setResults(location.state.items)
    }, [])

    return (
        <div className="w-full h-full flex flex-col">
            <Navbar/>
            <div className="w-full flex items-center justify-center text-4xl mt-6">
                Results
            </div>
            <div className="w-full h-full flex flex-col mt-8">
                {results ? results.map((book) => {
                    let thumbnail = null
                    try {
                        thumbnail = book.volumeInfo.imageLinks.thumbnail ? book.volumeInfo.imageLinks.thumbnail : null
                    } catch (err) {
                        return
                    }

                    if (thumbnail) {
                        return (
                            <BookSearchResult book={book} thumbnail={thumbnail}></BookSearchResult>

                        )
                    }



                }) : null}
            </div>

        </div>
    )

}