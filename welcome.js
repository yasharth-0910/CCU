document.addEventListener("DOMContentLoaded", function () {
    var welcomeText = document.getElementById("welcomeText");
    var cursor = document.getElementById("cursor");
    var textToType = "Welcome to CCU";
    var currentIndex = 0;

    function typeText() {
        if (currentIndex <= textToType.length) {
            welcomeText.innerHTML = textToType.substring(0, currentIndex);
            cursor.style.display = "inline"; 
            currentIndex++;
            setTimeout(typeText, 150); 
        } else {
            setTimeout(eraseText, 1000);
        }
    }

    function eraseText() {
        var currentText = welcomeText.innerHTML;
        if (currentText.length > 0) {
            welcomeText.innerHTML = currentText.slice(0, -1);
            cursor.style.display = "inline"; 
            setTimeout(eraseText, 120); 
            currentIndex = 0;
            setTimeout(typeText, 500);
        }
    }

    typeText();

    var nextButton = document.getElementById("nextButton");
    nextButton.addEventListener("click", function () {
        redirectToHomepage();
    });

    function redirectToHomepage() {
        window.location.href = "homepage.html";
    }
});
