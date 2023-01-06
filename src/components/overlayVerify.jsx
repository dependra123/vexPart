import React from 'react';
import { motion } from 'framer-motion';
function OverlayVerify(props) {
    
    return (
        <div>
            <form className='logInVerify'>
                <input type="text" placeholder='Username'/>
                <input type="password" placeholder='Password'/>
                <motion.button className='material-symbols-outlined' style={{background:'green',scale:.75, borderRadius:90}} whileHover={{scale:1.1}} whileTap={{scale:0.85}}>done</motion.button>
            </form>
        </div>
    );
}

export default OverlayVerify;