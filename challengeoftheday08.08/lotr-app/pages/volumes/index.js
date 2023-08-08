import React from 'react';
import Link from 'next/link'; // Import the Link component
import { introduction, volumes } from "../../lib/data";

export default function Lotr() {
    console.log("volumes", volumes)
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
      </section>
    </div>
  );
}
