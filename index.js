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

if(!args[1]){
  makeFile(args[0], filename, 75, extension);
  makeFile(args[0], filename, 150, extension);
  makeFile(args[0], filename, 320, extension);
  makeFile(args[0], filename, 768, extension);
}
else {
  makeFile(args[0], filename, args[1], extension);
}