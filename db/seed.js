const shows = require('./shows.json')

Shows.deleteMany()
    .then(() => {shows.insertMany(shows)})


