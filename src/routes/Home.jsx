import React, { useState } from 'react'
import Card from '../components/Card';
import Container from '../components/Container'
import Grid from '../components/Grid'
import Searchbar from '../components/Searchbar'

import { fetchHeroes } from "../utils/utils";



export default function Home() {

    const [heroes, setHeroes] = useState([]);
    const [error, setError] = useState();
    const IMG_SIZE = "portrait_fantastic";

    const handleClick = async (e, args) => {
        e.preventDefault();
        if (args === "") return;
    
        try {
            return await fetchHeroes(args);
        } catch (err) {
            return err;
        }
    };


    return (
        <Container>
            <h1 className='text-3xl font-medium text-center mb-5 pt-10 md:pt-16'>Marvel Heroes</h1>
            <Searchbar handleClicker={handleClick} setHeroes={setHeroes} setError={setError}/>
            <h2 className='text-xl font-medium my-5 ml-5'>Results</h2>
            <Grid>{heroes.length > 0 ? heroes.map((hero) =>(
                <Card name={hero.name} key={hero.id} id={hero.id} thumbnail={`${hero.thumbnail.path}/${IMG_SIZE}.${hero.thumbnail.extension}`}/>
                )) : 
                <p className='text-lg ml-5'>Character not found</p>}
            </Grid>
        </Container>
    )
}
