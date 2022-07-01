//la idea es que al hacer click, pueda ir hacia el back o servidor y poder obtener la información de los amigos-->
var getAmigos = ()=>{//realizamos una arrow function
    var list = $('#lista')//en <ul></ul>
  //hago el get o peticion get al back

  // para vaciar la lista
    list.empty(); //-->list.innerHTML = ""

  $.get('http://localhost:5000/amigos', res => {//res es todo el arreglo de objetitos
     for (let i = 0; i < res.length; i++) {
        list.append(`<li>${res[i].name}</li>`)
        
     }
  })
}
$('#boton').click(getAmigos) //mire que acá llamamos la funcion que esta guardada en getAmigos para refrescar la lista y gracias a esto se puede reutilizar


//boton search-->

$('#search').click(()=>{
    var id = $('#input').val() //accedo al imput y obtengo su valor
    $.get(`http://localhost:5000/amigos/${id}`, res =>{
        $('#amigo').text(res.name); //el .text es igual a .innerText o .innerHTML
    })
})

// EL DELETE
 $('#delete').click(()=>{
    var id = $('#inputDelete').val();

    var name;
    $.get(`http://localhost:5000/amigos/${id}`, res =>{
        name = res.name
    })
    $.ajax({
        url: `http://localhost:5000/amigos/${id}`,
        type: 'DELETE',
        success: () => {
            $('#success').text(`Amigo ${name} fue borrado con éxito`);
            getAmigos();
        }
    })
 })