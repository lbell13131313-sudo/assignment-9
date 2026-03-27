console.log("script.js loaded");

const endpoint = "https://api.giphy.com/v1/gifs/search?api_key=kZuBXqdiLwhstYJIjyFPZ3VyFXd2RruA&q=dogs&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips";

// images array to hold the gifs
let images = [];

async function getDogGifs() {
  const response = await fetch(endpoint);
  console.log(response.status); // a 429 means I'm getting an API limit issue
  const data = await response.json();
  // store the dog gifs in an array
  images = data.data;

  console.log(images);
  
  const gifContainer = document.querySelector("#gif-container"); 
  
  // ensures that all the gifs are cleared out after each button press so it doesn't become a mess
  gifContainer.innerHTML = "";

  for (let i = 0; i < images.length; i++) {
    gifContainer.innerHTML += `<img src="${images[i].url}" alt='dog gif' class = 'col-3 mb-3'>`;
  }
}

// button for recieving the dog gifs
const button = document.querySelector("#fetch-gif-btn"); 

button.addEventListener("click", async () => {
    await getDogGifs();
});