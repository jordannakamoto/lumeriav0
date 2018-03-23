var basic_opponent = {
    "init": function(activePawn){
        console.log("opponent moves")
        setTimeout(function(){basic_opponent.attack(activePawn);},1500);
    },
    "target": '',
    "attack": function(activePawn){
        Battle.attack(activePawn,this.target);
        turn_wheel.next();
    },
    "defend": function(){
    },
    "get_target": function(){
    }
}