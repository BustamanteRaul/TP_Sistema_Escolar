class Persona {
  constructor(Id_persona, nombre, dni, email) {
    this.Id_persona = Id_persona;
    this.nombre = nombre;
    this.dni = dni;
    this.email = email;
  }

  presentarse() {
    return `Hola, soy ${this.nombre} (DNI: ${this.dni})`;
  }
}

module.exports = Persona;
