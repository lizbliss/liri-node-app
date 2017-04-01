//Dependencies
var keys = require("./keys.js");
var fs = require("fs");


//What it will do
function runTweets() {
    console.log("runTweets");
    //intialize twitter client using the twitter pkg
    //set up what we want to query
    //capture the response
    //format the response (save it into a var)
    //display response
}

function spotifyThisSongWith(song) {
    console.log("spotifyThisSongWith", song);
}

function locateMovieInfoWith(title) {
    console.log("locateMovieInfoWith", title);
}

function runRobot() {
    console.log("runRobot");


    //will read from random.txt
    fs.readFile("random.txt", "utf8", function(error, data) {
        if (error)
            console.log(error);
        else {
            var dataArr = data.split(",");
            // We will then re-display the content as an array for later use.
            console.log(dataArr);
            //call the function in the file
            var robot1 = dataArr[0];
            var robot2 = dataArr[1];

            switch (robot1) {
                case "my-tweets":
                    runTweets();
                    break;

                case "spotify":
                    spotifyThisSongWith(robot2);
                    break;

                case "movie":
                    locateMovieInfoWith(robot2);
                    break;

                default:
                    console.log("Please check text file.");
            }
        }
    });
}

// -------------------- Entry Point--------------------------

//getting the users input
var input = process.argv;

var command = input[2];
var option = input[3];

switch (command) {
    case "my-tweets":
        runTweets();
        break;

    case "spotify":
        if (!option)
            console.log("Please input a song.");
        else
            spotifyThisSongWith(option);
        break;

    case "movie":
        if (!option)
            console.log("Please input a movie.");
        else
            locateMovieInfoWith(option);
        break;

    case "do-it":
        runRobot();
        break;

    default:
        console.log("Please enter a command.");
}

// -------------------- End Entry Point--------------------------


// // Then run a request to the OMDB API with the movie specified
// request("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&r=json", function(error, response, body) {

//   // If the request is successful (i.e. if the response status code is 200)
//   if (!error && response.statusCode === 200) {

//     // Parse the body of the site and recover just the imdbRating
//     // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
//     console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
//   }
// });
