export default async function LocationFinderServer() {
    const response = await fetch("https://apip.cc/api-json/vk.com");
    
    const locationInfo = await response.json(); 

    console.log(locationInfo);
    
    return (
    <>
    {/* Had to use country name instead of city name due to API limitations in my location. */}
      <h1>Hello from {locationInfo?.City} - Server Component</h1>
    
    </>
  );
}