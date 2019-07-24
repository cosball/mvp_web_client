import S3 from 'aws-s3'

const _service = {
	uploadFileS3: function uploadFileS3(dirName) {
        return new S3({
            bucketName: process.env.VUE_APP_BUCKET_NAME,
            dirName: dirName,
            region: process.env.VUE_APP_REGION,
            accessKeyId: process.env.VUE_APP_AWS_ACCESSKEYID,
            secretAccessKey: process.env.VUE_APP_SECRET_ACCESS_KEY,
            s3Url: process.env.VUE_APP_S3_URL,
        })
	}
}

export default _service
