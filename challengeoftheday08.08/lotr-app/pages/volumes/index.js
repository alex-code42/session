import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link'; // Import the Link component
import { introduction, volumes } from "../../lib/data";





export default function Lotr() {



    console.log("volumes", volumes)

    const router = useRouter();
    const slug =router.query

    function getRandomElement(array) {
      return array[Math.floor(Math.random() * array.length)];
      
    }
    
    

    
    const handleRandomFilmClick = () => {
      const randomBook = getRandomElement(volumes)
      console.log("my random book",randomBook.slug)
      const mylink = "volumes/"+ (randomBook.slug)
      console.log("mylink", mylink)

      router.push(mylink);
    };
    
  return (
    <div className='mydiv'>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <section>
        {volumes.map(({ slug, title}) => (
          <Link key={slug} href={`volumes/${slug.toLowerCase()}`}>
           
            <li key={slug}>{title}</li>
          </Link>
        ))}
        <button onClick={handleRandomFilmClick}>Choose random Film</button>
      </section>
    </div>
  );
}
