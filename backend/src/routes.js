const express = require('express')
const routes = express.Router()

const TweetController = require('./controllers/tweetController')
const LikeController = require('./controllers/likeController')

routes.get('/Tweets', TweetController.index)

routes.post('/Tweets', TweetController.store)

routes.post('/likes/:id', LikeController.store)
    
module.exports = routes