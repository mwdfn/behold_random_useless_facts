import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from 'react-router-dom';

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
            <h1>Behold! Random Useless Facts*!</h1>
            <ul>
                <li>{randomFact.text}</li>
                <br/>
                <li>Source: {randomFact.source} ({randomFact.source_url})</li>
            </ul>
            <button onClick={getFact}>Get Fact!</button>
            <br/>
            <footer>* Please be aware that the creator of this site does not necessarily endorse any fact presented here as being true. User discretion is advised.</footer>
        </>
    );

}

export default RandomFacts;