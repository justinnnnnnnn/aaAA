
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
    const newP = document.createElement("p");
  
    const newContent = document.createTextNode(string);
  
    newP.appendChild(newContent);

    htmlElement.appendChild(newP)
};

htmlGenerator('Party Time.', partyHeader);
htmlGenerator("I <3 Vanilla DOM manipulation.", partyHeader);