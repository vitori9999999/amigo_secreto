











let nombres = [];

function validarEntrada(input) {
    input.value = input.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '');
}

function agregarNombre() {
    let input = document.getElementById("nombre");
    let nombre = input.value.trim();
    if (nombre && !nombres.includes(nombre)) {
        nombres.push(nombre);
        actualizarLista();
    }
    input.value = "";
}

function actualizarLista() {
    let lista = document.getElementById("lista");
    lista.innerHTML = "";
    nombres.forEach(nombre => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

function sortear() {
    if (nombres.length < 2) {
        document.getElementById("resultado").innerText = "Se necesitan al menos 2 participantes.";
        return;
    }
    let copia = [...nombres];
    let asignaciones = {};
    let desordenado = copia.sort(() => Math.random() - 0.5);

    for (let i = 0; i < desordenado.length; i++) {
        let amigo = i === desordenado.length - 1 ? desordenado[0] : desordenado[i + 1];
        asignaciones[desordenado[i]] = amigo;
    }

    let resultado = "Sorteo de Amigo Secreto:\n";
    for (let [key, value] of Object.entries(asignaciones)) {
        resultado += `${key} → ${value}\n`;
    }

    document.getElementById("resultado").innerText = resultado;
}

function reiniciar() {
    document.getElementById("resultado").innerText = "";
    sortear();
}

function borrarLista() {
    nombres = [];
    document.getElementById("lista").innerHTML = "";
    document.getElementById("resultado").innerText = "";
}


























