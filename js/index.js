import {lightOrNotLight} from "../js/eventHover.js";
const switchButton = document.getElementsByClassName("switch_button")[0];
switchButton.addEventListener("change", (ev) => {
    const body = document.getElementsByTagName("body")[0];
    const articleContent = document.getElementsByClassName("light_dark")[0];
    const section = document.getElementsByTagName("section");
    const textBold = document.getElementsByClassName("textBold");
    const textElements = document.getElementsByClassName("text");
    const backgroundTop = document.getElementsByClassName("backgroundColorTop")[0];

    
    if (switchButton.checked) {
        body.classList.add("lightTheme");
        backgroundTop.classList.add("lightThemeBackgroundTop");
        articleContent.classList.add("articleLightTheme");
        for(const elemsections of section) {
        elemsections.classList.add("elemSectionLight");
        }
        for(const elembold of textBold) {
        elembold.classList.add("elemBoldLight");
        }
        for (const elem of textElements) {
            elem.classList.add("elemTextLight");
        }
        lightOrNotLight();
    } 
    else {
        body.classList.remove("lightTheme");
        backgroundTop.classList.remove("lightThemeBackgroundTop");
        articleContent.classList.remove("articleLightTheme");
        for(const elemsections of section) {
        elemsections.classList.remove("elemSectionLight");
        }
        for(const elembold of textBold) {
        elembold.classList.remove("elemBoldLight");
        }
        for (const elem of textElements) {
            elem.classList.remove("elemTextLight");
        }   
    }
});
