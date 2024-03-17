alert("wooh hoo");
/*selects the element with the id and changes it from the js file, use id vs class bc id u cant have multiple*/
let headingElement = document.getElementById("words")
headingElement.innerText = "Not Todo";

/*you can select anything like u do in css, .name_thing*/
let headingElement1 = document.querySelector(".button");

let input = document.getElementById("inputs");
let submit = document.getElementById("submit");
let items = document.getElementById("items");

/*let list = []*/

/*making functions*/
function addToDoItem() {
    let todoItem = input.value;
    let p = document.createElement("p");
    p.innerText = todoItem;

    /*generate a button*/
    let removeButton = document.createElement("button");
    removeButton.innerText = "Remove";

    /*in html its like all appended on top of one another n stuff sothis just looks at the id and finds the end*/
    items.appendChild(p);
    items.appendChild(removeButton);
    

    function removeItem() {
        p.remove();
        removeButton.remove();
    }

    removeButton.addEventListener("click", removeItem);

    /* smushing input on one line
    items.innerText += todoItem*/

    /*<pre id = items>shows up all space stuff<pre>*/
}

/*when submit is clicked on*/
submit.addEventListener("click", addToDoItem);

let nameText = document.getElementById("name");
let nameInput = document.getElementById("nameInput");
let submitName = document.getElementById("submitName");

function changeName() {
    nameText.innerText = nameInput.value;
    localStorage.setItem("name", nameInput.value)
}

/*in global part*/
nameText.InnerText = localStorage.getItem("name");


/* NOTES
- you dont need to use semi-colons but stay consistent 
- ctrl / comments out ur code

Variable stuff, dynamically typed (infer it)
let test = "hello";
let test1 = 45.5 + 32.1;
let bool = false;

If Statements:
if (test1 > 50) {
    alert("greater");
} else {
    alert("less");
}

Arrays
- mutable size, can have different types in the same list (but be careful when looping over)
instantiate a list
let todos = []

add to list
todos.push("do hw")
todos.push("wash dishes")

remove from end
todos.pop()

todos; --> ["do homework"]
*/