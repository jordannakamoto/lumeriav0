var party = new Vue({
    el: '#party_window',
    data: {
        spirit: '',
        spirits: [],
    },
    methods: {
        new_spirit: function(name){
            var spirit = {name: name};
            this.spirits.push(spirit);
        },
    }
})