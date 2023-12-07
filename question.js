// Define an array of questions
const locationQuestions = [
    "What is your favorite country to visit?",
    "What city do you associate with home?",
    "Which city would you love to explore?",
    "If you could live anywhere in the world, where would it be?",
    "What country is on the top of your travel bucket list?",
    "Which city's culture fascinates you the most?",
    "What is your dream vacation destination?",
    "If you could teleport to any city right now, where would you go?",
    "Which country's cuisine do you find most appealing?",
    "What city do you associate with unforgettable memories?",
    "Is there a specific city of the world you find most intriguing?",
    "Which country's natural landscapes do you admire the most?",
    "What city would you recommend to a first-time traveler?",
    "Have you ever experienced the charm of a small town? If so, which one?",
    "Which country's festivals would you like to attend?",
    "Are there any hidden gems or lesser-known cities you'd like to explore?",
    "If you could live in a coastal city, which one would it be?",
    "What city do you associate with your favorite type of cuisine?",
    "What is your favorite city to visit?"
  ];

  // Function to simulate typing effect
  function typeEffect(element, text, speed) {
    let i = 0;
    console.log(speed)
    const typingInterval = setInterval(() => {
      element.innerHTML += text.charAt(i);
      i++;
      if (i > text.length) {
        clearInterval(typingInterval);
      }
    }, speed);
  }
  
  
  // Function to get a random question from the array
  function getRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * locationQuestions.length);
    const randomQuestion = locationQuestions[randomIndex];
    console.log(randomQuestion)
    const questionElement = document.getElementById("question");
    questionElement.innerText = ""; // Clear existing text
    typeEffect(questionElement, randomQuestion, 50); // Typing speed: 50 milliseconds per character
  }

  // Event listener for the button click
  document.getElementById("question-btn").addEventListener("click", getRandomQuestion);
  