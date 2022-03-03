// Complete Day 1 goals here
let songs = ["Warriors", "Natrual", "Inferno","The Weapon of the Faithful"];
function displaySongInfo() {
  // Complete the Day 2 goals inside this function
  for(int i = 0; i < songs.length; i++ ){
    $(".title").append(songs[i]);
  }
}

function emptySongInfo() {
  /* this function empties the divs each time the button is 
  clicked so that your playlist does not repeatedly add the data
  too many times. Try commenting out this function call to see 
  what happens without it! */
  $(".songs").empty();
  $(".images").empty();
  $(".artists").empty();
  $(".lengths").empty();
  $(".links").empty();
}

function addSongInfo() {
  // Complete Day 3 goals inside this function
}

$("#add").click(function () {
  emptySongInfo();
  addSongInfo();
  displaySongInfo();
});

displaySongInfo();
