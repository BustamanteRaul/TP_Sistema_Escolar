const Profesor = require("./src/Profesor");
const Alumno = require("./src/Alumno");
const Curso = require("./src/Curso");
const Institucion = require("./src/Institucion");
const CursoAlumno = require("./src/CursoAlumno");

const instituto = new Institucion(1, "EEST N°1");

const poo = new Curso(1, "Programación Orientada a Objetos", "POO-01");
const bd = new Curso(2, "Sistemas de Base de Datos", "BD-01");

const profe = new Profesor(1, "Carlos Gómez", "30111222", "carlos@eest1.edu");

const alumno1 = new Alumno(1, "Ana López", "40111222", "ana@eest1.edu");
const alumno2 = new Alumno(2, "Juan Pérez", "40222333", "juan@eest1.edu");
const alumno3 = new Alumno(3, "Sofía Díaz", "40333444", "sofia@eest1.edu");
const alumno4 = new Alumno(4, "Mateo Ruiz", "40444555", "mateo@eest1.edu");

instituto.registrarCurso(poo);
instituto.registrarCurso(bd);
instituto.registrarProfesor(profe);
[alumno1, alumno2, alumno3, alumno4].forEach((a) =>
  instituto.registrarAlumno(a),
);

profe.asignarCurso(poo);
profe.asignarCurso(bd);

poo.agregarAlumno(alumno1);
poo.agregarAlumno(alumno2);
poo.agregarAlumno(alumno3);
poo.agregarAlumno(alumno4);

bd.agregarAlumno(alumno1);
bd.agregarAlumno(alumno2);
bd.agregarAlumno(alumno3);
bd.agregarAlumno(alumno4);

const curso_alumno1 = new CursoAlumno(1, poo.Id_curso, alumno1.Id_persona);
const curso_alumno2 = new CursoAlumno(2, poo.Id_curso, alumno2.Id_persona);
const curso_alumno3 = new CursoAlumno(3, poo.Id_curso, alumno3.Id_persona);
const curso_alumno4 = new CursoAlumno(4, poo.Id_curso, alumno4.Id_persona);

const curso_alumno5 = new CursoAlumno(5, bd.Id_curso, alumno1.Id_persona);
const curso_alumno6 = new CursoAlumno(6, bd.Id_curso, alumno2.Id_persona);
const curso_alumno7 = new CursoAlumno(7, bd.Id_curso, alumno3.Id_persona);
const curso_alumno8 = new CursoAlumno(8, bd.Id_curso, alumno4.Id_persona);

console.table(instituto);
console.log(instituto.alumnos);
console.log(instituto.cursos);
console.log(instituto.profesores);

console.log(curso_alumno1, curso_alumno2, curso_alumno3, curso_alumno4);
console.log(curso_alumno5, curso_alumno6, curso_alumno7, curso_alumno8);

// [alumno1, alumno2, alumno3, alumno4].forEach((alumno) => {
//   instituto.inscribirAlumno(alumno, poo);
//   instituto.inscribirAlumno(alumno, bd);
// });

// profe.registrarNota(poo, alumno1, 10);
// profe.registrarNota(bd, alumno1, 2);

// for (let i = 0; i < 8; i++) poo.cargarAsistencia(alumno1);
// for (let i = 0; i < 2; i++) poo.cargarFalta(alumno1);

// for (let i = 0; i < 3; i++) bd.cargarAsistencia(alumno1);
// for (let i = 0; i < 7; i++) bd.cargarFalta(alumno1);

// profe.registrarNota(poo, alumno2, 7);
// profe.registrarNota(bd, alumno2, 6);

// profe.reporte();
// alumno1.reporte();

// console.log("Reporte adicional: Alumno 2");
// alumno2.reporte();
