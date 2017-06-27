var assert = require("assert");
function suma(numI,numF){
  var objeto={
  		inicio:numI,
  		fin:numF
  };
  var respuesta = 0;
  for(var i=objeto.inicio; i<=objeto.fin;i++){
      respuesta += i;
  }

  return respuesta;
}

// Prueba unitaria ejer1

describe("Prueba ejercicio1", function(){
  it("Si del 1 a 10 deberia ser 55",function(){
    assert.equal(55,suma(1,10));
  });
});
