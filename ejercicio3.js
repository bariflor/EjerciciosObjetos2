function ejercicio3(array)
{
	var texto=new Object();
	for(i in array){
		var j=parseInt(i)+1;
		texto["propiedad"+j]=array[i];
	}
	var propiedades=Object.keys(texto)
	var str = "";
	for(j in propiedades){
		str += propiedades[j]+"-->"+texto[propiedades[j]];
		if(j<propiedades.length-1)
			str+=";";
	}
	if(propiedades.length==0)
		return "El objeto está vacío";
	return str;
