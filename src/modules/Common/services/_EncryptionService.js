import crypto from 'crypto'

const _service = {
    encrypt: function encrypt(text) {
        try {
            // console.log('encrypt:' + text)
            let iv = crypto.randomBytes(Number(process.env.VUE_APP_IV_LENGTH))
            let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(process.env.VUE_APP_ENCRYPTION_KEY), iv)
            let encrypted = cipher.update(text)

            encrypted = Buffer.concat([encrypted, cipher.final()])

            return iv.toString('hex') + ':' + encrypted.toString('hex')
        } catch (err) {
            console.log(err)
            return ''
        }
    },
    decrypt: function decrypt(text) {
        try {
            // console.log('decrypt:' + text)
            let textParts = text.split(':')
            let iv = Buffer.from(textParts.shift(), 'hex')
            let encryptedText = Buffer.from(textParts.join(':'), 'hex')
            let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(process.env.VUE_APP_ENCRYPTION_KEY), iv)
            let decrypted = decipher.update(encryptedText)

            decrypted = Buffer.concat([decrypted, decipher.final()])

            return decrypted.toString()
        } catch (err) {
            console.log(err)
            return ''
        }
    }
}

export default _service
