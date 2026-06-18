class CursoAlumno {
  constructor(Id_CursoAlumno, Id_alumno, Id_curso) {
    this.Id_CursoAlumno = Id_CursoAlumno;
    this.Id_alumno = Id_alumno;
    this.Id_curso = Id_curso;
    this.Nota = null;
    this.Asistencia = null;
  }
  cambiarNota(Nota) {
    this.Nota = Nota;
  }
  cambiarAsistencia(Asistencia) {
    this.Asistencia = Asistencia;
  }
}

module.exports = CursoAlumno;
