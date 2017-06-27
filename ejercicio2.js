function ejer2(nombre,edad,ocupacion,genero){
  this.nombre = nombre;
  this.edad = edad;
  this.ocupacion = ocupacion;
  this.genero = genero;
  this.mensaje = function(){
    if(this.edad>17&&this.genero=="femenino"&&(this.ocupacion=="web developer"||this.ocupacion=="Estudiante Laboratoria")){
      return "You´re awesome";
    else {
      return "Upsiii"
    }
    };
  }
}
