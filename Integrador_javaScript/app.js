function calcular()
{  
    const ticket= 200;
    var cant=document.getElementById("cantidad").value;

    var select=document.getElementById("categoria");
    var select_activa=select.options[select.selectedIndex].value;

    var boton_precio=document.getElementById("resumen");
    boton_precio.addEventListener("click", calcular);
   
    var result=0; 

    

    switch(select_activa=parseInt(select_activa))
    {
        case 1:
            result= cant * (ticket-(ticket * 80 / 100));
            break;
        case 2:
            result= cant * (ticket-(ticket * 50 / 100));
            break;
        case 3:
            result= cant * (ticket-(ticket * 15 / 100));
            break;
    }
    
    document.getElementById("precio").innerHTML=result;
}

var boton_borrar=document.getElementById("borrar");
boton_borrar.addEventListener("click", borrar);
function borrar(){
    document.getElementById("nombre").value='';
    document.getElementById("apellido").value='';
    document.getElementById("correo").value='';
    document.getElementById("cantidad").value='';
    document.getElementById("precio").innerHTML='Total a Pagar: $';
}