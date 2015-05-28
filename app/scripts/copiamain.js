$('#particular').change(function(evento) {
    if ($('#particular').is(':checked')) {
        $('label[for='empresa']').first().html('Nombre');
        $('#nomempresa').val('');
        $('#nomempresa').attr('placeholder', 'Nombre');
        $('label[for='cif_nif']').first().html('NIF');
        $('#cif_nif').val('');
        $('#cif_nif').attr('placeholder', 'NIF');
    }
});
$('#empresa').change(function(evento) {
    if ($('#empresa').is(':checked')) {
        $('label[for='empresa']').first().html('Empresa');
        $('#nomempresa').val('');
        $('#nomempresa').attr('placeholder', 'Nombre de la empresa');
        $('label[for='cif_nif']').first().html('CIF');
        $('#cif_nif').val('');
        $('#cif_nif').attr('placeholder', 'CIF');
    }
});
