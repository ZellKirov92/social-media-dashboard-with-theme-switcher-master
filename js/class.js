export class DarkMode {
    constructor() {
      this.bgColor = 'hsl(230, 17%, 14%)';
      this.topBgPattern = 'hsl(232, 19%, 15%)';
      this.cardBg = 'hsl(228, 28%, 20%)';
      this.text = 'hsl(228, 34%, 66%)';
      this.whiteText = 'hsl(0, 0%, 100%)';
    }
  
    activate() {
        const body = document.getElementsByTagName("body")[0];
        const articleContent = document.getElementsByClassName("light_dark")[0];
        const section = document.getElementsByTagName("section");
        const textBold = document.getElementsByClassName("textBold");
        const textElements = document.getElementsByClassName("text");
        const backgroundTop = document.getElementsByClassName("backgroundColorTop")[0];
        body.style.backgroundColor = this.bgColor;
        backgroundTop.style.backgroundColor = this.topBgPattern;
        articleContent.style.backgroundColor = this.bgColor;
        for(const elemsections of section) {
        elemsections.style.backgroundColor = this.cardBg;
        elemsections.addEventListener("mouseover", () => {
          elemsections.style.backgroundColor = 'hsl(228, 12%, 44%)';
        });
        elemsections.addEventListener("mouseout", () => {
          elemsections.style.backgroundColor = this.cardBg;
        });
        }
        for(const elembold of textBold) {
        elembold.style.color = this.whiteText;
        }
        for (const elem of textElements) {
            elem.style.color = this.whiteText;
    }
  }
}

export class LightMode {
    constructor() {
      this.bgColor = 'hsl(0, 0%, 100%)';
      this.topBgPattern = 'hsl(225, 100%, 98%)';
      this.cardBg = 'hsl(227, 47%, 96%)';
      this.text = 'hsl(228, 12%, 44%)';
      this.whiteText = 'hsl(230, 17%, 14%)';
    }
  
    activate() {
        const body = document.getElementsByTagName("body")[0];
        const articleContent = document.getElementsByClassName("light_dark")[0];
        const section = document.getElementsByTagName("section");
        const textBold = document.getElementsByClassName("textBold");
        const textElements = document.getElementsByClassName("text");
        const backgroundTop = document.getElementsByClassName("backgroundColorTop")[0];
        body.style.backgroundColor = this.bgColor;
        backgroundTop.style.backgroundColor = this.topBgPattern;
        articleContent.style.backgroundColor = this.bgColor;
        for(const elemsections of section) {
        elemsections.style.backgroundColor = this.cardBg;
        elemsections.addEventListener("mouseover", () => {
          elemsections.style.backgroundColor = 'hsl(228, 34%, 66%)';
        });
        elemsections.addEventListener("mouseout", () => {
          elemsections.style.backgroundColor = this.cardBg;
        });
        }
        for(const elembold of textBold) {
        elembold.style.color = this.whiteText;
        }
        for (const elem of textElements) {
            elem.style.color = this.text;
    }
  }
}
  
  const darkMode = new DarkMode();
  darkMode.activate(); 
  
  const lightMode = new LightMode();
  lightMode.activate();
  