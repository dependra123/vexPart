import React,{useRef} from 'react';

import { motion } from 'framer-motion';



const  signOutInput= (index, setShowVerfiy, setVerfiyWhich, setData) => {
    const input1Ref = useRef(null);
    const input2Ref = useRef(null);
    const input3Ref = useRef(null);
    const input4Ref = useRef(null);

    let data = {
        partName: '',
        partSize: '',
        partAmount: '',
        initials: ''
    }
    return (
        
            <>
            <motion.form className="signOut" key={index}>
                <input type="text" placeholder="Part Name" ref={input1Ref} />
                <input type="text" placeholder="Part Size "ref={input2Ref}/>
                <input type="text" placeholder="Part Amount" ref={input3Ref} />
                <input type="text" placeholder="Initials" ref={input4Ref}/>
                <motion.button className="material-symbols-outlined" onClick={(e) => {
                    e.preventDefault();
                    setShowVerfiy();
                    setVerfiyWhich(index);
                    data.partName = input1Ref.current.value;
                    data.partSize = input2Ref.current.value;
                    data.partAmount = input3Ref.current.value;
                    data.initials = input4Ref.current.value;
                    setData(data);


                 }} style={{background:'green',scale:.75, borderRadius:90}} whileHover={{scale:1.1}} whileTap={{scale:0.85}}>
                    done
                </motion.button>
                
            </motion.form>  
            
        </>
        
    );
}

export default signOutInput;