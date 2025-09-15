const ImageKit = require("imagekit")

const imageKit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLICKEY,
    privateKey: process.env.IMAGEKIT_PRIVATEKEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
})

async function uploadFile(file,fileName){
    const result = await imageKit.upload({
        file:file,
        fileName:fileName,
    })
    return result;
}

module.exports={
    uploadFile,
}