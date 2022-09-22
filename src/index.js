const { BlockBlobClient, AnonymousCredential } = require("@azure/storage-blob");

blobUpload = function(filename, file, url, container, sasKey) {
    var blobName = buildBlobName(filename, file);
    var login = `${url}/${container}/${blobName}?${sasKey}`;
    var blockBlobClient = new BlockBlobClient(login, new AnonymousCredential());
    const blobOptions = {
        blobHTTPHeaders: { ContentType: "image/png" },
    };
    // var blobHttpHeader = new blobHTTPHeaders (ContentType = "image/jpeg" );
 
    var uploadedBlob = blockBlobClient.UploadAsync(file, blobOptions);
    // // blockBlobClient.uploadBrowserDataToBlockBlob(file, blobOptions)
    // blobClient.UploadAsync(file, blobOptions);
    // // blockBlobClient.uploadBrowserData(file, blobOptions);
    // // console.log(blobOptions);
    
}

function buildBlobName(filename, file) {
    var ext = file.name.substring(file.name.lastIndexOf('.'));
    return filename + ext;
}
