$("#formulario").validate({
onkeyup: false,
onfocusout: false,
onclick: false,
rules: {
    nombre: {
        required: true,
        minlength: 2,
        lettersonly:true
    },
    apellidos: {
        required: true
    },
    telefono:{
        required:true,
        digits:true
    },
    email1:{
        required:true,
        email:true,
        remote:"php/validarEmail.php"
    },
    cuenta: {
            iban: true,
            required: true
    },
    cp:{
        required:true,
        minlength: 5,
        maxlenght: 5,
        remote:"php/validarPostal.php"
    },
    localidad:{
        required:true
    },
    provincia:{
        required:true
    },
    
}
});
$("#particular").change(function(evento) {
          if ($("#particular").is(':checked')) {
             $("label[for='name_enterprise_name']").first().html('Nombre<span class="required"> *</span>');
             $("#name_enterprise_name").val('');
             $("#name_enterprise_name").attr('placeholder', 'Nombre');
              autocompletarNombre();
             $("label[for='cif_nif']").first().html('NIF<span class="required"> *</span>');
             $("#cif_nif").val('');
             $("#cif_nif").attr('placeholder', 'NIF');
          }
      });
$("#empresa").change(function(evento) {
          if ($("#empresa").is(':checked')) {
             $("label[for='name_enterprise_name']").first().html('Empresa<span class="required"> *</span>');
             $("#name_enterprise_name").val('');
             $("#name_enterprise_name").attr('placeholder', 'Nombre de la empresa');
             $("label[for='cif_nif']").first().html('CIF<span class="required"> *</span>');
             $("#cif_nif").val('');
             $("#cif_nif").attr('placeholder', 'CIF');
          }
      });