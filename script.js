const themeButton = document.getElementById("theme-toggle");

themeButton.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");


    if(document.body.classList.contains("light-mode")){

        themeButton.textContent = "🌙 Dark Mode";

    }

    else{

        themeButton.textContent = "☀️ Light Mode";

    }

});