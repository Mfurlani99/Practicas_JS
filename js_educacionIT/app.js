const turnosMedicos = [

  {

    id: 1,

    nombre: "Juan Pérez",

    fecha: "2025-08-15",

    hora: "10:00",

    especialidad: "Cardiología"

  },

  {

    id: 2,

    nombre: "María Gómez",

    fecha: "2025-08-15",

    hora: "11:30",

    especialidad: "Dermatología"

  },

  {

    id: 3,

    nombre: "Carlos Sánchez",

    fecha: "2025-08-16",

    hora: "09:00",

    especialidad: "Pediatría"

  },

  {

    id: 4,

    nombre: "Ana Torres",

    fecha: "2025-08-16",

    hora: "14:00",

    especialidad: "Odontología"

  },

  {

    id: 5,

    nombre: "Luis Ramírez",

    fecha: "2025-08-17",

    hora: "10:30",

    especialidad: "Oftalmología"

  },{

    id: 6,

    nombre: "Sofía Castro",

    fecha: "2025-08-17",

    hora: "16:00",

    especialidad: "Ginecología"

  },

  {

    id: 7,

    nombre: "Jorge Vázquez",

    fecha: "2025-08-18",

    hora: "08:00",

    especialidad: "Neurología"

  },{

    id: 8,

    nombre: "Marta Ríos",

    fecha: "2025-08-18",

    hora: "13:00",

    especialidad: "Cardiología"

  },

  {

    id: 9,

    nombre: "Daniel Sosa",

    fecha: "2025-08-19",

    hora: "11:00",

    especialidad: "Dermatología"

  },

  {

    id: 10,

    nombre: "Valeria Ortiz",

    fecha: "2025-08-19",

    hora: "15:30",

    especialidad: "Pediatría"

  },

  {

    id: 11,

    nombre: "Ricardo Navarro",

    fecha: "2025-08-20",

    hora: "09:30",

    especialidad: "Odontología"

  },

  {

    id: 12,

    nombre: "Silvia Luna",

    fecha: "2025-08-20",

    hora: "12:00",

    especialidad: "Oftalmología"

  },

  {

    id: 13,

    nombre: "Fernando Rojas",

    fecha: "2025-08-21",

    hora: "10:00",

    especialidad: "Ginecología"

  },

  {

    id: 14,

    nombre: "Gabriela Mendoza",

    fecha: "2025-08-21",

    hora: "14:30",

    especialidad: "Neurología"

  },{

    id: 15,

    nombre: "Héctor Silva",

    fecha: "2025-08-22",

    hora: "08:30",

    especialidad: "Cardiología"

  },

  {

    id: 16,

    nombre: "Paola Vidal",

    fecha: "2025-08-22",

    hora: "11:00",

    especialidad: "Dermatología"

  },

  {

    id: 17,

    nombre: "Diego Guerrero",

    fecha: "2025-08-23",

    hora: "10:30",

    especialidad: "Pediatría"

  },

  {

    id: 18,

    nombre: "Laura Medina",

    fecha: "2025-08-23",

    hora: "13:00",

    especialidad: "Odontología"

  },

  {

    id: 19,

    nombre: "Pablo Ramos",

    fecha: "2025-08-24",

    hora: "09:00",

    especialidad: "Oftalmología"

  },

  {

    id: 20,

    nombre: "Verónica Pérez",

    fecha: "2025-08-24",

    hora: "15:00",

    especialidad: "Ginecología"

  }

];

 const turns = document.getElementById("Tturnos")

for (const turnos of turnosMedicos) {
 turns.innerHTML += `
   <td>${turnos.id}</td>
   <td>${turnos.nombre}</td>
   <td>${turnos.fecha}</td>
   <td>${turnos.hora}</td>
   <td>${turnos.especialidad}</td>
  `;
}