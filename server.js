const movieTimes = require('./data/movie-times')
const { app } = require('./common-app')

app.set('view engine', 'pug')

app.get('/', (request, response) => {
  return response.render('index', { movieTimes })
})

app.get('/showtimes/:id', (request, response) => {
  const movie = movieTimes.find((movie) => movie.id === parseInt(request.params.id))

  return response.render('showtimes', { movie })
})

app.all('*', (request, response) => {
  return response.sendStatus(404)
})

app.listen(3011, () => {
  console.log('Listening on http://localhost:3011')
})
