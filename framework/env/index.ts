const fs = require('fs')
const env = JSON.parse(fs.readFileSync('./config.json'))

module.exports = env
