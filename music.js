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
const generateButton = document.getElementById("generateButton");


resultSpan.textContent = "no genre selected..."
resultSpan.style.color = "grey"

// initalize with a value that won't occur in the selected array
let prevIndex = -1

function getRandomItem() {

  let randomIndex;

  do {
    randomIndex = Math.floor(Math.random() * genres.length);
  } while (randomIndex === prevIndex)

    console.log("button pressed")
   
    resultSpan.textContent = genres[randomIndex]
    resultSpan.style.color = "black" 

    generateButton.style.border = "2px solid white"; // Change border color

    // Remove and re-add the element to trigger the animation again

    // resultSpan.style.animation = "none";
    // void resultSpan.offsetWidth; // Trigger reflow

    // Add a fade-in animation
    resultSpan.style.animation = "fadeIn 0.5s ease-in-out";

    prevIndex = randomIndex;

    setTimeout(() => {
      generateButton.style.border = "2px solid #000"; // Reset border color after a short delay
      resultSpan.style.animation = ""; // Reset animation
    }, 250);


    

}
