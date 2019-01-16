(() => {

    const liveuser = {
        props: ['first_name', 'last_name', 'role'],

        template: "#activeuser",

        methods: {
            logChildMsg() {
                console.log("hello from the child component");
            },

            runParentFunc() {
                this.$emit('pass-func-call-up')
            }
        },

        created: function() {
            console.log('child component is live');
        }
    };


    const vm = new Vue({
         el: '#app',

         data: {
             message: "sup from vue!"
         },

         created: function() {
            console.log('parent is live');
         },

         methods: {
             logParent(message){
                 console.log("from the parent", message);
             },

             logMainMessage(){
                 console.log("called from inside a child, lives in the parent");
             }
         },

         components: {
            user: liveuser
         }



    })

})();