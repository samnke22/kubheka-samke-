
console.log("Script loaded!");

function showWelcomeMessage() {
  console.log("showWelcomeMessage function called");
  const welcomeElement = document.getElementById("welcomeMessage");
  const appreciationElement = document.getElementById("appreciationMessage");
  const currentHour = new Date().getHours();

  let message;
  if (currentHour < 12) {
    message = "Good morning! Have a productive day ";
  } else if (currentHour < 18) {
    message = "Good afternoon! Keep up the great work ";
  } else {
    message = "Good evening! Time to relax ";
  }

  welcomeElement.textContent = message;
  appreciationElement.textContent = "Thank you for visiting our site. You are appreciated.";

  console.log("Welcome messages updated");
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  const toggleButton = document.getElementById("modeToggle");

  if (document.body.classList.contains("dark-mode")) {
    toggleButton.textContent = "Switch to Light Mode";
    console.log("Dark mode enabled");
  } else {
    toggleButton.textContent = "Switch to Dark Mode";
    console.log("Light mode enabled");
  }
}

document.addEventListener("DOMContentLoaded", function() {
  showWelcomeMessage();
  const toggleButton = document.getElementById("modeToggle");
  toggleButton.addEventListener("click", toggleDarkMode);
});
