require('dotenv').config()


const AWS = require('aws-sdk')
const S3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
})

const fs = require('fs')
const key = `MBS-2021-03-01.zip`

S3.getObject({
    Bucket: process.env.AWS_S3_BUCKET,
    Key: 'MBS-2021-03-01.zip'
}).promise().then(result => {
    console.log(result)

    fs.writeFileSync(key, result.Body)
    console.log('done!')

}).catch(e => console.log('error', e))
