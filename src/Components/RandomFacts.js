import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from 'react-router-dom';
import { Button } from "@mui/material";
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

const RandomFacts = () => {
    const [randomFact, setRandomFact] = useState('');

    useEffect(() => {
        getFact()
    }, []);

    const getFact = () => {
        fetch('https://uselessfacts.jsph.pl/random.json?language=en')
        .then(res => res.json())
        .then(randomFact => setRandomFact(randomFact))
    }

    return(
        <>  
            <div className="app-title">
                <h1>Behold! Random Useless Facts*!</h1>
            </div>
            <div className="fact-content">
                <p>{randomFact.text}</p>
                <br/>
                <a className="source">Source: {randomFact.source} ({randomFact.source_url})</a>
            </div>
            <div className="get-button">
                <Button variant="contained" size="large" color="inherit" endIcon={<SentimentVerySatisfiedIcon/>} onClick={getFact}>
                    Get Fact!
                </Button>
            </div>
            <footer>* Please be aware that the creator of this site does not necessarily endorse information presented here as being fact. User discretion is advised.</footer>
        </>
    );

}

export default RandomFacts;