// TOGGLE TEXT
const Btn = document.getElementById("toggleBtn");
const Text = document.getElementById("toggleText");

toggleBtn.addEventListener("click", function() {
  if (Text.style.display === "none") {
    Text.style.display = "block";
  } else {
    Text.style.display = "none";
  }
});

// CHANGE COLOR BUTTON
const colorBtn = document.getElementById("colorBtn");
const colorText = document.getElementById("colorText");

colorBtn.addEventListener("click", function() {
  if( colorText.style.color=="red")
  colorText.style.color = "black"; // Change text color to red
  else
  {
  colorText.style.color = "red"; // Change text color to black
  }
});
