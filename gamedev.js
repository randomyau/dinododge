$( document ).ready(function() {

//Your jquery goes here
var $mouseX = 0, $mouseY = 0;
var $xp = 0, $yp =0;

$(document).mousemove(function(e){
    $mouseX = e.pageX;   
});

var $loop = setInterval(function(){
// change 12 to alter damping higher is slower
$xp += (($mouseX - $xp)/5);
$("#character").css({left:$xp +'px', top:$yp +'px'});  
}, 30);

function playerBounds() {
    //This will check the position of the spaceship and if it hits the boundaries of the canvas will not let it go further.
var character = $("#character");
var body = $("#exploreBody");
    if (character.x > 240) {
        character.x = 240;
    }
    else if (character.x > body.width || body.x < body.width  ) {
        character.x = body.width - spaceShip.width;
    }

}

});