import React from 'react';
import { useParams } from 'react-router';

const LeagueInfo = () => {
    const {idLeague} = useParams();
    
    return (
        <div>
            <h1>League Info of {idLeague}</h1>
        </div>
    );
};

export default LeagueInfo;