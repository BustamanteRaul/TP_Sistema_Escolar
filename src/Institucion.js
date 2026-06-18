class Institucion {
  constructor(Id_institucion, nombre) {
    this.Id_institucion = Id_institucion;
    this.nombre = nombre;
    this.cursos = [];
    this.alumnos = [];
    this.profesores = [];
  }

  registrarCurso(curso) {
    this.cursos.push(curso);
  }

  registrarAlumno(alumno) {
    this.alumnos.push(alumno);
  }

  registrarProfesor(profesor) {
    this.profesores.push(profesor);
  }

  // inscribirAlumno(alumno, curso) {
  //   alumno.Inscribirse(curso);
  // }
}

module.exports = Institucion;
