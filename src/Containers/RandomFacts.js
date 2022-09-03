import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from 'react-router-dom';

const RandomFacts = () => {
    const [randomFact, setRandomFact] = useState('')

    useEffect(() => {
        fetch('https://uselessfacts.jsph.pl/random.json?language=en')
        .then(res => res.json())
        .then(randomFact => setRandomFact(randomFact))
    }, [])

    return(
        <>
            <h1>Behold! Random Useless Facts!</h1>
            <ul>
                <li>{randomFact.text}</li>
                <br/>
                <li>Source: {randomFact.source} ({randomFact.source_url})</li>
            </ul>
            <button>Get A New Fact</button>
        </>
    )

}

export default RandomFacts