$(document).ready(function()){

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
$('.list').on('click', '.list__delete-btn', function(){
  // removes that item from the list
  $(this).parent().fadeOut(300, function(){
    $(this).remove();
  });
});

// CHECKING AN ITEM OFF FROM THE LIST

// Clicking an item's check button:
$('.list').on('click', '.list__check-btn', function(event){
  // grays everything out
  $(this).parent().toggleClass('list__item--checked');
  $(this).siblings().toggleClass('list__delete-btn--checked');
  $(this).toggleClass('list__check-btn--checked');

  // moves the element to either the bottom or top of the list
  var $listItem = $(this).parent();
  if ($listItem.hasClass('list__item--checked')) {
    $('.list').append($listItem);
  } else {
    $('.list').prepend($listItem);
  }
});

// MAKING LIST ITEMS SORTABLE

$('.list').sortable({
    distance: 2,
    revert: 300,
    cancel: ".list__item--checked"
});

};

