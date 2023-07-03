let datosJSON = `[
    {
        "nombre": "Gabriela",
        "apellido": "Martinez",
        "edad":"25",
        "ciudad":"Medellin",
        "correo":"gabim@mail.com",
        "hogarPara":"gato"
    },
    {
        "nombre": "Daniel",
        "apellido": "Zapata",
        "edad":"35",
        "ciudad":"Bogota",
        "correo":"danielzapata@mail.com",
        "hogarPara":"perro"
    },
    {
        "nombre": "Laura",
        "apellido": "Usuga",
        "edad":"22",
        "ciudad":"cali",
        "correo":"lauu@mail.com",
        "hogarPara":"otro"
    },
    {
        "nombre": "Juan Camilo",
        "apellido": "Muñoz",
        "edad":"22",
        "ciudad":"Bogota",
        "correo":"milom@mail.com",
        "hogarPara":"gato"
    },
    {
        "nombre": "María Fernanda",
        "apellido": "Gómez",
        "edad": "30",
        "ciudad": "Medellín",
        "correo": "mariaf@mail.com",
        "hogarPara": "perro"
        }
    ]`;

    let voluntarios = JSON.parse(datosJSON);

    const nuevoVoluntario = {
        nombre: 'Bruce',
        apellido: 'Wayne',
        edad: 25,
        ciudad: 'Gotham',
        correo: 'imnotbatman@example.com',
        hogarPara: 'Perro'
    };

    voluntarios.push(nuevoVoluntario);

    console.log(voluntarios);

const tablaVoluntarios = document.querySelector('table');

voluntarios.forEach(voluntario => {
const fila = document.createElement('tr');

const nombreCelda = document.createElement('td');
nombreCelda.textContent = voluntario.nombre;
fila.appendChild(nombreCelda);

const apellidoCelda = document.createElement('td');
apellidoCelda.textContent = voluntario.apellido;
fila.appendChild(apellidoCelda);

const edadCelda = document.createElement('td');
edadCelda.textContent = voluntario.edad;
fila.appendChild(edadCelda);

const ciudadCelda = document.createElement('td');
ciudadCelda.textContent = voluntario.ciudad;
fila.appendChild(ciudadCelda);

const correoCelda = document.createElement('td');
correoCelda.textContent = voluntario.correo;
fila.appendChild(correoCelda);

const hogarParaCelda = document.createElement('td');
hogarParaCelda.textContent = voluntario.hogarPara;
fila.appendChild(hogarParaCelda);

tablaVoluntarios.appendChild(fila);
});

fetch('https://randomuser.me/api/?results=3')
    .then(response => response.json())
    .then(data => {
        const voluntariosAPI = data.results;
        voluntariosAPI.forEach(voluntario => {
        const fila = document.createElement('tr');

        const nombreCelda = document.createElement('td');
        nombreCelda.textContent = voluntario.name.first;
        fila.appendChild(nombreCelda);

        const apellidoCelda = document.createElement('td');
        apellidoCelda.textContent = voluntario.name.last;
        fila.appendChild(apellidoCelda);

        const edadCelda = document.createElement('td');
        edadCelda.textContent = voluntario.dob.age;
        fila.appendChild(edadCelda);

        const ciudadCelda = document.createElement('td');
        ciudadCelda.textContent = voluntario.location.city;
        fila.appendChild(ciudadCelda);

        const correoCelda = document.createElement('td');
        correoCelda.textContent = voluntario.email;
        fila.appendChild(correoCelda);

        const hogarParaCelda = document.createElement('td');
        hogarParaCelda.textContent = obtenerHogarPara();
        fila.appendChild(hogarParaCelda);

        function obtenerHogarPara() {
            const opciones = ["perro", "gato"];
            const indice = Math.floor(Math.random() * opciones.length);
            return opciones[indice];
        }

        tablaVoluntarios.appendChild(fila);
        });
    })
    .catch(error => {
        console.log('Error al obtener los datos de la API:', error);
    });

