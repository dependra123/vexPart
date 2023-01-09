import React, {useState} from 'react';
import { useParams } from 'react-router';
import { motion } from 'framer-motion';
import './partSignOut.css';
import { Link } from 'react-router-dom';
import signOutInput  from '../components/signOutInput';
import { collectInput, getData } from '../../firebase';

// make a functions that will handle the input feilds


function PartSignOut() {
    const [showVerfiy, setShowVerfiy] = useState(false);
    const {routeID} = useParams();
    const team = routeID.replace(':', '');
    const [key, setKeys] = useState(0);
    const [feildsArray, setFeildsArray] = useState([]);
    const [onLoad, setOnLoad] = useState(true);

    

    // when load retrive data from firebase and add feild for each part
    const onLoadRun=() => {
        
            collectInput(team);
            let dataRecived = getData(team);
            let index = 0;
            dataRecived.then((data) => {
                console.log(data);
                data.forEach((part, indx) => {
                    console.log(part);
                    setFeildsArray((prev) => {
                        return [...prev, signOutInput(indx, setShowVerfiy, team, part.data)];
                    });
                });
                
            });
            setOnLoad(false);
        
    };

    if(onLoad){onLoadRun()}

    const handleRemove = (index) => {
        const newFeilds = [...feildsArray];
        newFeilds.splice(index, 1);
        setFeildsArray(newFeilds);
    };
    



    return (
        <div>
            {/* make 4 input feilds for part name, size, amount and name */}

            <Link to='/' className='link'><motion.button className='material-symbols-outlined' style={{background:'none'}} whileHover={{scale:1.25}}>arrow_back</motion.button></Link>
            <div className='Text'>
                <h1>Part Sign Out</h1>
                <h2>Team: {routeID.replace(':', ' ')}</h2>
            </div>
            

            <motion.button  className="material-symbols-outlined" style={{background:'green',scale:.75,  y:-100, borderRadius:90}} whileHover={{scale:1.1}} whileTap={{scale:0.85}} onClick={
                () => {
                    setKeys(key + 1);
                    console.log(key);
                    setFeildsArray([...feildsArray, new signOutInput(key,  () => setShowVerfiy(!showVerfiy), team)]);
                    
                }
            }>Add</motion.button>
            <motion.div className='feildContainder' >
                {feildsArray.map((feild, index) =>
                  <motion.span key={index} animate={{y:-5}} transition={{type:'spring', damping:'7'}} initial={{y:-5,opacity:0.2}} whileInView={{y:0, opacity:1}} exit={{opacity:0}} className="feildSpan">
                    <motion.button onClick={() =>{
                        handleRemove(index);
                        
                    }} style={{scale:0.6, borderRadius:60, background:'#B0272B'}} className="material-symbols-outlined" whileHover={{scale:.8, borderRadius:90, background:'#FF0000'}} whileTap={{scale:.5}}>
                        close 
                    </motion.button>
                    {feild}
                </motion.span>)}
            </motion.div>
            
            {
                    showVerfiy ? 
                    <div></div>
                    
                    // saveToJson(verfiyData)
                    : null
            }

        </div>
    );
}

export default PartSignOut;