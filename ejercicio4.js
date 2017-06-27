function Ejer4(nombre,apellido,edad,genero,ciudad,pais)
{
	this.nombre=nombre;
	this.apellido=apellido;
	this.edad=edad;
	this.genero=genero;
	this.ciudad=ciudad;
	this.pais=pais;
	this.ficha=function(){
		var mensaje="";
		mensaje+="Nombre: " + this.nombre + " " + this.apellido + "\n" +"Edad: "+ this.edad +"\n"+"País: "+this.pais;
		return mensaje;
};
}

var obj = new Ejer4("","","");
assert.equal("nombre ....... ",obj.ficha());
