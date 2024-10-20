let div = document.querySelector("#div")
let divTitulo = document.querySelector("#divTitulo")

let newDivMenu = document.createElement("div")
newDivMenu.setAttribute("id", "newDivMenu")

let pregunta = document.querySelector("#pregunta")
let buttonSi = document.querySelector("#buttonSi")
let buttonNo = document.querySelector("#buttonNo")

let newH1 = document.createElement("h1")
let newP = document.createElement("p")
let newButton1 = document.createElement("button")
let newButton2 = document.createElement("button")

newH1.textContent = "Dating Simulator 2024"

let game = false

mainMenu()

function mainMenu() {
    div.textContent = ""
    divTitulo.append(newH1)

    let newDivElementosMenu = document.createElement("div")
    newDivElementosMenu.setAttribute("id", "newDivElementosMenu")
    newDivElementosMenu.setAttribute("class", "d-flex justify-content-center align-items-center")

    div.append(newDivElementosMenu)

    let elementosMenu = document.createElement("ul")
    elementosMenu.setAttribute("id", "elementosMenu")
    elementosMenu.setAttribute("class", "list-group")
    elementosMenu.style.listStyle = "none"
    newDivElementosMenu.append(elementosMenu)

    let liNuevaPartida = document.createElement("li")
    let buttonNuevaPartida = document.createElement("button")
    liNuevaPartida.setAttribute("class", "list-group-item")
    buttonNuevaPartida.setAttribute("class", "btn")
    buttonNuevaPartida.textContent = "Nueva partida"

    let liCargarPartida = document.createElement("li")
    let buttonCargarPartida = document.createElement("button")
    liCargarPartida.setAttribute("class", "list-group-item disabled")
    buttonCargarPartida.setAttribute("class", "btn btn disabled")
    buttonCargarPartida.textContent = "Cargar partida"

    let liExtras = document.createElement("li")
    let buttonExtras = document.createElement("button")
    liExtras.setAttribute("class", "list-group-item disabled")  
    buttonExtras.setAttribute("class", "btn btn disabled")
    buttonExtras.textContent = "Extras"

    let liSalir = document.createElement("li")
    let buttonSalir = document.createElement("button")
    liSalir.setAttribute("class", "list-group-item disabled ")
    buttonSalir.setAttribute("class", "btn btn disabled")
    buttonSalir.textContent = "Salir"

    elementosMenu.append(buttonNuevaPartida)
    elementosMenu.append(buttonCargarPartida)
    elementosMenu.append(buttonExtras)
    elementosMenu.append(buttonSalir)

    buttonNuevaPartida.addEventListener("click", charSelect)
    buttonNuevaPartida.addEventListener("mouseover", enableBlueButton)
    buttonNuevaPartida.addEventListener("mouseout", disableBlueButton)
}

function startGame() {
    game = true

    div.textContent = ""

    let preguntasJugador = ["Hola, ¿estás soltera?", "¿Quieres ser mi novia?"]

    let newPPreguntasJugador = document.createElement("p")
    newPPreguntasJugador.textContent = "Preguntas"
    div.append(newPPreguntasJugador)

    let newDivPreguntasJugador = document.createElement("div")

    for (let i = 0; i < preguntasJugador.length; i++) {
        let newButtonPreguntaJugador = document.createElement("button")
        newButtonPreguntaJugador.textContent = preguntasJugador[i]
        newDivPreguntasJugador.append(newButtonPreguntaJugador)
        div.append(newDivPreguntasJugador)
    }

    let inGameButtons = document.createElement("div")
    div.append(inGameButtons)

    let newButtonLeaveMainMenu = document.createElement("button")
    newButtonLeaveMainMenu.textContent = "Salir al menú principal"
    newButtonLeaveMainMenu.addEventListener("click", mainMenu)
    inGameButtons.append(newButtonLeaveMainMenu)
}

