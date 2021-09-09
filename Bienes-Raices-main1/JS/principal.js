
function cambiarAlquiler() {
	document.getElementById('header').style.backgroundImage='url(imagenes/dfp-alquiler.jpg)';
}

function cambiarCompra() {
	document.getElementById('header').style.backgroundImage='url(imagenes/dfp-venta.jpg)';
}

function cambiarProyectos() {
	document.getElementById('header').style.backgroundImage='url(imagenes/dfp-emprendimiento.jpg)';
}


function vermasPolulares(id){
	if(id=="mas"){
	document.getElementById("desplegar1").style.display="block";   
	document.getElementById("masVentas").style.display="none"; 
	}
	else{
	document.getElementById("desplegar1").style.display="none";
	document.getElementById("masVentas").style.display="inline";
	}
}

function vermasVenta(id){
	if(id=="mas"){
	document.getElementById("desplegar2").style.display="block";   
	document.getElementById("masCompra").style.display="none"; 
	}
	else{
	document.getElementById("desplegar2").style.display="none";
	document.getElementById("masCompra").style.display="inline";
	}
}

function vermasAlquiler(id){
	if(id=="mas"){
	document.getElementById("desplegar3").style.display="block";   
	document.getElementById("masAlquiler").style.display="none"; 
	}
	else{
	document.getElementById("desplegar3").style.display="none";
	document.getElementById("masAlquiler").style.display="inline";
	}
}

function vermasZonas(id){
	if(id=="mas"){
	document.getElementById("desplegar4").style.display="block";   
	document.getElementById("masZona").style.display="none"; 
	}
	else{
	document.getElementById("desplegar4").style.display="none";
	document.getElementById("masZona").style.display="inline";
	}
}



function tamañoMasPopulares(){
	document.getElementById("cont").style.height ="400px";
}

function tamañoMenosPopulares(){
	document.getElementById("cont").style.height ="300px";
}


function tamañoMasVentas(){
	document.getElementById("cont").style.height ="1500px";
}

function tamañoMenosVentas(){
	document.getElementById("cont").style.height ="300px";
}

function tamañoMasAlquiler(){
	document.getElementById("cont").style.height ="1500px";
}

function tamañoMenosAlquiler(){
	document.getElementById("cont").style.height ="300px";
}

function tamañoMasZonas(){
	document.getElementById("cont").style.height ="700px";
}

function tamañoMenosZonas(){
	document.getElementById("cont").style.height ="300px";
}