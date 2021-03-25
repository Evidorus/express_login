const config = {
    secret: process.env.API_KEY,
    port: process.env.PORT,
    mongoDB: process.env.MONGODB_URI
}

module.exports = config