const sharp = require('sharp');
const args = process.argv.slice(2);
const splitstring = args[0].split('.');

sharp(args[0])
  .resize({
    height: parseInt(args[1])
  })
  .toFile(`${splitstring[0]}-thumbnail.${splitstring[1]}`)
  .then(info => console.log(info))
  .catch(err => console.log(err));