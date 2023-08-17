function myFunction() {
  var x = document.getElementById("navbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }

}

function goPage2(){
  document.getElementById('comment').style.display='inline-block';
}

function hide(){
  document.getElementById('comment').style.display='none';

}