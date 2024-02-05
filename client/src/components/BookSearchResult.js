import { motion, useInView } from 'framer-motion'
import React from 'react'
import AnimatedLink from './AnimatedLink'

export default function BookSearchResult(props) {
    const ref = React.useRef(null)
    const isInView = useInView(ref, { once: true })
    return (
        <motion.div ref={ref} style={{ opacity: isInView ? 1 : 0, transition: "1s all 0.5s", translateY: isInView ? 0 : 30 }} className="w-full flex flex-row items-center justify-start border-b-2 border-black p-8">
            <a href={props.book.volumeInfo.previewLink}><img className="hover:scale-110 transition-all duration-300" src={props.thumbnail}></img></a>

            <div className="ml-[3%] w-full flex flex-col relative py-12">
                <div className="laptop:text-lg text-base font-bold">{props.book.volumeInfo.title}</div>
                <div className="text-zinc-600 laptop:text-base text-sm mt-2">{props.book.volumeInfo.description}</div>
                <div className="flex flex-row absolute bottom-0">
                    <AnimatedLink href={props.book.volumeInfo.previewLink} title="Read More"></AnimatedLink>
                </div>
            </div>
        </motion.div>
    )
}