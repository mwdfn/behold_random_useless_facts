import React, { useEffect } from "react";
import { Routes, Route, Link } from 'react-router-dom';

const RandomFacts = () => {
    const [randomFact, setRandomFact] = useState('')

    useEffect(() => {
        getRandomFacts()
    }, [])
    
    const getRandomFacts = () => {
        fetch('https://uselessfacts.jsph.pl/random.json?language=en')
        .then(res => res.json())
        .then(randomFact => setRandomFact(randomFact))
        .catch(err => console.error('No facts retrieved.'))
    }

    return(
        <>
            <h1>I'm where a random fact will appear!</h1>
        </>
    )

}

export default RandomFacts