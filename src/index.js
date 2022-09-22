const { BlockBlobClient, AnonymousCredential } = require("@azure/storage-blob");

blobUpload = function(filename, file, url, container, sasKey) {
    var blobName = buildBlobName(filename, file);
    var login = `${url}/${container}/${blobName}?${sasKey}`;
    var blockBlobClient = new BlockBlobClient(login, new AnonymousCredential());
    const blobOptions = {
        blobHTTPHeaders: { blobContentType: 'image/png' },
    };
    
    // blockBlobClient.uploadBrowserDataToBlockBlob(file, blobOptions)
    // blobClient.UploadAsync(file, new BlobHttpHeaders{ ContentType = "jpg/png"});
    blockBlobClient.uploadBrowserData(file, blobOptions);
    console.log(blobOptions);
    
}

function buildBlobName(filename, file) {
    var ext = file.name.substring(file.name.lastIndexOf('.'));
    return filename + ext;
}
