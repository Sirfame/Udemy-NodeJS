import * as greetr from 'greet';

greetr.greet();

// https://stackoverflow.com/questions/39436322/node-js-syntaxerror-unexpected-token-import
// This will result in a SyntaxError because NodeJS is not yet supporting all features of ES6 by default. In this case, this is the import keyword.