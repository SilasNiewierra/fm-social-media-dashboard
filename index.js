// add "dark" prefix to each class
isDarkTheme = false;

function toggleTheme() {
    console.log(isDarkTheme);
    if (isDarkTheme){
        var element = document.getElementById("layout-container");
        element.classList.remove("dark");
        // document.body.classList.remove("dark");
    }else{
        var element = document.getElementById("layout-container");
        element.classList.add("dark");
        // document.body.classList.add("dark");


    }
    isDarkTheme = !isDarkTheme;
}