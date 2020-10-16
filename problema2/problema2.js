var divhtml=document.getElementById("div_msg");
var num1=document.getElementById("num1");
var num2=document.getElementById("num2");
var boton=document.getElementById("boton_calcula");


boton.addEventListener("click", coordenadas);

function coordenadas(){
	x=parseFloat(num1.value);
	y=parseFloat(num2.value);
	if (x==0 & y==0) 
	{
		div_msg.innerHTML="Origem";
	}
	if (x==0) 
	{
		if (y<0 || y>0) 
		{
			div_msg.innerHTML="Eixo Y";
		}
	}
	if(y==0) 
	{
		if (x<0 || x>0) 
		{
			div_msg.innerHTML="Eixo X";
		}
	}
	else if (x>0 & y>0) 
	{
		div_msg.innerHTML="Q1";
	}
	else if (x<0.0 & y>0) 
	{
		div_msg.innerHTML="Q2";
	}
	else if (x<0.0 & y<0) 
	{
		div_msg.innerHTML="Q3";
	}
	else if (x>0.0 & y<0) 
	{
		div_msg.innerHTML="Q4";
	}
	
    
}