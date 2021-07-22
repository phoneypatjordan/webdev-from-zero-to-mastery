var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll('li');


function inputLength() {
	var remText = input.value.replace(/ /g, "");
	return remText.length;
}

function addButton(li){
	var deleteButton = document.createElement("Button");
	deleteButton.innerHTML = "Delete";
	li.appendChild(deleteButton);
	deleteButton.onclick=removeParent;
	input.value = "";
}

function createListElement() {	
	var item = document.createElement("li");
	item.appendChild(document.createTextNode(input.value));
	ul.appendChild(item);

	addButton(item);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function removeParent(){
	this.parentNode.remove();		
}

function doneToggle(event){		
	if (event.target.tagName === "LI") {
		event.target.classList.toggle("done");	
		}		
}

li.forEach(addButton);

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", doneToggle);
