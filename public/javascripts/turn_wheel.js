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
        },
    }
})

setTimeout(function(){
    turn_wheel.pawns = test; turn_wheel.activePawn = turn_wheel.pawns[0]; turn_wheel.pawns.shift();var tes = turn_wheel.activePawn.avatar;drawActive(tes)}
    , 1200)


turn_wheel.next = function(){$('#activePawn div').css('opacity','0');setTimeout(function(){$('#activePawn div').css('opacity','1')},280);turn_wheel.pawns[turn_wheel.pawns.length] = turn_wheel.activePawn; turn_wheel.activePawn = turn_wheel.pawns[0];turn_wheel.pawns.shift();var tes = turn_wheel.activePawn.avatar;drawActive(tes);isEnemy(turn_wheel.activePawn);}

function isEnemy(activePawn){
    if(activePawn.team == "team2"){
        basic_opponent.target = party.spirits[0];
        basic_opponent.init(activePawn);
    }
}

turn_wheel.activePawn.selectTarget = function() {
    game_state = this.name + " is selecting a target";
    //run mouse position check....
}

function drawActive(tes){
    var g = new PIXI.Graphics()
    g.lineStyle(1, 0x42aaf4, .6);
    g.drawEllipse(tes.position.x + tes.width/2,tes.position.y + tes.height,tes.width/1.6, tes.height/5);
    g.parentGroup = pawnsLayer;
    app.stage.addChild(g);}