// var toggle = document.getElementById("dark-mode-toggle");
// var darkTheme = document.getElementById("dark-mode-theme");

var colorModeOverride = document.getElementById("color-mode-toggle");
var darkTheme = document.getElementById("dark-mode-theme");

// set enum of color modes
const ColorMode = {
    DARK: "dark",
    LIGHT: "light"   
};

const Cookies = {
    COLOR_MODE_OVERRIDE: "color-mode-override"
}

const override_duration = 21600; // 6 hours

// manually set the theme
colorModeOverride.addEventListener("click", () => {
    if (colorModeOverride.className === "fal fa-moon-o") {
        document.cookie = `${Cookies.COLOR_MODE_OVERRIDE}=${ColorMode.DARK}; SameSite=Strict; max-age=${override_duration}; path=/`;
        setTheme(ColorMode.DARK);
    } else if (colorModeOverride.className === "fal fa-sun-o") {
        document.cookie = `${Cookies.COLOR_MODE_OVERRIDE}=${ColorMode.LIGHT}; SameSite=Strict; max-age=${override_duration}; path=/`;
        setTheme(ColorMode.LIGHT);
    }
});

// check if the user has set a color mode override earlier else check for the system preference
var cookie_color_mode_override = document.cookie.split('; ').find(row => row.startsWith(`${Cookies.COLOR_MODE_OVERRIDE}`));
if (cookie_color_mode_override) {
    cookie_color_mode_override = cookie_color_mode_override.split('=')[1];
    console.log(`Overriden: ${cookie_color_mode_override}`);
    setTheme(cookie_color_mode_override);
} else {
    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
    if (darkQuery.matches) {
        setTheme(ColorMode.DARK);
    }
}

// localStorage.setItem("dark-mode-storage", "dark");
// localStorage.getItem("dark-mode-storage");
// localStorage.removeItem("dark-mode-storage");

// if (localStorage.getItem("dark-mode-storage") === "dark") {
//     setTheme("dark");
// } else if (localStorage.getItem("dark-mode-storage") === "light") {
//     setTheme("light");
// } else {
//     const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
//     console.log(darkQuery);
//     if (darkQuery.matches) {
//         setTheme("dark");
//     }
// }

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
    if (mode === ColorMode.DARK) {
        darkTheme.disabled = false;
        colorModeOverride.className = "fal fa-sun-o";
    } else if (mode === ColorMode.LIGHT) {
        darkTheme.disabled = true;
        colorModeOverride.className = "fal fa-moon-o";
    }
}

