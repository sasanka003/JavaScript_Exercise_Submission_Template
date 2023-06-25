// Capture console.log output
var consoleOutput = [];
var originalConsoleLog = console.log;

console.log = function() {
var message = Array.from(arguments).map(convertToString).join(" ");
consoleOutput.push(message);
originalConsoleLog.apply(console, arguments);
};

// Update the <div> element with console output
function updateConsoleOutput() {
var consoleDiv = document.getElementById("output");
consoleDiv.innerHTML = consoleOutput.join("<br>");
consoleOutput.splice(0); // Clear the consoleOutput array
}

// Convert non-string values to string representation
function convertToString(value) {
if (typeof value === "string") {
    return value;
} else if (typeof value === "object" && value !== null) {
    return JSON.stringify(value);
} else {
    return String(value);
}
}