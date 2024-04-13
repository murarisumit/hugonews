var toggle = document.getElementById("dark-mode-toggle");
var darkTheme = document.getElementById("dark-mode-theme");

toggle.addEventListener("click", () => {
    if (toggle.className === "fal fa-moon-o") {
        setTheme("dark");
    } else if (toggle.className === "fal fa-sun-o") {
        setTheme("light");
    }
});

// auto detect user's system theme
// if saved theme is dark, set dark theme
// else if saved theme is light, set light theme
// else if system theme is dark, set dark theme
if (localStorage.getItem("dark-mode-storage") === "dark") {
    setTheme("dark");
} else if (localStorage.getItem("dark-mode-storage") === "light") {
    setTheme("light");
} else {
    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
    console.log(darkQuery);
    if (darkQuery.matches) {
        setTheme("dark");
    }
}

// if (darkQuery.matches) {
//     setTheme("dark");
// }
// else {
//     setTheme("light");
// }
// the default theme is light
// var savedTheme = localStorage.getItem("dark-mode-storage") || "light";
// setTheme(savedTheme);


function setTheme(mode) {
    localStorage.setItem("dark-mode-storage", mode);
    if (mode === "dark") {
        darkTheme.disabled = false;
        toggle.className = "fal fa-sun-o";
    } else if (mode === "light") {
        darkTheme.disabled = true;
        toggle.className = "fal fa-moon-o";
    }
}

