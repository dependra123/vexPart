import React,{useRef} from 'react';
import  WriteTOdb  from '../../firebase';
import { motion } from 'framer-motion';



const  signOutInput= (index, setShowVerfiy, ref1, ref2,ref3,ref4) => {
    const input1Ref = ref1;
    const input2Ref = ref2;
    const input3Ref = ref3;
    const input4Ref = ref4;

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
                    WriteTOdb();


                 }} style={{background:'green',scale:.75, borderRadius:90}} whileHover={{scale:1.1}} whileTap={{scale:0.85}}>
                    done
                </motion.button>
                
            </motion.form>  
            
        </>
        
    );
}

export default signOutInput;