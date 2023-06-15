const fs = require('fs')
const sass = require('sass')
console.log('Ejecting editor style:', __dirname + '/src/scss/index.scss')
const result = sass.compile(__dirname + '/src/scss/index.scss')
fs.writeFile(__dirname + '/editor-style.css', result.css, (err) => console.error(err))
