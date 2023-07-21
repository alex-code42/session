console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
 try{
    const response = await fetch(url);
    const data = await response.json();
    
    
    
    return data; 


} catch (error) {
    // Failure (Network error, etc)
    console.error("An Error occurred");
  }
}

const data = await fetchData();
    console.log("data: ", data)
    console.log("C3P0: ", data.results[2])
    console.log("Eye Color: ", data.results[2].eye_color)