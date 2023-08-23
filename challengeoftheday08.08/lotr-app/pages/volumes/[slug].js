import { useRouter } from 'next/router';
import React from 'react';
import Image from 'next/image';

import { volumes } from "../../lib/data";

export default function VolumeDetail() {
    const router = useRouter();
    const slug =router.query.slug
    console.log(slug)
    let film = volumes.find((volume) => volume.slug === slug)
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
                <a href="/volumes/">Back</a>
          
        </>
    );
}

    