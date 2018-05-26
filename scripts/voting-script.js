var voteClickHomer = document.getElementsByClassName('votebtn')[0];

voteClickHomer.onclick = function() {
  // if (typeof(Storage) !== "undefined") {
    if (sessionStorage.homerCount) {
      sessionStorage.homerCount = Number(sessionStorage.homerCount) + 1;
    } else {
      sessionStorage.homerCount = 1;
    }
  // }
  console.log("homer -> " + sessionStorage.homerCount);
  console.log("spongebob -> " + sessionStorage.spongebobCount);
  alert("Thank you for voting");
  window.location = "index.html";
}

var voteClickSpongebob = document.getElementsByClassName('votebtn')[1];

voteClickSpongebob.onclick = function() {
  // if (typeof(Storage) !== "undefined") {
    if (sessionStorage.spongebobCount) {
      sessionStorage.spongebobCount = Number(sessionStorage.spongebobCount) + 1;
    } else {
      sessionStorage.spongebobCount = 1;
    }
  // }
  console.log("homer -> " + sessionStorage.homerCount);
  console.log("spongebob -> " + sessionStorage.spongebobCount);
  alert("Thank you for voting");
  window.location = "index.html";
}
