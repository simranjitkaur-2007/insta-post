const ImageKit=require("@imagekit/nodejs")

const imageKit = new ImageKit({
    privateKey:"private_JXekoh43WhCb1H3i0SViGEcVYgQ="
})

async function uploadFile(buffer){
const reult=await imageKit.files.upload({
file:buffer,
fileName:"image.jpg"
})
return XPathResult;
}

module.exports=uploadFile;
