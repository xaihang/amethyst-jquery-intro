console.log('in app.js');
console.log('gimme that bling', $);

//hey jquery - please call my 'onReady' function 
// when the DOM is ready to go
// Keep in mind that 
// What does it mean to have access to the DOM?

$(document).ready(onReady);

function onReady() {
    console.log('read to the DOM');
    //things to do on the DOM goes here:

    // images affects
    let myImage = $('img');
    myImage.hide();
    myImage.delay(1000).fadeIn(3000); 

    //changes the h1 text color for id kitty-title
    $('#kitty-title')
    .css('color', '#96c')
    .css('background-color', 'black')
    .css('border', '1px dotted purple');

    //the kitty h1
    // and the kitty img
    $('.kitty-stuff')
        .css('outline', '3px solid green');

    $('.kitty-img')
        .css('transform', 'rotate(180deg');
    

}