var movie = JSON.parse(movie)

//Javascript:
// for (i = 0; i < movie.length; i++) {
//     document.getElementById("movie").innerHTML += "<div id='movie-box'><div class='image-box'><img src='IMG/" +
//         movie[i].img + "'></div><div id ='text-box'><h2><b>" + movie[i].name + "</b></h2><p>" + movie[i].description + "</p><div id='like-box'><input type='Button' id='like-button' value='Like'></input><h3 id='like-counter'>0</h3></div></div></div>";
// }

//Loop to get the JSON data into the HTML. 
$(document).ready(function () {
    for (i = 0; i < movie.length; i++) {
        $("#movie").append("<div id='movie-box'><div class='image-box'><img src='IMG/" + movie[i].img +
            "'></div><div id ='text-box'><h2><b>" + movie[i].name +
            "</b></h2><p>" + movie[i].description +
            "</p><div id='like-box'><input type='Button' id='like-button' value='Like'></input><h3 id='like-counter'>" + movie[i].likes +
            "</h3></div></div></div>");

        $("#like-button").on("click", function () {
            $("#like-counter").append(movie[i].likes)

        });



    }









});







// $("#like-button").on('click', function () {
//     $("like-counter").append("hello")

// });

// var count = 0;

// $("#like-button").click(function () {
//     count++;
//     $("like-counter").html("My current count is: " + count);
// });










// for (let j = 0; j < movie.length; j++) {

//     $(".like-btn:eq(" + j + ")").click(function () {
//         $(".likeAmount:eq(" + j + ")").text(MovieFactory[j].Likes + 1);
//         $("#logo-img" + j + "").html("<i id='logo-img' class='fas fa-thumbs-up'></i>");
//     });











// };


// for (i = 0; i < movie.length; i++) {

//     $("#like-button").on("click", function () {
//         $("#like-counter").text(movie[i].likes + 1);

//     })

//     console.log(movie[i].likes)
// }




// for(let j=0; j<movie.length; j++) {

// 	$("#like-button:eq("+j+")").click(function(){
// 		$("#like-counter:eq("+j+")").text(MovieFactory[j].Likes+1);
//     $("#logo-img"+j+"").html("<i id='logo-img' class='fas fa-thumbs-up'></i>");
// 	