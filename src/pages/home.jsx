import React, { useEffect } from 'react';
import { useState } from 'react';
import DropDown from '../components/dropDown';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as data from '../assets/teams.json';


function Home() {
    const [dropName, setDropName] = useState('Select a drop');
    const [isOpen, setIsOpen] = useState(false);
    const[show, setShow] = useState(false);
    const [teams, setTeams]= useState([]);
    const [routeID, setRouteID] = useState('');

    //get all the team names from the json file
    
    
    useEffect(() => {
        const teamsNames = [];
        Object.keys(data.Teams).map((key) => {
            teamsNames.push(data.Teams[key].name);
        });
       setTeams(teamsNames);
    }
    ,[]);
   

    
    const handleOpen = () => {
        setIsOpen(!isOpen);
        setShow(false);
    }

    const handleSelect = (e) => {
        setDropName(e);
        setIsOpen(false);
        setShow(true);
        //get the routeID for team selected from the json file
        Object.keys(data.Teams).map((key) => {
            if(data.Teams[key].name === e){
                setRouteID(key);
            }
        });
    }

    return (
    //    style buttons to have blue borders when hovered over
        <div>
           <DropDown
                trigger={<button onClick={handleOpen}>{dropName}</button>}
                open={isOpen}
                options={teams.map((team, index) => (
                    <button key={index} onClick={() => handleSelect(team)}>{team}</button>
                ))}
           />
           {show ? <Link to={"/team/:"+routeID}><motion.button className='continue' style={{background:'green', scale:.75, y:10}} whileHover={{scale:1.25}}>Continue</motion.button></Link> : null}

        </div>
        
       
    );
}

export default Home;