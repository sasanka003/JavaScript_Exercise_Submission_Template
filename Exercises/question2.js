//Question 2
function question2(subpart) {
    let code = ``;

    // Set code based on selected subpart
    switch (subpart) {
      case '2.01':
        code = `
        //Your JavaScript code to print an error goes here.
        console.error("Use console.error() method to print an error.");
        `;
        break;
      case '2.02':
        code = `
        //Your JavaScript code for question 2 part 2 goes here
        console.log("Use console.log() method to print answer of the question 2 part 2.");
        `;
        break;
      
      default:
        code = ``;
        break;
    }

    const consoleOutput = eval(code);
    document.getElementById('code').value = code;
    document.getElementById('output').innerHTML = consoleOutput;
  }

  // Function to handle subpart change
  function changeSubpart() {
    consoleOutput.splice(0);
    const selectedSubpart = document.getElementById('subpart-select').value;
    question2(selectedSubpart);
    updateConsoleOutput();
    
  }

  question2('2.01'); // Set default subpart
  updateConsoleOutput();
