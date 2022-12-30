import React from 'react';
import { useParams } from 'react-router';
import { motion } from 'framer-motion';
import './partSignOut.css';


function PartSignOut() {
    const {routeID} = useParams();
    return (
        <div>
            {/* make 4 input feilds for part name, size, amount and name */}
            <h1>Part Sign Out</h1>
            <h2>Team: {routeID}</h2>
            
            <motion.div className="signOut">
                <input type="text" placeholder="Part Name"/>
                <input type="text" placeholder="Part Size"/>
                <input type="text" placeholder="Part Amount"/>
                <input type="text" placeholder="Initials"/>
            </motion.div>

        
        </div>
    );
}

export default PartSignOut;