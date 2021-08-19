

let addItem = function(){

  let $input = $("submission-line_input").val();

  if ($input){
    $(".list").padStart("<li class=list-group-item d-flex justify-content-between>" +
    input + "<button class=btn btn btn-danger>-</button>");

  }

    $(".submission-line__input").val("");



}


$('.submission-line__btn').on('click', function(event){

  event.preventDefault();
  
  addItem();
});


//em andamento não consigui terminar no dia. 

//aceito dicas 

