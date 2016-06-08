$( document ).ready(function() {

//Your jquery goes here

$("#wrapper").hide();

var $mouseX = 0, $mouseY = 0;
var $xp = 0, $yp =0;

$(document).mousemove(function(e){
    $mouseX = e.pageX;
    $mouseY = e.pageY;    
});

var $loop = setInterval(function(){
// change 12 to alter damping higher is slower
$xp += (($mouseX - $xp)/6);
$yp += (($mouseY - $yp)/6);
$("#character").css({left:$xp +'px', top:$yp +'px'});  
}, 30);

var scotty = $("#character");


//this is where the JavaScript collision starts. First we define all the variables of how the collision will happen
  function collision($div1, $div2) {
    var x1 = $div1.offset().left;
    var y1 = $div1.offset().top;
    var h1 = $div1.outerHeight(true);
    var w1 = $div1.outerWidth(true);
    var b1 = y1 + h1;
    var r1 = x1 + w1;
    var x2 = $div2.offset().left;
    var y2 = $div2.offset().top;
    var h2 = $div2.outerHeight(true);
    var w2 = $div2.outerWidth(true);
    var b2 = y2 + h2;
    var r2 = x2 + w2;
    //below is an if statement - if the variables calculate to the right formula, it will return true or false
    if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
    return true;
  }

  var points = 0;

  window.setInterval(function() {
    //function that makes the magic happen! Below, jQuery prints the word "FALSE" into #results
    //IMPORTANT!!! Below declares the class of divs that your sprite collides with!!
    $.each($(".meteor"), function() {
      if (collision($("#character"), $(this))) { //another if statement. If #myCar DOES hit something, the following will happen:
        $(".meteor").hide();
        $("#wrapper").show();

        $('#wrapper').click(function() {
            location.reload();
        });




        //if #myCar hits .othercar, then #results will say "TRUE"

        //all the actions that happen during a collision go here

      }
    });
  }, 100); //this is how often it checks for a collision


  $("#pointsystem").html(points);
});


  $(document).ready(function(){
      animateDiv();
      
  });

  function makeNewPosition(){
      
      // Get viewport dimensions (remove the dimension of the div)
      var h = $(window).height() - 50;
      var w = $(window).width() - 50;
      
      var nh = Math.floor(Math.random() * h);
      var nw = Math.floor(Math.random() * w);
      
      return [nh,nw];    
      
  }

  function animateDiv(){
      var newq = makeNewPosition();
      var oldq = $(".meteor").offset();
      var speed = calcSpeed([oldq.top, oldq.left], newq);
      
      $(".meteor").animate({ top: newq[0], left: newq[1] }, speed, function(){
        animateDiv();        
      });
      
  };

  function calcSpeed(prev, next) {
      
      var x = Math.abs(prev[1] - next[1]);
      var y = Math.abs(prev[0] - next[0]);
      
      var greatest = x > y ? x : y;
      
      var speedModifier = 0.75;

      var speed = Math.ceil(greatest/speedModifier);

      return speed;

  }

