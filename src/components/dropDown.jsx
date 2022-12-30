import React from 'react';
import { motion } from 'framer-motion';
import './dropDown.css';

const DropDown = ({trigger, open, options}) => {
    const optionSize = options.length;
    
    return (
        // use framer motion to animate the drop down
        <motion.div animate={open?{y:optionSize*-4}:{y:0}} transition={{ delayChildren:1}} className="dropContainer" >

            {trigger}
            {open ? (
                // when clicked, the options will slide down frop the trigger
                <ul >
                    {options.map((option,index) => (
                        <motion.li key={index} style={{y:0, scale:0}} animate ={{y:15, x:index-10, opacity: 100, scale:1}} transition={{duration:0.25}}>{option}</motion.li>
                    ))}
                </ul>
            ): null}
        </motion.div>
    );
}

export default DropDown;