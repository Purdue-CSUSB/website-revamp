const MongoClient = require('mongodb').MongoClient;

let client;

const loadClient = async () => {
    if (client) {
        return client;
    }
    try {
        const client = new MongoClient(uri);
    } catch (err) {
        console.log(err)
    }
    return client;
};

module.exports = loadClient;