$(document).ready(function(){
    Battle.start();
});

var Battle = {
    start : function(){
        chat.post_message("battle", " -- battle started --");
    },
    
}