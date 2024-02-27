const sections = document.getElementsByTagName("section");
export function lightOrNotLight () {
for (const section of sections) {
    section.addEventListener("mouseover", () => {
        section.classList.add("lightSectionHover");
    });
}}