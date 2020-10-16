var divhtml=document.getElementById("div_msg");
var radio=document.getElementById("numero");
var boton=document.getElementById("boton_calcula");




boton.addEventListener("click", volumen);

function volumen(){
	n1=parseFloat(radio.value);
	var volume=(4/3)*Math.PI*Math.pow(n1,3);
	var total = volume.toFixed(3);
    div_msg.innerHTML="El volumen ="+ total;
}