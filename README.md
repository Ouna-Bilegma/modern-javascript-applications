# modern-javascript-applications
# Title: Anatomy of a Modern JavaScript Application

- Repository: `modern-javascript-application`
- Type of Challenge: `learning`
- Duration: `5 days`
- Deadline: `21/8/2020`
- Deployment strategy :
  - Github page, or
  - Netlify
- Team challenge : `solo`

## Learning Objectives

You now know JavaScript well enough to write simple and complex frontend applications, saving data locally if needed, and querying an API as well. You know the language, and you know its power, but something is still missing. The code seems convoluted and all over the place. Is this really how established developers work, you may wonder?  
At the end of this challenge you will:

- be able to organize your code with multiple functions
- be able to organize your code in multiple files
- be able to use a package manager to import third-party libraries in your code
- be able to use linters and formatters to make your code cleaner and more bug-free
- be able to optimize your code to be shipped to a browser faster

## Your mission

Your Weather App feels pretty solid right now. It works, and it does its job well. But you want to publish the code publicly and use it to show your skills to potential employers. There is some work that needs to be done 🦾

## Instructions

There will be a lot to take here. It's a lot of so-called _tooling_ that doesn't impact functionality directly, but it can improve the quality of your applications immensely.  
Let's take this short journey step by step, day by day.

### Day 1 - Refactor

1. Copy all your files over from the Weather App
2. Take your existing `script.js` from the Weather App, and reorganize (_refactor_) the code in as many functions as you can (try to have at least 2-3 functions). Do it one step at a time: you can start from the outside and go in, or from the inside out. A few principles to keep in mind:
   - Functions should do one thing
   - Function names should say what they do
   - Avoid Side Effects (keep as many functions as possible [_pure_](https://www.notion.so/mjsarfatti/Enough-JS-to-Be-Dangerous-d3be5beb31ad4778ada7161fb2cc1a7b#5bada0ad2ac84f56a84871dbfa28f714))
   - Functions can often be just a few lines long
3. There is no 3! That's all for day 1 :) If you want to know more about good practices, take a peek here (but don't stress too much, some of that stuff is quite advanced): https://github.com/ryanmcdermott/clean-code-javascript#functions

_Do you have time to spare? See if you can help someone, add "nice-to-have" features to your app, or refactor another app of yours!_

### Day 2 - JavaScript Modules

It's a lot of functions, in a long file. Guess what? In modern JavaScript, you can divide your code into multiple files for better organization, and import/export things (functions, variables, classes) from one file to another.

1. Divide your code into multiple files. If you don't know how, start with one function per file and name the file after the function. Don't worry about exporting/importing, for now just make a file structure that kind of makes sense and reflects your code.  
   _Just remember: keep `script.js` around, it will still be the origin file for everything_
2. Done? Now rename `script.js` to `index.js` - this is an industry convention and it ensures better compatibility with several tools (you'll see 😉)
3. Read up about "ES6 Modules" and the "ES6 import/export syntax"  
   _Note: If tutorials or guides talk about `npm`, or ask you to add a `package.json` to your project, or ask you to run `$ npm install somethingsomething` ignore them, we'll see all that in two days. Find out how to use "modules" in the browser directly._
4. Apply the import/export syntax to your JavaScript code. Don't forget to update your `index.html` as necessary since the previous way of including JavaScript will not work anymore (hint: you'll need to add `type="module"` somewhere)

### Day 3 - Modules and the Browser

If your code is divided between, say, 8 different files and you use JavaScript modules, the browser will have to download 8 files instead of one. Moreover, older browsers don't support modules.  
For this reason (and more) most JavaScript projects these days use something called a "bundler".

A bundler is a program that you run from the command line. At its core, a bundler takes your JavaScript files, reads all the import and export declarations, and generates a single output JavaScript file (often minified) that can be natively read by any browser. Kind of like what SASS does when it turns a number of `.sass/.scss` files into one compressed CSS file.

You really get the best of both worlds: you can keep your code well structured and organized, and the browser can easily parse it as a single file.

Popular bundlers include Parcel, Webpack, Rollup, and Browserify.

1. Choose a bundler and use it from the command line (CLI) to generate the output JS file (often named `main.js`, or `bundle.js`). Make sure you use the CLI version of the bundler, don't do anything **npm**-related yet.  
   _Don't know which bundler to pick? Webpack is the most popular, but not always easy to configure; Parcel is the simplest to get started with_
2. Edit your `index.html` so that it includes `main.js`.  
   _Hint: the generated JS file doesn't use "modules" anymore, we are back at plain old JS_
3. Optional: use your bundler to watch changes so that every time you edit and save your source files, a new output file is generated.  
   _Hint: you may not need VS Code Live Server after all..._
<hr></hr>
Tried by me :sweat_smile:
