import React, {useState} from 'react';
import { useParams } from 'react-router';
import { motion } from 'framer-motion';
import './partSignOut.css';
import { Link } from 'react-router-dom';

// make a functions that will handle the input feilds

const signOutInput = () => {
    //check if the input feilds are empty and if they are, set a red border
    let inputFeildCorrect = false;
    let count = 0;
    const handleChange = (e) => {
        // check if user is done typing
        if(e.target.value.length > 0){
            count++;
        }
        if(count > 4){
            inputFeildCorrect = true;
        }
    }

    
    return (
        
            <motion.form className="signOut" >
                <input type="text" placeholder="Part Name" onChange={handleChange}/>
                <input type="text" placeholder="Part Size"/>
                <input type="text" placeholder="Part Amount"/>
                <input type="text" placeholder="Initials"/>
            </motion.form>
    );
};

function PartSignOut() {
   
    const {routeID} = useParams();
    const [feildsArray, setFeildsArray] = useState([signOutInput()])
    const [divPos, setDivPos] = useState(1);
    const handleClick = () => {
      
        setFeildsArray([...feildsArray, signOutInput()]);
        setDivPos(divPos + 1);
       
    };
    const handleRemove = (index) => {
        const newFeildsArray = [...feildsArray];
        newFeildsArray.splice(index, 1);
        setFeildsArray(newFeildsArray);
    };
    


    return (
        <div>
            {/* make 4 input feilds for part name, size, amount and name */}

            <Link to='/' className='link'><motion.button className='material-symbols-outlined' style={{background:'none'}} whileHover={{scale:1.25}}>arrow_back</motion.button></Link>
            <div className='Text'>
                <h1>Part Sign Out</h1>
                <h2>Team: {routeID}</h2>
            </div>
            

            <motion.button  className="material-symbols-outlined" style={{background:'green',scale:.75,  y:-100, borderRadius:90}} whileHover={{scale:1.1}} whileTap={{scale:0.85}} onClick={handleClick}>Add</motion.button>
            <motion.div className='feildContainder' >
                {feildsArray.map((feild, index) =>
                  <motion.span key={index} animate={{y:-5}} transition={{type:'spring', damping:'7'}} initial={{y:-5,opacity:0.2}} whileInView={{y:0, opacity:1}} className="feildSpan">
                    <motion.button onClick={handleRemove} style={{scale:0.6, borderRadius:60, background:'#B0272B'}} className="material-symbols-outlined" whileHover={{scale:.8, borderRadius:90, background:'#FF0000'}} whileTap={{scale:.5}}>
                        close 
                    </motion.button>
                    {feild} {index}
                </motion.span>)}
            </motion.div>
            


        </div>
    );
}

export default PartSignOut;