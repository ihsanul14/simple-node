import * as f from 'fs'
const fs:any = f
const env = JSON.parse(fs.readFileSync('./config.json'))

export default env
