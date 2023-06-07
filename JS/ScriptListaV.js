
const form = document.querySelector('form');
const nombreInput = document.getElementById('nombre');
const apellidoInput = document.getElementById('apellido');
const edadInput = document.getElementById('Edad');
const ciudadInput = document.getElementById('Ciudad');
const correoInput = document.getElementById('Correo');
const hogarParaInput = document.getElementById('hogarPara');
const listaVoluntarios = document.getElementById('listaVoluntarios');

form.addEventListener('submit', function (event) {
    event.preventDefault(); 

    const nombre = nombreInput.value;
    const apellido = apellidoInput.value;
    const edad = edadInput.value;
    const ciudad = ciudadInput.value;
    const correo = correoInput.value;
    const hogarPara = hogarParaInput.value;

    const voluntario = {
        nombre,
        apellido,
        edad,
        ciudad,
        correo,
        hogarPara
    };

    let voluntarios = JSON.parse(localStorage.getItem('voluntarios')) || [];
    voluntarios.push(voluntario);
    localStorage.setItem('voluntarios', JSON.stringify(voluntarios));
    form.reset();
    mostrarVoluntarios();
    });

    function mostrarVoluntarios() {
    const voluntarios = JSON.parse(localStorage.getItem('voluntarios')) || [];

    listaVoluntarios.innerHTML = '';

    voluntarios.forEach(function (voluntario) {
        const item = document.createElement('li');
        item.textContent = `Nombre: ${voluntario.nombre}, Apellido: ${voluntario.apellido}, Edad: ${voluntario.edad}, Ciudad: ${voluntario.ciudad}, Correo: ${voluntario.correo}, Hogar para: ${voluntario.hogarPara}`;
        listaVoluntarios.appendChild(item);
    });
}

mostrarVoluntarios();