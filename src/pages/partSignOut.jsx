import React, {useState} from 'react';
import { useParams } from 'react-router';
import { motion } from 'framer-motion';
import './partSignOut.css';
import { Link } from 'react-router-dom';
import signOutInput  from '../components/signOutInput';
import saveToJson from '../components/saveToJson';

// make a functions that will handle the input feilds


function PartSignOut() {
    const [showVerfiy, setShowVerfiy] = useState(false);
    const [verfiyWhich, setVerfiyWhich] = useState(null);
    const [verfiyData, setVerfiyData] = useState({});
    const {routeID} = useParams();
    const [key, setKeys] = useState(1);


    
    
    
    
    
    const [feildsArray, setFeildsArray] = useState([signOutInput(0,  () => setShowVerfiy(!showVerfiy), (index) => setVerfiyWhich(index), (data) => setVerfiyData(data))]);

    const handleClick = () => {
      
        setFeildsArray([...feildsArray, signOutInput(key,  () => setShowVerfiy(true))]);
        setKeys(key + 1);
       
    };

    const handleRemove = (index) => {
        const newFeildsArray = feildsArray.filter((feild, i) => i !== index);
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
                  <motion.span key={index} animate={{y:-5}} transition={{type:'spring', damping:'7'}} initial={{y:-5,opacity:0.2}} whileInView={{y:0, opacity:1}} exit={{opacity:0}} className="feildSpan">
                    <motion.button onClick={() =>{
                        handleRemove(index);
                        console.log("index: "+ index.toString());
                    }} style={{scale:0.6, borderRadius:60, background:'#B0272B'}} className="material-symbols-outlined" whileHover={{scale:.8, borderRadius:90, background:'#FF0000'}} whileTap={{scale:.5}}>
                        close 
                    </motion.button>
                    {feild}
                </motion.span>)}
            </motion.div>
            
            {
                    showVerfiy ? 

                    
                    saveToJson(verfiyData)
                    : null
            }

        </div>
    );
}

export default PartSignOut;