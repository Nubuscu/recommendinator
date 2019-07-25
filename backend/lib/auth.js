export const spotifyHeader = 'x-spotify-auth'
/**
 * asserts that the incoming request contains a spotify token in the headers
 */
export function hasSpotifyToken (req, res, next) {
    const token = (req.header(spotifyHeader))
    if (!token) {
        return res.sendStatus(401)
    }
    res.locals.token = token
    next()
}