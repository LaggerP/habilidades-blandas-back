require('dotenv').config()

module.exports = {
    secret: process.env.HB_AUTH_SECRET,
    expires: process.env.HB_AUTH_EXPIRES,
    rounds: process.env.HB_AUTH_ROUNDS
}
