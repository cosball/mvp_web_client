import S3 from 'aws-s3'

import EncryptionService from './_EncryptionService'

const _service = {
    uploadFileS3: function uploadFileS3(dirName) {
        try {
            var keyid = EncryptionService.decrypt(process.env.VUE_APP_AWS_ACCESSKEYID)
            var secret = EncryptionService.decrypt(process.env.VUE_APP_SECRET_ACCESS_KEY)

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
