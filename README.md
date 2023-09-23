# web-calculator
01. Make it a Node.js project with app.ts by giving the following command:
02. Install types for Node.js

     1. npm init -y
     2. npm i @types/node -D
03. Create .gitignore file

04. add node-modules in .gitignore file

05. Create file app.ts Give the following command: install

     01. npm i inquirer
     02. npm i --save-dev @types/inquirer
     03. npm install chalk
     04. npm i --save-dev @types/chalk
     05. npm i node-banner
     06. npm i gradient-string
     07. npm i --save-dev @types/gradient-string
06. usage of node banner...// import showBanner from "node-banner";

    01. (async () => { await showBanner('The Title', 'This is a suitable tagline'); })();
    02. (async () => { await showBanner('WebCalculator', gradient.rainbow('This calculator can perform addition, multiplication, subtractions and division operation. kindly inter your 1st number now. ')); })();
 07. usage of node banner.....// import gradient from "gradient-string";// gradient.red (any requirements)

 08. use the validate function for conforming numbers instead of NAN.

     validate: (input) => { if (isNaN(input)) return "Kindly enter your number here:"; return true; } 8. use the calculator again and again.

 09. change in the package.json file

     01. "type": "module",
     02. "bin": "./index.js",
     03. "version": "1.0.1",
 10. add the following statement at the top of the code in the app.ts file

 11. #! /usr/bin/env node

 12. tsc --init

 13. changing in the tsconfig.json file

     01. "target": "es2020", /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */
     02. "module": "NodeNext", /* Specify what module code is generated. */
     03. "moduleResolution": "NodeNext", /* Specify how TypeScript looks up a file from a given module specifier. */
     4. "outDir": "./dist",  

 14. tsc

 15. node app.js

 16. publish your project on npm---/

      npm publish

  17. for local use of published projects use the following command---/

       npx projectName.
how to publish your project on npm

https://blog.shahednasser.com/how-to-create-a-npx-tool/
