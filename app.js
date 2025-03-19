// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Lista para almacenar los nombres 
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    
    const nombreAmigo = document.getElementById("amigo").value;
    
    // Validamos que el campo no esté vacío
    if (nombreAmigo === "") {
        alert("Por favor, escribe un nombre válido");
        return;
    }
    
    // Agregamos el nombre a la lista de amigos
    amigos.push(nombreAmigo);
    
    // Mostramos el nombre en la lista visible
    actualizarListaAmigos();
    
    // Limpiamos el campo de texto después de agregar
    document.getElementById("amigo").value = "";
}

// Función para actualizar la lista de amigos en la página
function actualizarListaAmigos() {
    // Obtenemos la lista donde se mostrarán los amigos
    const listaAmigos = document.getElementById("listaAmigos");
    
    // Limpiamos la lista actual
    listaAmigos.innerHTML = "";
    
    // Recorremos el array de amigos y agregamos cada uno a la lista
    for (let i = 0; i < amigos.length; i++) {
        const nuevoAmigo = document.createElement("li");
        nuevoAmigo.textContent = amigos[i];
        listaAmigos.appendChild(nuevoAmigo);
    }
}

// Función para sortear un amigo aleatorio
function sortearAmigo() {
    // Validamos que haya al menos un amigo en la lista
    if (amigos.length === 0) {
        alert("Necesitas agregar al menos un amigo para sortear");
        return;
    }
    
    // Obtenemos un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Seleccionamos el amigo aleatorio
    const amigoSorteado = amigos[indiceAleatorio];
    
    // Mostramos el resultado en la página
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    
    const elementoResultado = document.createElement("li");
    elementoResultado.textContent = "¡Tu amigo secreto es: " + amigoSorteado + "!";
    resultado.appendChild(elementoResultado);
}

