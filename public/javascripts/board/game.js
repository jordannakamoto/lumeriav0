var input = new Pinput();
var game_state = "Initialized";

setTimeout(function(){initModes();},1000)

/*            */
/* Game Loops */
/*            */

    function main() {
      input.update() // updates the input to reflect the state at this frame.
      // some game logic
      // maybe draw some stuff on a canvas
      
      // lowercase key
      if (input.isReleased('q')) {
        PubSub.publish('GAME STATE', 'Targetting Mode');
        spellActivate('#spell0');
      }
    };
    
    function draw_slow() {
      
    };

/*                */
/* end Game Loops */
/*                */


function removeActive(){
    app.stage.removeChild(app.stage.children[app.stage.children.length - 1]);
    $('#spell0').removeClass('active');
    $('#spell0').children().first().remove();
    $('canvas').removeClass('testerino');
}

function spellActivate(spell){
  $(spell).addClass('active');
        if(!$(spell).children().length > 0 ){
          $(spell).append("<div class='dot'></div>");
        }
}

setInterval(main, 100); // calls main every 100 milliseconds.
setInterval(draw_slow, 1000); // calls main every 100 milliseconds.

// create a function to subscribe to topics
var mySubscriber = function (msg, data) {
  if(data == "Targetting Mode"){
    if(game_state !== "Targetting Mode"){
      game_state = "Targetting Mode";
      $('canvas').addClass('testerino');
      console.log(turn_wheel.activePawn.name + ' started targetting mode')
      };
  }
};

function initModes() {
  team2.avatars.forEach(function(hi){
            hi.on('mouseover',function(){if(game_state == "Targetting Mode"){this.tint = 0xcbcbcb}});
            hi.on('mouseout',function(){this.tint = 0xFFFFFF});
            hi.on('mouseup',function(){if(game_state == "Targetting Mode"){Battle.attack(turn_wheel.activePawn,team2.spirits[0]); removeActive(); turn_wheel.next();game_state = "Battle"}})
        });
}
// add the function to the list of subscribers for a particular topic
// we're keeping the returned token, in order to be able to unsubscribe
// from the topic later on
var token = PubSub.subscribe('GAME STATE', mySubscriber);