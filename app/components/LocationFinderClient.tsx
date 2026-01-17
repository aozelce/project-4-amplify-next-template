"use client";

import { useEffect, useState } from "react";

export default function LocationFinderServer() {
    const [locationInfo, setLocationInfo] = useState({City: 'Loading..'});

    async function getLocationInfo() {
        const response = await fetch("https://apip.cc/json");
        console.log(response);
        const locationData = await response.json();
        setLocationInfo(locationData);
    }

    useEffect(() => {
        getLocationInfo(); 
    }, []);
    
    
    return (
    <>
      <h1>Hello from {locationInfo.City}- Client Component</h1>
    
    </>
  );
}