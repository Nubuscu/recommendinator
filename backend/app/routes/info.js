const info = require('../controllers/info')
const auth = require('../../lib/auth')
const data = require('../../lib/data')
const path =  data.path + '/info'
module.exports = function (app) {
    app.route(path+'/genres').get(auth.hasSpotifyToken, info.seedGenres)
}