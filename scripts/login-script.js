var submitLogin = document.getElementById("submit");

submitLogin.onclick = function() {
  var keyValue = document.getElementsByName("key")[0].value;
  // console.log(keyValue);

  if (typeof keyValue[0] === "string" && ((keyValue[1] * keyValue[2]) % 2 === 0)) {
    // alert("Key Confirmed!")
    window.location = "vote.html";
    // alert("Key Confirmed!");
    return false;
  } else if (keyValue === "admin1234") {
    window.location = "results.html";
    return false;
  } else {
    alert("Invalid Key!");
    return false;
  }
};
