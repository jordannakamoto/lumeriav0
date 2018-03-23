var team2 = new Vue({
    el: '#enemy_window',
    data: {
        spirit: '',
        spirits: [],
    },
    methods: {
        new_spirit: function(spirit){
            var newSpirit = {name: spirit.name, max_hp: spirit.stats.hp, hp: spirit.stats.hp,stats: spirit.stats, team: spirit.team, abilities: spirit.abilities};
            this.spirits.push(newSpirit);
            test.push(newSpirit);
            let test5  = new PIXI.Sprite.fromImage(spirit.sprite);
            test5.texture.baseTexture.on('loaded', function(){
                test5.x = Math.floor(Math.random() * (app.screen.width - test5.width));
                test5.y = Math.floor(Math.random() * (app.screen.height - test5.height));
                app.stage.addChild(test5);});
        },
    }
})