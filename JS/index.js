var movie = JSON.parse(movies);


$(document).ready(function () {
    for (let i = 0; i < movie.length; i++) {
        displaymovies(movie[i], i)
    };

    // Movies //

    function displaymovies(movie, i) {
        $("#movie").append(`
            <div id='movie-box'>
                <div id='image-box'><img src=${movie.img}></div>
                <div id ='text-box'><h2><b>${movie.name}</b></h2><h4>${movie.genre}</h4><p>${movie.description}</p><div>
                <div id="like-box">
                    <button id="like-button${i}">🖒</button>
                    <h3 id="like-counter${i}">Likes : ${movie.likes}</h3>
                </div>
            </div>`);

    // Like Button //

        $(`#like-button${i}`).on("click", function () {
            movie.likes++;
            $(`#like-counter${i}`).text(`Likes : ${movie.likes}`);
        });
    }

    // Sort by Likes //

    $("#sort").on("click", function () {
        let sorted = movie.slice(0);
        $("#movie").text("");
        sorted.sort(sortLikes);
        for (let i = 0; i < sorted.length; i++) {
            displaymovies(sorted[i], i)
        }
    });

    function sortLikes(a, b) {
        if (a.likes < b.likes) return 1;
        else if (a.likes > b.likes) return -1;
        else return 0;
    };

});