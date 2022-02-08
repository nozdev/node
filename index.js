const sdk = require('node-appwrite');

// Init SDK
let client = new sdk.Client();

let users = new sdk.Users(client);

client
.setEndpoint('https://8080-nozdev-node-fhhbo4c3f57.ws-eu30.gitpod.io/v1') // Your API Endpoint
.setProject('62005f2f2404a62159f2') // Your project ID
.setKey('bfde54c6b26c9d275e6e558b1db8962e69a7bb58d60115acc9d8782af14f326c249a18734af5836cdc51993e359f0c50bab0c46753af18f41a56c2b74e912a40eddc83b2499dac867153b9b66650ff49ce1cd7d5b004307069bb2257e1e7059f682b68bdc4996d9cf24eae0106aacb65a131f64fae867c9cb9a76b763e1b0c5e') // Your secret API key
;

let promise = users.create('unique()', 'email@example.com', 'password');

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});