import React from 'react';
import Image from 'next/image';


import Link from 'next/link'; // Import the Link component
import { volumes } from "../../lib/data";

export default function twoTowers () {
    //Only for this session. Never Again!
    let film = volumes.find(({slug}) => slug === "the-fellowship-of-the-ring")
    console.log('Film in Fellowship: ', film);
    console.log('Books from film in Fellowship: ', film.books);
    return (
        <>
                <h1>{film.title}</h1>
                <p>{film.description}</p>
                
                <Image
                        src={film.cover}
                        alt="Image description"
                        width={140}
                        height={230}
                    />

                <ul>
                {film.books.map(({ title, ordinal }) => (
                    <li key={title}>{ordinal}  {title}</li>
                    ))}
                </ul>
          
        </>
    );
}