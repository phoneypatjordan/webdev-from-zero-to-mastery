var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.getElementById("random");


function setGradient(){
     body.style.background = 
     "linear-gradient(to right, "
     + color1.value 
     + ", " 
     + color2.value 
     + ")"; 

     css.textContent = body.style.background + ";";
}

function rgbToHex(r,g,b){
          r = r.toString(16);
          g = g.toString(16);
          b = b.toString(16);
     
          if (r.length == 1)
          r = "0" + r;
          if (g.length == 1)
          g = "0" + g;
          if (b.length == 1)
          b = "0" + b;
     
          return "#" + r + g + b;
   }

function randomColor(){
     var c1 = {
          r: Math.floor(Math.random()*255),
          g: Math.floor(Math.random()*255),
          b: Math.floor(Math.random()*255)
        };
     var c2 = {
          r: Math.floor(Math.random()*255),
          g: Math.floor(Math.random()*255),
          b: Math.floor(Math.random()*255)
        };


     c1.rgb = "rgb("+c1.r+","+c1.g+","+c1.b+")";
     c2.rgb = "rgb("+c2.r+","+c2.g+","+c2.b+")";

     body.style.background = 
     "linear-gradient(to right, "
     + c1.rgb
     + ", " 
     + c2.rgb
     + ")";  

     css.textContent = body.style.background + ";";

     color1.value = rgbToHex(c1.r, c1.g, c1.b);
     color2.value = rgbToHex(c2.r, c2.g, c2.b);         
}

setGradient();

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomButton.addEventListener("click", randomColor);
