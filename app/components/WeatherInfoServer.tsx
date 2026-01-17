export default async function WeatherInfoServer() {
    const location = await fetch("https://apip.cc/json").then(res => res.json());

    const lat = location.Latitude;
    const lon = location.Longitude;

    const weather = await fetch(
        `http://www.7timer.info/bin/api.pl?lat=${lat}&lon=${lon}&product=astro&output=json&unit=metric`
    ).then(res => res.json());

    const temp = weather.dataseries[0].temp2m;

    return (
    <>
    <h2> Current temperature: {temp}°C</h2>
    </>
    );
}
