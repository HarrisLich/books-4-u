import { motion } from "framer-motion"
export default function Navbar() {
    return (
        <div className="w-full h-[5rem] grid grid-cols-3 border-b-2 border-zinc-100">
            <div className="w-full h-full flex flex-row items-center justify-center">
                <a href="/" className="font-bold font-[sans] text-xl transition-all duration-500 hover:text-[#40E0D0]">Books4U</a>
            </div>
            <div></div>
            <div></div>
        </div>
    )
}