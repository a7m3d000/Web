// Variables
var body = document.body,
    element = document.createElement("div"),
    myDiv = body.appendChild(element);


//Styling
body.style.margin = "0px";
body.style.padding = "0px";
body.style.fontFamily = "tahoma";

myDiv.style.width = "250px";
myDiv.style.height = "250px";
myDiv.style.margin = "130px auto"
myDiv.style.fontSize = "100px";
myDiv.style.fontWeight = "bold";
myDiv.style.backgroundImage = "linear-gradient( 140deg, #fc7519 20%, #fb7419 35%, #bd1629 80%, #9c1036 100%)";
myDiv.style.display = "flex";
myDiv.style.justifyContent = "center";
myDiv.style.alignItems = "center";
myDiv.style.borderRadius = "50%";
myDiv.style.color = "white";
myDiv.style.boxShadow = "0px 0px 30px 15px rgba(0, 0, 0, 0.21)";
myDiv.style.border = "7px solid rgb(247, 247, 247)";



// JS Code
myDiv.setAttribute("class", "div");
myDiv.textContent = "10";

function count() {
    if (myDiv.textContent <= 0) {
        myDiv.style.backgroundColor = "red";
        myDiv.style.fontSize = "50px";
        myDiv.textContent = "Done...";
        clearInterval(int);
        
    } else {
        myDiv.textContent = myDiv.textContent - 1;

    }
}

// Set Interval Function
var int = setInterval(count, 1000);