function charSelect() {
    let personajeElegido

    let newDivH4 = document.createElement("div")
    newDivH4.setAttribute("id", "newDivH4")
    newDivH4.setAttribute("class", "d-flex justify-content-center align-items-center")
    newDivH4.style.marginBottom = "10px"

    let newH4CharSelect = document.createElement("h4")
    newH4CharSelect.textContent = "Selección de personaje"
    
    div.textContent = ""
    div.append(newDivH4)
    newDivH4.append(newH4CharSelect)
    
    let personajes = ["Rodrigo", "Marcos", "Orenes"]

    let newDivRoster = document.createElement("div")
    newDivRoster.setAttribute("id", "newDivRoster")
    newDivRoster.setAttribute("class", "d-flex justify-content-center align-items-center")
    div.append(newDivRoster)

    let newRosterUl = document.createElement("ul")
    newRosterUl.setAttribute("class", "list-group")
    newRosterUl.style.listStyle = "none"
    newRosterUl.style.marginBottom = "20px"

    let newDivConfirmarPersonaje = document.createElement("div")
    newDivConfirmarPersonaje.setAttribute("id", "newDivConfirmarPersonaje")
    newDivConfirmarPersonaje.setAttribute("class", "d-flex justify-content-center align-items-center")

    let newButtonConfirmarPersonaje = document.createElement("button")
    newButtonConfirmarPersonaje.textContent = "Confirmar personaje"
    newButtonConfirmarPersonaje.setAttribute("id", "newButtonConfirmarPersonaje")
    newButtonConfirmarPersonaje.setAttribute("class", "btn btn-primary")

    newDivRoster.append(newRosterUl)
    div.append(newDivConfirmarPersonaje)

    personajes.forEach((personaje, i) => {
        let newRosterLi = document.createElement("li")
        newRosterLi.setAttribute("class", "list-group-item")

        let newButtonPersonaje = document.createElement("button")
        newButtonPersonaje.textContent = personajes[i]
        newButtonPersonaje.setAttribute("class", "btn")

        newRosterUl.append(newRosterLi)
        newRosterLi.append(newButtonPersonaje)

        newButtonPersonaje.addEventListener("click", (e) => {
            charConfirm(e, personajeElegido, newDivConfirmarPersonaje, newButtonConfirmarPersonaje, newRosterUl)
        })

        newButtonPersonaje.addEventListener("mouseover", enableBlueButton)
        newButtonPersonaje.addEventListener("mouseout", disableBlueButton)
    });
}

function stopGame() {
    game = false
}

function enableBlueButton(event) {
    event.target.setAttribute("class", "btn btn-primary")
}

function disableBlueButton(event) {
    event.target.classList.remove("btn-primary")
}

function enableDisableGreenButton(e, newRosterUl) {
    for (let i = 0; i < newRosterUl.querySelectorAll("button").length; i++) {
            newRosterUl.querySelectorAll("button")[i].classList.remove("btn-success")
        }
        e.target.classList.add("btn-success")   
}

function charConfirm(e, personajeElegido, newDivConfirmarPersonaje, newButtonConfirmarPersonaje, newRosterUl) {
    personajeElegido = e.target.textContent
   
    if (personajeElegido.length != "") {
        newDivConfirmarPersonaje.append(newButtonConfirmarPersonaje)
        e.target.classList.remove("btn-primary")
        e.target.classList.add("btn-success")
        enableDisableGreenButton(e, newRosterUl)
    }else {
        personajeElegido = e.target.textContent
        newDivConfirmarPersonaje.removeChild(newButtonConfirmarPersonaje)
        newDivConfirmarPersonaje.append(newButtonConfirmarPersonaje)
        e.target.classList.remove("btn-success")
        enableDisableGreenButton(e, newRosterUl)
    }

    newButtonConfirmarPersonaje.addEventListener("click", () => {
        if (personajeElegido != "") {
            startGame()
        }
    })
}