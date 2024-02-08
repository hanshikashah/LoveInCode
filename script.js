function showMessage() {
  document.getElementById("messageContainer").style.display = "block";
  document.getElementById("heartImg").style.animation = "none";
  document.getElementById("btn").style.display = "none";
}

function noMessage() {
  alert("Oh no! Maybe next year?");
}

function yesMessage() {
  alert("yey! Love You!");
}
