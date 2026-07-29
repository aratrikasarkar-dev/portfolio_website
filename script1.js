// Get form, input, and button
const form = document.getElementById("myForm");
const input = document.getElementById("name");
const button = form.querySelector("button");

// Show alert on button click
button.addEventListener("click", function () {
    alert("Button Clicked!");
});

// Prevent form submission and print input value
Form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent page refresh
    console.log(input.value); // Print input value in console
});