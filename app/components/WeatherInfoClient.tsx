"use client";

import { useEffect, useState } from "react";

export default function WeatherInfoClient() {
    const [temp, setTemp] = useState();

    useEffect(() => {
        fetch("https://apip.cc/json")
            .then(res => res.json())
            .then(location => {
                const lat = location.Latitude;
                const lon = location.Longitude;

                return fetch(
                    `https://www.7timer.info/bin/api.pl?lat=${lat}&lon=${lon}&product=astro&output=json&unit=metric`
                );
            })
            .then(res => res.json())
            .then(weather => {
                setTemp(weather.dataseries[0].temp2m);
            });
    }, []);

    if (temp === undefined) {
        return <h3> Current temperature: Loading...</h3>;
    }

    return (
    <>
    <h2>Current temperature: {temp}°C</h2>
    </>
    );
}
