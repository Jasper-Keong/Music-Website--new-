"use strict";

class Genre {
constructor(genre_id, genre_name, description, banner, video_link) {
this.genre_id = genre_id;
this.genre_name = genre_name;
this.description = description;
this.banner = banner;
this.video_link = video_link;
}

//get methods
getGenre_id() {
    return this.genre_id;
}r
getGenre_name() {
    return this.genre_name;
}
getDescription() {
    return this.description;
}
getBanner() {
    return this.banner;
}
getVideo_link() {
    return this.video_link;
}

//set methods
setGenre_name(genre_name) {
    this.genre_name = genre_name;
}
setDescription(description) {
    this.description = description;
}
setBanner(banner) {
    this.banner = banner;
}
setVideo_link(video_link) {
    this.video_link = video_link;
}

}

module.exports = Genre;