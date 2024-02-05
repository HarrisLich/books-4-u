import {useAnimationControls, motion} from "framer-motion"
import { IoIosArrowRoundForward } from "react-icons/io";

const buttonVariants = {
    animate: {
        translateX: 0,
        transition: {
            duration: 1
        }
    },
    rest:{
        translateX: -65,
        transition: {
            duration: 1
        }
    }
}

const linkVariants = {
    rest: {
        translateX: -15,
        transition: {
            duration: 1
        }
    },
    animate: {
        translateX: 0,
        transition:{
            druation: 1
        }
    }
}

const arrowVariants = {
    rest: {
        translateX: -15,
        transition: {
            duration: 1
        }
    },
    animate:{
        translateX: 0,
        transition: {
            duration: 1
        }
    }
    

}

function AnimatedLink(props){
    const buttonControl = useAnimationControls()
    const linkControl = useAnimationControls()
    const arrowControl = useAnimationControls()
    return(
        <motion.div className="relative flex flex-row items-center overflow-hidden" onHoverEnd={()=> {
            buttonControl.start(buttonVariants.rest)
            linkControl.start(linkVariants.rest)
            arrowControl.start(arrowVariants.rest)
            }
        }
         
            onHoverStart={()=> {
                buttonControl.start(buttonVariants.animate)
                linkControl.start(linkVariants.animate)
                arrowControl.start(arrowVariants.animate)
                }}>
                <motion.div className="" animate={arrowControl} initial={arrowVariants.rest}>
                    <IoIosArrowRoundForward></IoIosArrowRoundForward>
                </motion.div>
                <motion.a animate={linkControl} initial={linkVariants.rest} href={props.href}>{props.title}</motion.a>
                <motion.div className="w-full h-[1px] bg-black absolute bottom-0" initial={{translateX: -65}} animate={buttonControl}></motion.div>
            </motion.div>
    )
}

export default AnimatedLink