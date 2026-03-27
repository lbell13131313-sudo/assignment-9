console.log("script.js loaded");

const endpoint = "https://api.giphy.com/v1/gifs/search?api_key=kZuBXqdiLwhstYJIjyFPZ3VyFXd2RruA&q=dogs&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips";

// images array to hold the gifs
let images = [];

async function getDogGifs() {
  const response = await fetch(endpoint);
  const data = await response.json();
  images = data;

  //console.log(data);
  
  // Update the DOM with the dog gif
  const output = document.querySelector("gif-container"); 
  // output.src = gif; // fix this
}

// button for recieving a dog gif
const button = document.querySelector("fetch-gif-btn"); 

button.addEventListener("click", function () { 
  getDogGifs(); 
});