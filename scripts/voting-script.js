var homerCount = sessionStorage[0]

var voteClickHomer = document.getElementsByClassName('votebtn')[0];

voteClickHomer.onclick = function() {
  homerCount++;
  console.log(homerCount);
  alert("Thank you for voting");
  window.location = "index.html";
}

var voteClickSpongebob = document.getElementsByClassName('votebtn')[1];

voteClickSpongebob.onclick = function() {

  alert("Thanks you for voting");
  window.location = "index.html";
}
