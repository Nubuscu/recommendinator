const recommendations = require('../controllers/recommendations')
const auth = require('../../lib/auth')
const data = require('../../lib/data')
const path = data.path + '/recommendinate'
module.exports = function (app) {
    app.route(path+'/from_playlist').post(auth.hasSpotifyToken, recommendations.playlistFromPlaylist)
    // app.route(auth.path+'/recommendinate').get(auth.rejectAuth, recommendations.generate);
    app.route(path+'/from_genres').post(auth.hasSpotifyToken, recommendations.playlistFromGenres)
};