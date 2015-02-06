<?php
function validaPostal ($cadena) {
        $valid='true';
          //Comrpobamos que realmente se ha añadido el formato correcto
         if(preg_match('/^[0-9]{5}$/i', $cadena)) {
             //La instruccion se cumple
             return true;
         }else{
             //Contiene caracteres no validos
             $valid="por favor introduce un CP valido";
             
         }
       } echo $valid;
?>