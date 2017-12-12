$(document).ready(function() {

    //velocidad de rotación y temporizador
    var speed = 5000;
    var run = setInterval('rotate()', speed);

    //tomar el ancho y calcular el valor de la izquierda
    var item_width = $('#slides li').outerWidth();
    var left_value = item_width * (-1);

    //mueva el último elemento antes del primer elemento, solo en caso de que el usuario haga clic en el botón anterior
    $('#slides li:first').before($('#slides li:last'));

    //establecer el elemento predeterminado en la posición correcta
    $('#slides ul').css({'left' : left_value});

    //si el usuario hizo clic en el botón prev
    $('#prev').click(function() {

        //obtener la posición correcta
        var left_indent = parseInt($('#slides ul').css('left')) + item_width;

        //deslizar el elemento
        $('#slides ul').animate({'left' : left_indent}, 200,function(){

            //mover el último elemento y ponerlo como primer elemento
            $('#slides li:first').before($('#slides li:last'));

            //establecer el elemento predeterminado para corregir la posición
            $('#slides ul').css({'left' : left_value});

        });

        //cancelar el comportamiento del enlace
        return false;

    });


    //si el usuario hizo clic en el botón siguiente
    $('#next').click(function() {

        //obtener la posición correcta
        var left_indent = parseInt($('#slides ul').css('left')) - item_width;

        //desliza el elemento
        $('#slides ul').animate({'left' : left_indent}, 200, function () {

            //mover el primer elemento y ponerlo como último elemento
            $('#slides li:last').after($('#slides li:first'));

            //establecer el elemento predeterminado para corregir la posición
            $('#slides ul').css({'left' : left_value});

        });

        //cancelar el comportamiento del enlace
        return false;

    });

    //si pasa el mouse sobre el mouse, pause la rotación automática, de lo contrario gírelo
    $('#slides').hover(

        function() {
            clearInterval(run);
        },
        function() {
            run = setInterval('rotate()', speed);
        }
    );

});

//una función simple para hacer clic en el siguiente enlace
//un temporizador llamará a esta función y comenzará la rotación :)
function rotate() {
    $('#next').click();
}
/*********************************************************************************************/
// $('#foto_1').click(function () {
//     $('#img_1').animate({
//         "left": "-110%"},2000);
//     $('#img_2').css({'display':'block'}).animate({ "left": "0%" },2000 );
// });
// $('#foto_2').click(function () {
//     $('#img_2').animate({
//         "left": "-110%"},2000);
//     $('#img_3').css({'display':'block'}).animate({ "left": "0%" },2000 );
//
// });
// $('#foto_3').click(function () {
//     $('#img_3').animate({
//         "left": "-110%"},2000);
//     $('#img_4').css({'display':'block'}).animate({ "left": "0%" },2000 );
//
// });
// $('#foto_4').click(function () {
//     $('#img_4').animate({
//         "left": "-110%"},2000);
//     $('#img_5').css({'display':'block'}).animate({ "left": "0%" },2000 );
//
// });
// $('#foto_5').click(function () {
//     $('#img_5').animate({
//         "left": "-110%"},2000);
//     $('#img_1').css({'display':'block','right':'-100%'}).animate({ "left": "0%" },2000 );
//
// });