var express = require("express");

var genreController = require('./controllers/genreController');

var app = express();

app.use(express.static("./public"));
app.use(express.json());

app.route('/genre_details').get(genreController.getAllGenres);

app.listen(3000, () => console.log("web server running @ http://127.0.0.1:3000"));
