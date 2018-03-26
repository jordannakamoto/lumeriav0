var team2 = new Vue({
    el: '#enemy_window',
    data: {
        spirit: '',
        spirits: [],
        avatars: [],
    },
    methods: {
        new_spirit: function(spirit){
            var newSpirit = {name: spirit.name, max_hp: spirit.stats.hp, hp: spirit.stats.hp,stats: spirit.stats, team: spirit.team, abilities: spirit.abilities};
            this.spirits.push(newSpirit);
            newSpirit.avatar = pixifySpirit(spirit,team2);
            test.push(newSpirit); //main deck push codename test
        },
    }
})

function pixifySpirit(spirit,team){
    let newAvatar  = new PIXI.Sprite.fromImage(spirit.sprite);
    newAvatar.interactive = true;
    newAvatar.parentGroup = pawnsLayer;
    newAvatar.texture.baseTexture.on('loaded', function(){
        newAvatar.x = Math.floor(Math.random() * (app.screen.width - newAvatar.width));
        newAvatar.y = Math.floor(Math.random() * (app.screen.height - newAvatar.height));
        app.stage.addChild(newAvatar);
        team.avatars.push(newAvatar);
    });
    return newAvatar
}