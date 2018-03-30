var test = [];

/* get summons from server */

$.get( "/test", function( summons_data ) {
            for(var i = 0; i < summons_data.length; i++){
                if(summons_data[i].team == "player"){
                    party.new_spirit(summons_data[i]);
                }else{team2.new_spirit(summons_data[i])}
            }
});


$(window).on("load",function(){
    Battle.start();
    Battle.load_pawns();
});
var Battle = {
    start : function(){
        chat.post_message("battle", " -- battle started --");
        PubSub.publish('GAME STATE', 'Battle Start');
    },
    load_pawns : function(){
        // sort by name
        setTimeout(function(){console.log(spdSort('stats.spd',test));},300);
        setTimeout(function(){Battle.remaining_enemies = team2.spirits.length;},1000);
    },
    attack : function(attacker,defender){
        var damage = attacker.stats.atk - defender.stats.def;
        var msg = "attack";
        if (damage > 1){
            defender.hp -= damage;
        }else{
            damage = 1;
            defender.hp -= damage;
        }
        
            var img = $('<span>'+ damage +'</span>');
            if(attacker.team === "player"){
                $("#hits").html(img).offset({ top: mouse.y - 12 , left: mouse.x - 2});}
            if(attacker.team === "team2"){
                $("#hits").html(img).offset({ top: defender.avatar.y - 4 , left: defender.avatar.x + 16});}
            
            const { easing, keyframes, styler } = window.popmotion;

            const test4 = styler(document.querySelector('#hits'));
            var test2 = 5 * Math.random();
            var test3 = -2 * Math.random();
            var test59 = -4 + (8 * Math.random());
            
            keyframes({
              values: [
                { x: -5 + (10 * Math.random()), y: 5 + (10 * Math.random()), rotate: 0, opacity: 1},
                { x: (test2) , y: (test3), rotate: test59, opacity: 1 },
                {x: (test2 + 1), y: (test3 -14), rotate: test59, opacity: 0}
              ],
              duration: 1300,
              times: [0, 0.9, 1],
              ease: easing.cubicBezier(.25,1.23,.98,1.26),
            }).start(test4.set);
            
    
        if(attacker.team == "team2"){
            msg = "enemy_attack"
        }
            chat.post_message(msg, attacker.name + " attacks " + defender.name + " for " + damage + " damage.")

        setTimeout(function(){chat.update_scroll();},1000) //closure hack
        if (defender.hp <= 0){
            chat.post_message("kill", defender.name + " has been defeated.");
            this.remaining_enemies-= 1;
            if(this.remaining_enemies == 0){
                chat.post_message("victory", "victory, battle is over");
                $('#turn_wheel').hide();
            }
        }
    },
    
}

var spdSort = function (prop, arr) {
    prop = prop.split('.');
    var len = prop.length;
    
    arr.sort(function (a, b) {
        var i = 0;
        while( i < len ) {
            a = a[prop[i]];
            b = b[prop[i]];
            i++;
        }
        if (a < b) {
            return 1;
        } else if (a > b) {
            return -1;
        } else {
            return 0;
        }
    });
    return arr;
};
