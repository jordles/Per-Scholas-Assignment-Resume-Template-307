const languages = document.querySelectorAll('div:not(#languages) > ul li');
console.log(languages);
const languageColors = {
  "Codewars": "#B1361E",
  "Github": "#181717",
  "Facebook": "#4267B2",
  "X": "#000000",
  "Google": "#DB4437",
  "LinkedIn": "#0077B5",
  "Leetcode": "#FFA116",
  "Instagram": "#E4405F",
  "HTML5": "#E34F26",
  "CSS3": "#1572B6", 
  "JavaScript": "#F7DF1E",
  "MongoDB": "#47A248",
  "Express": "#000000",
  "React": "#61DAFB",
  "Node.js": "#5FA04E",
  "Java": "#000000",
  "Python": "#3776AB",
  "Adobe Photoshop": "#31A8FF",
  "Adobe Illustrator": "#FF7C00",
  "Adobe XD": "#FF2BC2",
  "Figma": "#F24E1E"
};
let lang;
languages.forEach(language => {
  lang = language.textContent.includes(' ') ? language.textContent.replace(' ', '') : language.textContent;

  const languageName = 
    language.textContent === "Java" ? 'openjdk' :
    language.textContent === "Node.js" ? 'nodedotjs' : 
    lang.toLowerCase();
  console.log(languageName);
  const languageColor = languageColors[language.textContent];
  const iconURL = `https://simpleicons.org/icons/${languageName}.svg`;

  const iconSvg = `<div id="logo" style="mask:url(${iconURL}) no-repeat center; background-color:${languageColor}" alt="${languageName}"></div>`;

  language.innerHTML = language.parentNode.parentNode.id === 'socials' ? `${iconSvg}` : `${iconSvg} ${language.textContent}`
})