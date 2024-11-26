// Get the elements
const infoButton = document.querySelector('.info-button');
const infoBox = document.querySelector('.info-box');
const bubbleContainer = document.querySelector('.bubbles-container');

// Function to show the info box when hovering over the info button
infoButton.addEventListener('mouseover', function () {
  // Hide the PNG icon and show the info box
  infoButton.querySelector('img').style.opacity = 0; // Hide icon
  infoBox.style.display = 'block'; // Show info box
  setTimeout(() => {
    infoBox.style.opacity = 1; // Fade in the info box
    infoBox.style.transform = 'scale(1)'; // Make it grow to normal size
  }, 10); // Small delay for smooth animation
});

// Function to hide the info box and show the PNG when mouse leaves the info button
infoButton.addEventListener('mouseleave', function () {
  // Hide the info box and restore the PNG icon
  infoBox.style.opacity = 0; // Fade out the info box
  infoBox.style.transform = 'scale(0.9)'; // Shrink the box back
  setTimeout(() => {
    infoBox.style.display = 'none'; // Completely hide it after the animation
    infoButton.querySelector('img').style.opacity = 1; // Restore the PNG icon
  }, 300); // Matches the fade-out duration
});

// Function to create a bubble
function createBubble() {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');

  // Randomize bubble size
  const size = Math.random() * 20 + 5; // Between 5px and 25px
  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;

  // Randomize horizontal position
  bubble.style.left = `${Math.random() * 100}vw`;

  // Append the bubble to the container
  bubbleContainer.appendChild(bubble);

  // Remove the bubble after its animation ends
  setTimeout(() => {
    bubble.remove();
  }, 15000); // Matches the animation duration (15s)
}

// Generate bubbles with slight randomness
function createRandomBubbles() {
  const bubbleCount = Math.floor(Math.random() * 3) + 1; // Create 1–3 bubbles at a time
  for (let i = 0; i < bubbleCount; i++) {
    createBubble();
  }
}

// Generate bubbles at random intervals
setInterval(() => {
  createRandomBubbles();
}, Math.random() * 800 + 800); // Random interval between 800ms and 1600ms
