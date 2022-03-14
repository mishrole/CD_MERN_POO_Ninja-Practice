class Ninja {
  salud = 0;
  velocidad = 3;
  fuerza = 3;

  constructor(nombre) {
    this.nombre = nombre;
  }

  sayName() {
    console.log(`Nombre: ${this.nombre}`);
  }

  showStats() {
    console.log(`Nombre: ${this.nombre} | Fuerza: ${this.fuerza} | Velocidad: ${this.velocidad} | Salud: ${this.salud}`);
  }

  drinkSake() {
    this.salud += 10;
  }
}

export default Ninja;