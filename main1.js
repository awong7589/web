let dozed_off = document.getElementById("looking_up")
let added_text = document.getElementById("added_text")
let intro_buttons= document.getElementById("intro_buttons")

dozed_off.addEventListener("click", wake_up)

function wake_up() {
    dozed_off.removeEventListener("click", wake_up)
    dozed_off.src = "question.png"
    let p = document.createElement("p")
    p.innerText = "Oh look, here's some options for you to explore. Click on these buttons!"
    added_text.appendChild(p)

    let button1 = document.createElement("a")
    let button2 = document.createElement("a")
    button1.innerText = "About Me"
    button1.href = "about.html"
    button1.classList.add("button")
    button2.innerText = "Projects/Work"
    button2.href = "projects.html"
    button2.classList.add("button")
    intro_buttons.appendChild(button1)
    intro_buttons.appendChild(button2)

    /*<a class = "button" href="about.html">About Me</a>
        <a class = "button" href="projects.html">Projects/Work</a>*/
}