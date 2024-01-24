let genres = ["Old School Hiphop", 
"New School Hiphop", 
"Popping", 
"House", 
"Krump",
"Old School RnB",
"New School RnB",
"Litefeet",
"Locking",
"Waacking",
"Flexn",
"New Style Hiphop"];

const resultSpan = document.getElementById("result");

resultSpan.textContent = "no genre selected..."
resultSpan.style.color = "grey"


function getRandomItem() {
    const randomIndex = Math.floor(Math.random() * genres.length);
    console.log("button pressed")
   // Set initial opacity to 0
    resultSpan.textContent = genres[randomIndex]
    resultSpan.style.color = "black" 

    generateButton.style.border = "2px solid white"; // Change border color
  setTimeout(() => {
    generateButton.style.border = "2px solid #000"; // Reset border color after a short delay
  }, 250);

    

}
