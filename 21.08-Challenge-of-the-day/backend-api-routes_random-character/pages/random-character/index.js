import useSWR from 'swr';

// Define a default fetcher function that uses the default fetch
const defaultFetcher = (url) => fetch(url).then((res) => res.json());

export default function YourComponent() {
  // Use useSWR with the default fetcher and the URL
  const { data , error } = useSWR('/api/random-character', defaultFetcher);

  if (error) {
    return <div>Error loading data</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  // Render your component with the fetched data
  return (
    <div>
      <h1>Character</h1>
      <ul>
            <li>Name: {data.firstName}</li>
            <li>Last Name: {data.lastName}</li>
            <li>Age: {data.age}</li>
            <li>Twitter Name: {data.twitterName}</li>
            <li>Words: {data.words}</li>
      </ul>
    </div>
  );
}
