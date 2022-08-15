"use strict";
const GenresDB = require('../models/GenresDB');

var genresDB = new GenresDB();

function getAllGenres(request, respond){
    genresDB.getAllGenres(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

module.exports = {getAllGenres};