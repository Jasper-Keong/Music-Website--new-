//This function is to call the genre api and get all the genres
function getGenreData() {    
	var request = new XMLHttpRequest();    
	request.open('GET', genre_url, true);    
	//This function will be called when data returns from the web api    
	request.onload = function() {        
	//Get all the restaurant records into our restaurant array        
	genre_array = JSON.parse(request.responseText);    
	console.log(genre_array) // Output to console 
	//Call the function so as to display all genre names for "genres"
	displayGenres();
};

//This command starts the calling of the music web api    
request.send();
}

function displayGenres() {
    var table = document.getElementById("genresTable");
    var genreCount = 0;

    table.innerHTML = "";
    totalGenres = genre_array.length;
    for (var count = 0; count < totalGenres; count++) {
        var thumbnail = genre_array[count].banner;
        var name = genre_array[count].genre_name;
	var cell = '<div class="card col-md-3"><img class="card-img-top" src="' + thumbnail + '" alt="Card image cap">\
                <div class="card-body"><class="far fa-lg" style="float:left;cursor:pointer;height:30px;width:60px;" data-toggle="modal" data-target="#reviewModal" item="' + count + '>\
                <h5 style="padding-left:30px;cursor:pointer" data-toggle="modal" data-target="#genreModal" class="card-title" item="' + count + '" onClick="showGenreDetails(this)">' + name + "<br>" + "<h6 style='color: #ababab'>" + "<style='height:20px;width:20px;'>" + '</h5></div>\
                </div>'
            table.insertAdjacentHTML('beforeend', cell);
            genreCount++;
    }
}

function displaySearched() {
    var table = document.getElementById("genresTable");
    var genreCount = 0;

    table.innerHTML = "";
    totalGenres = genre_array.length;
    for (var count = 0; count < totalGenres; count++) {
        //Selecting genres with names that equate to the searched input
        if (genre_array[count].genre_name.toLowerCase().includes(document.getElementById("searchInput").value.toLowerCase())) {
            var thumbnail = genre_array[count].banner;
            var name = genre_array[count].genre_name;
	var cell = '<div class="card col-md-3"><img class="card-img-top" src="' + thumbnail + '" alt="Card image cap">\
                <div class="card-body"><class="far fa-lg" style="float:left;cursor:pointer;height:30px;width:60px;" data-toggle="modal" data-target="#reviewModal" item="' + count + '>\
                <h5 style="padding-left:30px;cursor:pointer" data-toggle="modal" data-target="#genreModal" class="card-title" item="' + count + '" onClick="showGenreDetails(this)">' + name + "<br>" + "<h6 style='color: #ababab'>" + "<style='height:20px;width:20px;'>" + '</h5></div>\
                </div>'
            table.insertAdjacentHTML('beforeend', cell);
            genreCount++;
        }
        if (document.getElementById("searchInput").value == '') {
            displayGenres();
        }
    }
}

function showGenreDetails(element) {
    var item = element.getAttribute("item");
    currentIndex = item;
    sessionStorage.setItem("genreID", currentIndex.slice(0, -27));
    window.location.href = "genre-details.html";
}

function getGenreDetailsData() { 
	var request = new XMLHttpRequest();    
	request.open('GET', genre_url, true);    
	//This function will be called when data returns from the web api    
	request.onload = function() {        
	//Get all the restaurant records into our restaurant array        
	genre_array = JSON.parse(request.responseText);    
	console.log(genre_array) // Output to console 

    let genreID = sessionStorage.getItem("genreID");
    console.log(genreID);

    document.getElementById("genre-name").textContent = genre_array[genreID].genre_name + " Music";
    document.getElementById("genre-description").textContent = genre_array[genreID].description;
    document.getElementById("genre-video").src = genre_array[genreID].video_link;
};

//This command starts the calling of the music web api    
request.send();
}