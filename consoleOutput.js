var consoleOutput = [];
var originalConsoleLog = console.log;

console.log = function() {
  var message = Array.from(arguments).map(convertToString).join(" ");
  consoleOutput.push('<span class="log">' + message + '</span>');
  originalConsoleLog.apply(console, arguments);
  updateConsoleOutput();
};

console.error = function() {
  var message = Array.from(arguments).map(convertToString).join(" ");
  consoleOutput.push('<span class="error">' + message + '</span>');
  originalConsoleLog.apply(console, arguments);
  updateConsoleOutput();
};

function updateConsoleOutput() {
  var consoleDiv = document.getElementById("output");
  consoleDiv.innerHTML = consoleOutput.join(" ");
}

function convertToString(value) {
  if (typeof value === "string") {
    return value;
  } else if (typeof value === "object" && value !== null) {
    return JSON.stringify(value);
  } else {
    return String(value);
  }
}

window.onload = function() {
  consoleOutput.splice(0);
};


