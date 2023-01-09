import React from 'react';
import  WriteTOdb, {collectInput}  from '../../firebase';
import { motion } from 'framer-motion';




function  signOutInput(index, showVerify, team, loadedInput = null) {
    // make a ref for each input feild without hooks
    const input1Ref = React.createRef();
    const input2Ref = React.createRef();
    const input3Ref = React.createRef();
    const input4Ref = React.createRef();
    
    // if there is data in the loadedInput object then set the input feilds to that data
    

    console.log(team);
    

    collectInput(team);

    let data = {
        partName: '',
        partSize: '',
        partAmount: '',
        initials: '',
        timeSignedOut: new Date().toLocaleString(),
    }

    console.log("index: "+ index.toString());
    return (
        
            <>
            <motion.form className="signOut" key={index}>
                <input type="text" placeholder="Part Name" ref={input1Ref} />
                <input type="text" placeholder="Part Size "ref={input2Ref} />
                <input type="text" placeholder="Part Amount" ref={input3Ref}   />
                <input type="text" placeholder="Initials" ref={input4Ref} />
                <motion.button className="material-symbols-outlined" style={{background:'green',scale:.75, borderRadius:90}} whileHover={{scale:1.1}} whileTap={{scale:0.85}} onClick={
                    (e)=>{
                        e.preventDefault();
                        data.partName = input1Ref.current.value;
                        data.partSize = input2Ref.current.value;
                        data.partAmount = input3Ref.current.value;
                        data.initials = input4Ref.current.value;
                        if(data.partName === '' ||  data.partAmount === '' || data.initials === ''){
                            alert('Please fill out all fields');
                            return;
                        }
                        WriteTOdb(data);
                        showVerify();

                        // set all input fields to read only
                        input1Ref.current.readOnly = true;
                        input2Ref.current.readOnly = true;
                        input3Ref.current.readOnly = true;
                        input4Ref.current.readOnly = true;
                    }
                }>
                    done
                </motion.button>
                
            </motion.form>  
            
        </>
        
    );
}

export default signOutInput;