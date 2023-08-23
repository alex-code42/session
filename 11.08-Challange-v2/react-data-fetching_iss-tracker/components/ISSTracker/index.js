import { useEffect } from "react";
import Controls from "../Controls/index";
import Map from "../Map/index";
import useSWR from 'swr'

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

const fetcher = (...args) => fetch(...args).then(res => res.json())




export default function ISSTracker() {
  const { data: coords, error } = useSWR(URL, fetcher, { refreshInterval: 1000 });

  if (error) return <div>failed to load</div>
  if (!coords) return <div>loading...</div>

  return (
    <main>
      <Map longitude={coords.longitude} latitude={coords.latitude} />
      <Controls
        longitude={coords.longitude}
        latitude={coords.latitude}
      />
    </main>
  );
}
