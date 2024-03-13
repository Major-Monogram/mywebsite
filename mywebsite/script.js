var changingWord = document.getElementById('changing-word'); // Select the changing word span

// Words to be randomly displayed
var words = ["Unique", "Diffident", "Student", "KVian!", "Chess Player", "Yours", "Learning", "Researcher", "Coder", "Programmer", "Blogger", "Chef"];

// Function to choose a random word
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

// Function to update the changing word
function updateWord() {
  changingWord.textContent = getRandomWord();
}

// Function to set interval for changing words every 0.2 seconds for 5 seconds
function changeWordsForFiveSeconds() {
  var intervalId = setInterval(updateWord, 150); // Change word every 0.2 seconds
  setTimeout(function() {
    clearInterval(intervalId); // Stop changing words after 5 seconds
    changingWord.textContent = "Adyut Singh"
    setTimeout(function() {
      changingWord.textContent = "Adyut Singh"; // Set the word to "Adyut Singh" for 10 seconds
      setTimeout(changeWordsForFiveSeconds, 10000); // Restart the process after 10 seconds
    }, 10000);
  }, 5000);
}

// Call changeWordsForFiveSeconds function to start the process
changeWordsForFiveSeconds();

var interests = [
  "Computers", "Family & Friends", "Music", "Coding", "AI", "Tech", "Electronics", "Discord", "Leadership",
  "Cooking", "Science", "Research", "Positivity", "Self-Improvement Books", "Short Films", "Stalker Series",
  "Age of Empires", "KVS", "Assam", "India", "Future Tech", "VLDL", "Perfectionism", "Leftism",
  "Video Games", "Software Development", "Internet Culture", "AI Ethics", "Cybernetics", "Information Security",
  "Digital Privacy", "Human-Computer Interaction", "Computer Networking", "Cloud Computing", "Digital Marketing",
  "Online Learning", "Tech Gadgets", "Mobile Applications", "Tech Startups", "Tech Conferences", "Chess", "Blogs",
  "YOU!"
];

function getRandomInterest() {
  return interests[Math.floor(Math.random() * interests.length)];
}

function createInterest() {
  var interest = document.createElement('span');
  interest.textContent = getRandomInterest();
  interest.classList.add('interest');
  document.querySelector('.animated-interests').appendChild(interest);
  
  // Set random position
  interest.style.left = Math.random() * (window.innerWidth - interest.offsetWidth) + 'px';
  interest.style.top = Math.random() * (window.innerHeight - 80) + 'px';
  
  // Fade in animation
  setTimeout(function() {
    interest.classList.add('fade-in');
  }, Math.random() * 3000); // Random delay between 0 and 3 seconds
  
  // Fade out and remove after 5-7 seconds
  setTimeout(function() {
    interest.classList.add('fade-out');
    setTimeout(function() {
      interest.remove();
    }, 1000); // Fade-out duration is 1 second
  }, 5000 + Math.random() * 2000); // Random duration between 5 and 7 seconds
}

// Repeat createInterest every 1-3 seconds
setInterval(createInterest, Math.random() * 2000 + 1000);
