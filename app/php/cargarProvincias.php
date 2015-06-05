<?php
include("php/conexion.php");
$cp_request=$_REQUEST["cp"];
$opcion_carga=$_REQUEST["opcionCarga"];
$consulta_db= $conexion->stmt_init();
$sql="SELECT poblacion,provincia FROM `poblaciones`,`provincias` WHERE poblaciones.cod_prov=provincias.cod_prov and poblaciones.cod_postal='50012'";
$consulta_db->prepare($sql);
$consulta_db->bind_param("s",$cp_request);
$consulta_db->execute();
$consulta_db->bind_result($resultado_db_localidad,$resultado_db_provincia);
$provincia="";
$localidades="";
while($consulta_db->fetch()){
$provincia=$resultado_db_provincia;
$localidades.="<option id='".$resultado_db_localidad."'name='".$resultado_db_localidad."' value=>".$resultado_db_localidad."</option>";
}
if($opcion_carga=="1"){
echo $provincia;
}
elseif($opcion_carga=="2") {
	echo $localidades;
}
 ?>