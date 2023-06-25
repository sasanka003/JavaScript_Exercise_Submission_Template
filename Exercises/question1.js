//Question 1
function question01() {
    const code = `
    //Your JavaScript code for question 1 goes here
    console.log("Use console.log() method to print answer of the first question.");
    `;
    const consoleOutput = eval(code);
    document.getElementById('code').value = code;
    document.getElementById('output').innerHTML = consoleOutput;
}
