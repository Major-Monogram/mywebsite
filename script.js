// ======= Dynamic Heading Changing Word =======

var changingWord = document.getElementById('changing-word'); // Select the changing word span

// Words to be randomly displayed in the heading
var words = ["Unique", "Diffident", "Student", "KVian!", "Chess Player", "Yours", "Learning", "Researcher", "Coder", "Programmer", "Blogger", "Chef"];

// Function to choose a random word for the heading
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

// Function to update the changing word in the heading
function updateWord() {
  changingWord.textContent = getRandomWord();
}

// Function to set interval for changing words every 150ms for 5 seconds
function changeWordsForFiveSeconds() {
  var intervalId = setInterval(updateWord, 150);
  setTimeout(function() {
    clearInterval(intervalId);
    changingWord.textContent = "Adyut Singh";
    setTimeout(function() {
      changingWord.textContent = "Adyut Singh";
      setTimeout(changeWordsForFiveSeconds, 10000);
    }, 10000);
  }, 5000);
}

// Start the dynamic heading process
changeWordsForFiveSeconds();


// ======= Animated Interests with No Duplicates =======

// List of all interests (will be randomly shown)
var interests = [
  "Computers", "Family & Friends", "Music", "Coding", "AI", "Tech", "Electronics", "Discord", "Leadership",
  "Cooking", "Science", "Research", "Positivity", "Self-Improvement Books", "Short Films", "Stalker Series",
  "Age of Empires", "KVS", "Assam", "India", "Future Tech", "VLDL", "Perfectionism", "Leftism",
  "Video Games", "Software Development", "Internet Culture", "AI Ethics", "Cybernetics", "Information Security",
  "Digital Privacy", "Human-Computer Interaction", "Computer Networking", "Cloud Computing", "Digital Marketing",
  "Online Learning", "Tech Gadgets", "Mobile Applications", "Tech Startups", "Tech Conferences", "Chess", "Blogs",
  "YOU!"
];

// Keep track of interests currently visible on the screen
let activeInterests = new Set();

// Get a random interest that is not already displayed
function getRandomInterest() {
  let available = interests.filter(i => !activeInterests.has(i));
  if (available.length === 0) return null;
  return available[Math.floor(Math.random() * available.length)];
}

// Create an interest element on screen
function createInterest() {
  let interestText = getRandomInterest();
  if (!interestText) return; // if all interests are active, do nothing

  let interest = document.createElement('span');
  interest.textContent = interestText;
  interest.classList.add('interest');
  document.querySelector('.animated-interests').appendChild(interest);

  // Mark this interest as active
  activeInterests.add(interestText);

  // Set random position
  interest.style.left = Math.random() * (window.innerWidth - 100) + 'px';
  interest.style.top = Math.random() * (window.innerHeight - 80) + 'px';

  // Fade in animation with a random delay
  setTimeout(function() {
    interest.classList.add('fade-in');
  }, Math.random() * 3000);

  // Fade out and remove the element after 5-7 seconds
  setTimeout(function() {
    interest.classList.add('fade-out');
    setTimeout(function() {
      interest.remove();
      activeInterests.delete(interestText);
    }, 1000); // fade-out duration
  }, 5000 + Math.random() * 2000);
}

// Create interests repeatedly (every 1-3 seconds)
setInterval(createInterest, Math.random() * 2000 + 1000);


// ======= Canvas for Connecting Lines (Neural Network Effect) =======

// Add canvas element from HTML
const canvas = document.getElementById('network-lines');
const ctx = canvas.getContext('2d');

// Function to update canvas size based on window dimensions
function updateCanvasSize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
updateCanvasSize();
window.addEventListener('resize', updateCanvasSize);

// Function to draw connecting lines between all current interest elements
function drawLines() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  let elements = Array.from(document.querySelectorAll('.interest'));

  // Draw line between every pair of elements
  for (let i = 0; i < elements.length; i++) {
    let aRect = elements[i].getBoundingClientRect();
    for (let j = i + 1; j < elements.length; j++) {
      let bRect = elements[j].getBoundingClientRect();
      ctx.beginPath();
      ctx.moveTo(aRect.left + aRect.width / 2, aRect.top + aRect.height / 2);
      ctx.lineTo(bRect.left + bRect.width / 2, bRect.top + bRect.height / 2);
      ctx.strokeStyle = 'rgba(34, 233, 168, 0.3)'; // thin cyan line
      ctx.lineWidth = 1;
      ctx.stroke();
    }
  }
  requestAnimationFrame(drawLines);
}
requestAnimationFrame(drawLines);


// ======= Click to Create Temporary Point with Connections =======

document.addEventListener('click', function(e) {
  // Create a temporary node at the click position
  let tempNode = document.createElement('span');
  tempNode.className = 'interest';
  tempNode.style.left = `${e.clientX}px`;
  tempNode.style.top = `${e.clientY}px`;
  tempNode.style.width = '5px';
  tempNode.style.height = '5px';
  tempNode.style.backgroundColor = '#22e9a8';
  tempNode.style.borderRadius = '50%';
  tempNode.style.position = 'absolute';
  tempNode.style.pointerEvents = 'none';

  document.querySelector('.animated-interests').appendChild(tempNode);

  // Fade in the temporary node
  tempNode.classList.add('fade-in');

  // After 4 seconds, fade out and remove the temporary node
  setTimeout(() => {
    tempNode.classList.add('fade-out');
    setTimeout(() => {
      tempNode.remove();
    }, 1000);
  }, 4000);
});
