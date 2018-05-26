//create homerVotes
var homerResult = document.getElementsByClassName("homerResults")[0];

var homerVotes = document.createElement("h2");

var homerVotesNumber = document.createTextNode(sessionStorage.homerCount);

homerVotes.appendChild(homerVotesNumber);

homerResult.appendChild(homerVotes);

//create spongbobVotes
var homerResult = document.getElementsByClassName("spongebobResults")[0];

var spongbobVotes = document.createElement("h2");

var spongbobVotesNumber = document.createTextNode(sessionStorage.spongebobCount);

spongbobVotes.appendChild(spongbobVotesNumber);

homerResult.appendChild(spongbobVotes);

var winner = "";
if (sessionStorage.homerCount === undefined || sessionStorage.spongebobCount === undefined) {
  winner = "unknown"
  sessionStorage.homerCount = 0;
  sessionStorage.spongebobCountCount = 0;
} else if (sessionStorage.homerCount > sessionStorage.spongebobCount) {
  winner = "Homer Simpson"
} else if (sessionStorage.homerCount < sessionStorage.spongebobCount) {
  winner = "SpongeBob SquarePants"
} else {
  winner = "it's a tie"
}

//assign winner
var winnerElement = document.getElementsByClassName("winner")[0];

var winnerTag = document.createElement("h2");

var winnerContent = document.createTextNode(winner);

winnerTag.appendChild(winnerContent);

winnerElement.appendChild(winnerTag);

// reset
var resetClick = document.getElementsByClassName('resetBtn')[0];

resetClick.onclick = function() {
  alert("votes will be reset")
  sessionStorage.clear();
  window.location = "index.html";
  return true;
}
