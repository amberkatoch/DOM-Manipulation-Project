// Change text content
document.getElementById("changeBtn").addEventListener("click", function () {
    document.getElementById("message").textContent =
        "The content was updated using JavaScript DOM Manipulation!";
});

// Change background color
document.getElementById("colorBtn").addEventListener("click", function () {
    document.body.style.backgroundColor = "#d4edda";
});