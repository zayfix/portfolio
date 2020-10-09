function darkmode() {

    let navbar = document.querySelector("header > #top > nav > div");
    if (navbar.classList.contains("white")) {
        navbar.classList.remove("white");
        navbar.classList.add("black");
        document.getElementById("darkmode").innerHTML = "brightness_5";
        let x = document.querySelectorAll("header > #top > nav > div a");
        for (let i = 0; i < x.length; i++) {
            x[i].style.setProperty("color", "white", "important");
        }
        document.getElementById("darkmode").style.color = "white";
    } else {
        navbar.classList.add("white");
        navbar.classList.remove("black");
        document.getElementById("darkmode").innerHTML = "brightness_3";
        let x = document.querySelectorAll("header > #top > nav > div a");
        for (let i = 0; i < x.length; i++) {
            x[i].style.setProperty("color", "black", "important");
        }
        document.getElementById("darkmode").style.color = "black";
    }
    document.getElementById("home").classList.toggle("dark-mode-grid");
    document.getElementById("name-image").classList.toggle("dark-mode-image");
    document.getElementById("home").classList.toggle("dark-mode");
    document.getElementById("about").classList.toggle("dark-mode");
    document.getElementById("projects").classList.toggle("dark-mode");
    document.getElementById("contact").classList.toggle("dark-mode");
    document.querySelector("footer").classList.toggle("dark-mode");
    document.querySelector("footer > p").classList.toggle("dark-mode");
}