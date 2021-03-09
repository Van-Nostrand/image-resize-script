const sharp = require('sharp');
const args = process.argv.slice(2);
const firstsplit = args[0].split('/');
const splitstring = firstsplit[firstsplit.length - 1].split('.');
const extension = splitstring[splitstring.length - 1];
splitstring.pop();
const filename = splitstring.join('-');
const imgsizename = `@${args[1]}`;
const fullFileName = filename + imgsizename + "." + extension;

sharp(args[0])
  .resize({
    height: parseInt(args[1])
  })
  .toFile(fullFileName)
  .then(info => console.log(info))
  .catch(err => console.log(err));