var turn_wheel = new Vue({
    el: '#turn_wheel',
    data: {
        pawn: '',
        pawns: [],
        activePawn: {"abilities": ["test"],"stats":{"atk":0}},
    },
    methods: {
        test: function(){
            this.$forceUpdate();
        }
    }
})

setTimeout(function(){turn_wheel.pawns = test; turn_wheel.activePawn = turn_wheel.pawns[0]; turn_wheel.pawns.shift()}, 1200)

turn_wheel.next = function(){turn_wheel.pawns[turn_wheel.pawns.length] = turn_wheel.activePawn; turn_wheel.activePawn = turn_wheel.pawns[0];turn_wheel.pawns.shift();isEnemy(turn_wheel.activePawn);}

function isEnemy(activePawn){
    if(activePawn.team == "team2"){
        basic_opponent.target = party.spirits[0];
        basic_opponent.init(activePawn);
    }
}