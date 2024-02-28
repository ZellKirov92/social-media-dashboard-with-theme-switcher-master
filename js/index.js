import {DarkMode, LightMode} from "./class.js";
const switchButton = document.getElementsByClassName("switch_button")[0];
const darkMode = new DarkMode();
darkMode.activate();
switchButton.addEventListener("change", (ev) => {
    
    if (switchButton.checked) {
        const lightMode = new LightMode();
        lightMode.activate();
    } 
    else {
        const darkMode = new DarkMode();
        darkMode.activate();    
    }
});