const switchButton = document.getElementsByClassName("switch_button")[0];
switchButton.addEventListener("change", (ev) => {
    const body = document.getElementsByTagName("body")[0];
    const article = document.getElementsByClassName("light_dark")[0];
    const section = document.querySelectorAll("section");
    const textBold = document.getElementsByClassName("textBold");
    const textElements = document.getElementsByClassName("text");

    if (switchButton.checked) {
        body.style.backgroundColor = "hsl(0, 0%, 100%)";
        article.style.backgroundColor = "hsl(225, 100%, 98%)";
        for(const elemsections of section) {
        elemsections.style.backgroundColor = "hsl(227, 47%, 96%)";
        }
        for(const elembold of textBold) {
        elembold.style.color = "hsl(230, 17%, 14%)";
        }
        for (const elem of textElements) {
            elem.style.color = "hsl(228, 12%, 44%)";
        }
    } else {
    body.style.backgroundColor = "hsl(230, 17%, 14%)";
    article.style.backgroundImage = "linear-gradient(to bottom hsl(232, 19%, 15%) 20%, hsl(230, 17%, 14%))";
    for (const elemsections of section) {
        elemsections.style.backgroundColor = "hsl(228, 28%, 20%)";
    }
    for (const elembold of textBold) {
        elembold.style.color = "hsl(0, 0%, 100%)";
    }
    for (const elem of textElements) {
        elem.style.color = "hsl(228, 34%, 66%)";
        }
    }
});
