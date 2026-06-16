const Profesor = require("./src/Profesor");
const Alumno = require("./src/Alumno");
const Curso = require("./src/Curso");
const Institucion = require("./src/Institucion");

const instituto = new Institucion("EEST N°1");

const poo = new Curso("Programación Orientada a Objetos", "POO-01");
const bd = new Curso("Sistemas de Base de Datos", "BD-01");

const profe = new Profesor("Carlos Gómez", "30111222", "carlos@eest1.edu");

const alumno1 = new Alumno("Ana López", "40111222", "ana@eest1.edu");
const alumno2 = new Alumno("Juan Pérez", "40222333", "juan@eest1.edu");
const alumno3 = new Alumno("Sofía Díaz", "40333444", "sofia@eest1.edu");
const alumno4 = new Alumno("Mateo Ruiz", "40444555", "mateo@eest1.edu");

instituto.registrarCurso(poo);
instituto.registrarCurso(bd);
instituto.registrarProfesor(profe);
[alumno1, alumno2, alumno3, alumno4].forEach((a) =>
  instituto.registrarAlumno(a)
);

profe.asignarCurso(poo);
profe.asignarCurso(bd);

[alumno1, alumno2, alumno3, alumno4].forEach((alumno) => {
  instituto.inscribirAlumno(alumno, poo);
  instituto.inscribirAlumno(alumno, bd);
});

profe.registrarNota(poo, alumno1, 10);
profe.registrarNota(bd, alumno1, 2);

for (let i = 0; i < 8; i++) poo.cargarAsistencia(alumno1);
for (let i = 0; i < 2; i++) poo.cargarFalta(alumno1);

for (let i = 0; i < 3; i++) bd.cargarAsistencia(alumno1);
for (let i = 0; i < 7; i++) bd.cargarFalta(alumno1);

profe.registrarNota(poo, alumno2, 7);
profe.registrarNota(bd, alumno2, 6);

profe.reporte();
alumno1.reporte();

console.log("Reporte adicional: Alumno 2");
alumno2.reporte();