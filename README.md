<h1>Exercise Submission Webpage</h1>

![GitHub license](https://badgen.net/static/license/MIT/blue)


This repository provides a template for creating a JavaScript exercise submission webpage. Follow the instructions below to customize the webpage for your own exercise submission.<br>

<h3?>Getting Started</h3>
To get started with customizing the exercise submission webpage, follow these steps:

1. Clone this repository to your local machine using the following command:

```bash
git clone https://github.com/your-username/exercise-submission-webpage.git

```
2. Navigate to the cloned repository:

```bash
cd exercise-submission-webpage

```
3. Open the folder in a code editor of your choice.

4. Modify the HTML, CSS, and JavaScript code to create your own exercises and instructions. You can add, remove, or modify exercise buttons, change the styling, and update the JavaScript code for each exercise.

5. Save your changes.

6. Deploy the webpage to a web server or hosting platform of your choice. You can use GitHub Pages, Netlify, or any other hosting service.

7. Share the URL of your deployed exercise submission webpage with your students or participants.
<br>
<h3>Structure of the Webpage</h3><br>
The exercise submission webpage consists of the following files and directories:
<ul>
<li>index.html: This is the main HTML file that serves as the entry point for the webpage. It contains the overall structure of the webpage, including exercise buttons, stylesheets, and JavaScript files.</li>

<li>styles.css: This file contains the CSS styles that define the appearance of the webpage. You can modify the styles to match your preferences or branding.</li>

<li>script.js: This file contains the JavaScript code that handles the click events for the exercise buttons. You can update this file to include the logic for each exercise.</li>

<li>Exercises/exercise01.html: This file represents a sample exercise page. You can create similar HTML files for each exercise and place them in separate directories if needed.</li>

<li>consoleOutput.js: This file provides functionality to capture and display console output on the webpage. You can customize this file based on your requirements.</li>

<li>exercise01.js: This file contains the JavaScript code specific to Exercise 1. You can create separate JavaScript files for each exercise if necessary.</li>
</ul>
<br>
<h3>Customizing the Webpage</h3>
To customize the exercise submission webpage for your own exercises, follow these guidelines:

1. Adding Exercises
To add new exercises, you can create additional HTML files for each exercise. Place these files in separate directories if you prefer. In each HTML file, define the exercise content, instructions, and any associated JavaScript code.

For example, you can create a new exercise file named exercise3.html and place it in a directory named Exercise_3:

```html
question1.html:
<!DOCTYPE html>
<html lang="en">

<head>
  <!-- Head section content -->
</head>

<body>
  <!-- Question content and instructions -->
  <h1>Question 1</h1>
  <a href="index.html" class="back-button">Back</a>
  <!-- Question specific elements -->

  <!-- 
    Use Question 1 template for single questions
    and Question 2 template for questions with sub parts
   -->

  <textarea id="code" readonly></textarea>
  <div id="output" class="console-output"></div>

  <footer>
    <p>Copyright (c) 2023 Sasanka Premaratne</p>
  </footer>

  <script src="../consoleOutput.js"></script>

  <!-- JavaScript code specific to this question -->

</body>

</html>

```

2. Updating Exercise Buttons
To update the exercise buttons on the main page (index.html), modify the HTML code inside the <div class="exercise-buttons"> element. Add or remove <button> elements as needed and update the id attributes accordingly.

For example, if you added a new exercise with the file exercise3.html, you can add a button for it like this:

```html
<a href="Exercise_3/exercise3.html" id="exercise3">Exercise 3</a>

```
3. Customizing Styles
To customize the styles of the webpage, update the styles.css file. You can modify the existing styles or add new styles to achieve the desired appearance.

4. Modifying JavaScript Code
To modify the JavaScript code for each question, update the corresponding JavaScript file (e.g., question2.js). Customize the code inside the question2 function to match the requirements of the question.

You can also create separate JavaScript files for each question if necessary. Make sure to include these files in the corresponding HTML files using <script> tags.

<h3>Publishing the Webpage</h3>
To publish the customized exercise submission webpage, deploy the files to a web server or hosting platform of your choice. Some popular options include:<br>

<ul>
<li>GitHub Pages: If you host your repository on GitHub, you can use GitHub Pages to deploy the webpage for free. Follow the instructions here to set up GitHub Pages for your repository.</li>

<li>Netlify: Netlify is a popular hosting platform that provides easy deployment for static websites. You can connect your GitHub repository to Netlify and deploy the webpage in a few simple steps. Learn more about deploying with Netlify here.</li>

<li>Other Hosting Platforms: If you prefer a different hosting platform, you can upload the files using FTP or use the platform's deployment methods.</li>
</ul><br>
Once deployed, copy the URL of your exercise submission webpage and add it to the submission.html file button link so that you can submit a web page redirecting to your deployed webpage.<br>

Congratulations! You have now customized the exercise submission webpage to create your own JavaScript exercise submission platform. Students or participants can access the webpage, navigate through the exercises, and submit their solutions.<br>

Remember to update the footer in each HTML file with your own name or organization.<br>

For any further customization or enhancements, feel free to explore the code and make the necessary modifications.<br>

If you have any questions or need further assistance, please don't hesitate to reach out.<br>

All the best with your JavaScript exercises!<br>
