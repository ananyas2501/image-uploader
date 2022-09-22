const { BlockBlobClient, AnonymousCredential } = require("@azure/storage-blob");

blobUpload = function(file, url, container, sasKey) {
    var blobName = buildBlobName(file);
    var login = `${url}/${container}/${blobName}?${sasKey}`;
    var blockBlobClient = new BlockBlobClient(login, new AnonymousCredential());
    const blobOptions = {
        blobHTTPHeaders: { blobContentType: 'image/png' },
    };
    
    // blockBlobClient.uploadBrowserDataToBlockBlob(file, blobOptions)
    // blobClient.UploadAsync(file, new BlobHttpHeaders{ ContentType = "jpg/png"});
    blockBlobClient.uploadBrowserData(file, blobOptions);
    
}

function buildBlobName(file) {
    var filename = file.name.substring(0, file.name.lastIndexOf('.'));
    var ext = file.name.substring(file.name.lastIndexOf('.'));
    return filename + '_' + Math.random().toString(16).slice(2) + ext;
}
