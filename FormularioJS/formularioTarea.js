jQuery(document).ready(function($) {
    $("#flexSwitchCheckDefault").click(function(event) {
 //$(".clickable-row").not(this).removeClass('selected');
    $(this).toggleClass('selected');
    $("#obraSocial").prop("disabled", !$(this).hasClass('selected'));
    });
});

function validacionFormulario(){
    let txtNombre = document.getElementById('txtNombre')
    if(txtNombre.value===''){
        swal({
            title: "Nombre",
            text: "Debe ingresar el nombre del paciente.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          });
        return false;
        
    }
    let txtApellido = document.getElementById('txtApellido')
    if(txtApellido.value===''){
        swal({
            title: "Apellido",
            text: "Debe ingresar el apellido del paciente.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          });
        return false;
        
    }
    let txtDireccion = document.getElementById('txtDireccion')
    if(txtDireccion.value===''){
        swal({
            title: "Direccion",
            text: "Debe ingresar la direccion del paciente.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          });
        return false;
        
    }
    let txtCiudad = document.getElementById('txtCiudad')
    if(txtCiudad.value===''){
        swal({
            title: "Ciudad",
            text: "Debe ingresar la ciudad del paciente.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          });
        return false;
        
    }
    let txtRegion = document.getElementById('txtRegion')
    if(txtRegion.value===''){
        swal({
            title: "Region",
            text: "Debe ingresar una región.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          });
        return false;
        
    }
    let txtCodigoPostal = document.getElementById('txtCodigoPostal')
    if(txtCodigoPostal.value===''){
        swal({
            title: "Codigo postal",
            text: "Debe ingresar el codigo postal.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          });
        return false;
        
    }
    let selectPais = document.getElementById('selectPais')
    if(selectPais.value=="País"){
        swal({
            title: "País",
            text: "Debe ingresar el país del paciente.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          });
        return false;
    }
    let txtTelefono = document.getElementById('txtTelefono')
    if(txtTelefono.value===''){
        swal({
            title: "Contacto",
            text: "Debe ingresar un número de contacto.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          });
        return false;
    }
    let algunoChekeado = false;
    var radio = document.getElementsByName('sexo')
    for(let i=0; i<radio.length;i++){
        if(radio[i].checked){
            algunoChekeado = true;
            break;
        }
    }
    if(!algunoChekeado){
        swal({
            title: "Genero",
            text: "Debe ingresar el genero del paciente.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          });
        return false;
    }
    
    return true;
}
function registrarTurno(){
    if(validacionFormulario()){
        swal({
            title: "Confirma su turno?",
            text: "Usted está por registrar su turno!",
            icon: "info",
            buttons: true,
            dangerMode: false,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("Usted ha registrado su turno con exito.", {
                icon: "success",
              });
            } else {
              swal("Usted ha cancelado el turno, puede iniciar un nuevo trámite",
              {icon: "info",});
            }
          });
    }
}


