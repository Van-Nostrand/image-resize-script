/*
this takes up to two arguments
the first is the image to convert
the second, if provided, is the height of the desired thumbnail
if no second argument is provided then this returns 4 files at assumed heights

note for self:
process.argv is the array of arguments provided when running a node script
this script is started thusly: node index.js <filename> <number|optional>
therefore, of process.argv: 
the first will be the absolute path of the node binary
the second will be the absolute path of this script
the thid will be the RELATIVE path of the file to act on
and if a fourth is passed in, then it's just a number
*/
const sharp = require('sharp');
const args = process.argv.slice(2);
const firstsplit = args[0].split('/');
const secondsplit = firstsplit[firstsplit.length - 1].split('.');
const extension = secondsplit[secondsplit.length - 1];
secondsplit.pop();
const filename = secondsplit.join('-');

const makeFile = (fullpath, filename, height, extension) => {
  sharp(fullpath)
    .resize({
      height: parseInt(height)
    })
    .toFile(`${filename}@${height}.${extension}`)
    .then(info => console.log(info))
    .catch(err => console.log(err));
}

// if no size argument is passed, assume files at 75, 150, 320, and 768 px high
if(!args[1]){
  makeFile(args[0], filename, 75, extension);
  makeFile(args[0], filename, 150, extension);
  makeFile(args[0], filename, 320, extension);
  makeFile(args[0], filename, 768, extension);
}
// if size argument is passed, make one file at that size
else if (args[1] && !isNaN(parseInt(args[1]))) {
  makeFile(args[0], filename, args[1], extension);
}
// if the user tried to pass anything other than a number
else if (isNaN(parseInt(args[1]))) {
  console.log("you didn't pass a valid number in, try again");
}