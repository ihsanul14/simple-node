import fs from 'fs'
const env = JSON.parse(fs.readFileSync('./config.json'))

export default env
