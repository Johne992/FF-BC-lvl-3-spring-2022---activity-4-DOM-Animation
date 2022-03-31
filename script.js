function myMove() {
  var elem = document.getElementById("animate");   
  var pos = 0;
  var id = setInterval(frame, 0);
  
  function frame() {
    if (pos == 150) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + "px"; 
      elem.style.right = pos + "px"; 
    }
  }
}

document.write("<div>Hi I am div</div>");
let div = document.createElement('div');
//document.getElementById('container').innerHTML = "<div><div><div></div></div></div>";

document.createElement('div');

//document.getElementById('animate').createElement (<div id="circle"> Circle</div>)