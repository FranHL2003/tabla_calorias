const myModal = document.getElementById('exampleModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
    myInput.focus()
})

// Obtener el botón y la tabla
var btnCargar = document.getElementById("inputCarga");
var tablaClientes = document.getElementById("table_add");

// Agregar un evento de clic al botón
btnCargar.addEventListener("click", function() {
      // Hacer una solicitud HTTP para obtener los datos JSON de la URL
  var url = new XMLHttpRequest();
  url.open("GET", "https://raw.githubusercontent.com/FRomero999/ExamenDIW2022/main/clientes.json");
  url.onload = function() {
    if (url.status === 200) {
      // Analizar los datos JSON y agregarlos a la tabla
      var clientes = JSON.parse(url.responseText);
      for (var i = 0; i < clientes.length; i++) {
        var cliente = clientes[i];
        var fila = "<tr>" +
          "<td>" + cliente.nombre + "</td>" +
          "<td>" + cliente.apellidos + "</td>" +
          "<td><span class='badge text-bg-primary'>" + cliente.sexo + "</span></td>" +
          "<td>" + cliente.edad + "</td>" +
          "<td>" + cliente.altura + "</td>" +
          "<td>" + cliente.peso + "</td>" +
          "<td><span class='badge text-bg-secondary'>" + cliente.actividad + "</span></td>" +
          "<td>" + cliente.get + "</td>" +
          "<td>" + cliente.ger + "</td>" +
          "</tr>";
        tablaClientes.innerHTML += fila;
      }
    }
  };
  url.send();
});


$(document).ready(function () {
    //obtenemos el valor de los input

    $('#save-client').click(function () {
        var Nombre = document.getElementById("Nombre").value;
        var Apellidos = document.getElementById("Apellidos").value;
        var Sexo = document.getElementById("Sexo").value;
        var NivelActividad = document.getElementById("NivelActividad").value;
        var Edad = document.getElementById("Edad").value;
        var Peso = document.getElementById("Peso").value;
        var Altura = document.getElementById("Altura").value;

        var fila = '<tr><td>' + Nombre + '</td><td>' + Apellidos + '</td><td><span class="badge text-bg-primary">' + Sexo + '</span></td><td>' + Edad + '</td><td>' + Altura + '</td><td>' + Peso + '</td><td><span class="badge text-bg-secondary">' + NivelActividad + '</span></td><td>200</td><td>200</td></tr>';

        $('#table_add tbody').append(fila);

        document.getElementById("Nombre").value = "";
        document.getElementById("Apellidos").value = "";
        document.getElementById("Sexo").value = "";
        document.getElementById("NivelActividad").value = "";
        document.getElementById("Edad").value = "";
        document.getElementById("Peso").value = "";
        document.getElementById("Altura").value = "";


        //Si quieres que desaparezca cuando se envie 
        $('#exampleModal').removeClass('show');
        $('body').prop("style").removeProperty("overflow");
        $('body').prop("style").removeProperty("padding-right");
        $('body').removeClass('modal-open');
        $('.modal-backdrop').remove();
        $('#exampleModal').css("display", "none");

    });

});