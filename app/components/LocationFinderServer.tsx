export default async function LocationFinderServer() {
    const response = await fetch("https://apip.cc/json");
    
    const locationInfo = await response.json(); 

    console.log(locationInfo);
    
    return (
    <>
        <p>Server Component</p>         
      <h1>Hello from {locationInfo?.City}</h1>
            
    </>
  );
}