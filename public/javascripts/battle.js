var test = [];

/* get summons from server */

$.get( "/test", function( data ) {
            for(var i = 0; i < data.length; i++){
                if(data[i].team == "player"){
                    party.new_spirit(data[i]);
                }else{team2.new_spirit(data[i])}
            }
});


$(window).on("load",function(){
    Battle.start();
    Battle.load_pawns();
});
var Battle = {
    start : function(){
        chat.post_message("battle", " -- battle started --");
    },
    load_pawns : function(){
        // sort by name
        setTimeout(function(){console.log(spdSort('stats.spd',test));},200);
        setTimeout(function(){Battle.remaining_enemies = team2.spirits.length;},1000);
    },
    attack : function(attacker,defender){
        var damage = attacker.stats.atk - defender.stats.def;
        var msg = "attack";
        if (damage > 1){
            defender.hp -= damage;
        }else{
            damage = 1;
            defender.hp -= 1;
        }
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