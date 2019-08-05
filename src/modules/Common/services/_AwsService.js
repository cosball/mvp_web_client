import S3 from 'aws-s3'
import crypto from 'crypto'

const IV_LENGTH = 16
const ENCRYPTION_KEY = 'Writing objects: 100% (5/5), 600'

const _service = {
    encrypt: function encrypt(text) {
        // console.log('encrypt:' + text)
        let iv = crypto.randomBytes(IV_LENGTH)
        let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(ENCRYPTION_KEY), iv)
        let encrypted = cipher.update(text)

        encrypted = Buffer.concat([encrypted, cipher.final()])

        return iv.toString('hex') + ':' + encrypted.toString('hex')
    },
    decrypt: function decrypt(text) {
        // console.log('decrypt:' + text)
        let textParts = text.split(':')
        let iv = Buffer.from(textParts.shift(), 'hex')
        let encryptedText = Buffer.from(textParts.join(':'), 'hex')
        let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(ENCRYPTION_KEY), iv)
        let decrypted = decipher.update(encryptedText)

        decrypted = Buffer.concat([decrypted, decipher.final()])

        return decrypted.toString()
    },
    uploadFileS3: function uploadFileS3(dirName) {
        try {
            var keyid = this.decrypt(process.env.VUE_APP_AWS_ACCESSKEYID)
            var secret = this.decrypt(process.env.VUE_APP_SECRET_ACCESS_KEY)

            keyid = keyid.substring(3, keyid.length - 3)
            secret = secret.substring(3, secret.length - 3)

            // console.log(keyid + ':' + secret)

            return new S3({
                bucketName: process.env.VUE_APP_BUCKET_NAME,
                dirName: dirName,
                region: process.env.VUE_APP_REGION,
                accessKeyId: keyid,
                secretAccessKey: secret,
                s3Url: process.env.VUE_APP_S3_URL,
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export default _service
