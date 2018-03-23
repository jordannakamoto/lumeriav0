var messages_count = 0;


var chat = new Vue({
    el: '#chat_window',
    data: {
        message: '',
        messages: [],
    },
    methods: {
        post_message: function(tag,string){
            var message = {time: Date.now(), text: string, tag: tag};
            this.messages[messages_count] = message;
            this.update_messages();
            this.$forceUpdate();
            this.update_scroll();
        },
        update_messages: function(){
            messages_count++;
            if (messages_count > 10){
                chat.messages.shift();
                messages_count--;
            }
        },
        update_scroll: function(){
            var container = this.$el.querySelector("#message_body");
            container.scrollTop = container.scrollHeight;
        }
    },
    computed: {
        revMessages: function(){
            return this.messages.slice().reverse();
        }
    }
})