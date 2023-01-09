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
    
    const setPlaceHolder = (placeDefault, index) => {
        let value = "";
        
        if(loadedInput !== null){
            if(index === 1){value = loadedInput.partName};
            if(index === 2){value = loadedInput.partSize};
            if(index === 3){value = loadedInput.partAmount};
            if(index === 4){value = loadedInput.initials};
            console.log(value);
            return value;
        }
        return placeDefault;
    };
    
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
                <input type="text" placeholder={setPlaceHolder("Part Name", 1)} ref={input1Ref} disabled = {(loadedInput ===null) ? false : true} />
                <input type="text" placeholder={setPlaceHolder("Part Size", 2)} ref={input2Ref} disabled = {(loadedInput ===null) ? false : true} />
                <input type="text" placeholder={setPlaceHolder("Part Amount", 3)} ref={input3Ref} disabled = {(loadedInput ===null) ? false : true} />
                <input type="text" placeholder={setPlaceHolder("Initials", 4)} ref={input4Ref} disabled = {(loadedInput ===null) ? false : true} />
                {(loadedInput ===null) ? <motion.button className="material-symbols-outlined" style={{background:'green',scale:.75, borderRadius:90}} whileHover={{scale:1.1}} whileTap={{scale:0.85}} onClick={
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
                </motion.button> : null}
                
                
                
            </motion.form>  
            
        </>
        
    );
}

export default signOutInput;