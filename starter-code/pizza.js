

//Write your Pizza Builder JavaScript in this file.
// A $( document ).ready() block.


$(document).ready(function () {
  console.log("ready!");

  $('.btn-pepperonni').data('price', 1);
  $('.btn-mushrooms').data('price', 1);
  $('.btn-green-peppers').data('price', 1);
  $('.btn-sauce').data('price', 3);
  $('.btn-crust').data('price', 5);


  function calculatePrice() {
    var price = 10;
    for (var i = 0; i < allTheButtons.length; i++) {
      if (allTheButtons.eq(i).hasClass('active')) {
        price += allTheButtons.eq(i).data('price');
      }
    };


    $('.btn-pepperonni').click(function () {
      $(this).toggleClass('active');
      $(".pep").fadeToggle();
      $('.price ul li:first').toggle();
    });

    $('.btn-mushrooms').click(function () {
      $(this).toggleClass('active');
      $(".mushroom").fadeToggle();
      $('.price ul li:nth-child(2)').toggle();

    });

    $('.btn-green-peppers').click(function () {
      $(this).toggleClass('active');
      $(".green-pepper").fadeToggle();
    });

    $('.btn-sauce').click(function () {
      $(this).toggleClass('active');
      $(".sauce-white").fadeToggle();
    });

    $('.btn-crust').click(function () {
      $(this).toggleClass('active');
      $(".crust").toggleClass('crust-gluten-free');
    });

    $('.btn-sauce').click(function () {
      $(this).toggleClass('active');
      $(".sauce").toggleClass('sauce-white');
    });


    $('.btn-crust').removeClass('active');
    $('.btn-sauce').removeClass('active');


  });

