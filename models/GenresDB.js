"use strict"

var db = require('../db-connections');
class GenresDB{
    getAllGenres(callback){
        var sql = "SELECT * from music_website.genre_details";
        db.query(sql, callback);
    }
}

module.exports = GenresDB;