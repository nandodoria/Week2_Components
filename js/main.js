(() => {

    const HomePageComponent = {
        template: "<h2> You're on the home page </h2>"

    };

    const UsersPageComponent = {
        template: "<h2> You're on the users page </h2>"
    };

    const routes = [
        { path: '/', name: 'home', component: HomePageComponent },
        { path: '/users', name: 'users', component: UsersPageComponent },
    ];

    const router = new VueRouter({
        routes
    });


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
            'HomePageComponent': HomePageComponent,
            'UsersPageComponent': UsersPageComponent
         },

         router: router



    })

})();