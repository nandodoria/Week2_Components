(() => {

    const HomePageComponent = {
        template: "<h2> You're on the home page </h2>"

    };

    const UsersPageComponent = {
        props: ['id'],
        template: "#userList",

        data: function() {
            return {
                users: []
            }
        },

        created: function(){
            console.log('user component created!');

            this.fetchUserData(this.id);
        },

        methods: {
            fetchUserData(user) {
                debugger;

                let url = `./includes/index.php?user=${user}`;

                fetch(url)
                    .then(res=> res.json())
                    .then(data => this.users = data)
                    .catch(function(error){
                        console.error(error);
                    });
            }
        }
    };
    
    const ContactPageComponent = {
        template: "<h2> You're on the contact page<h2>"
    };

    const ErrorPageComponent = {
        template: "<h2> Page not found!! Try again</h2>"
    };

    const routes = [
        { path: '/', name: 'home', component: HomePageComponent },
        { path: '/users/:id', name: 'users', component: UsersPageComponent, props: true },
        { path: '/contact', name: 'contact', component: ContactPageComponent },
        { path: '/*', name: 'error', component: ErrorPageComponent }

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
            'UsersPageComponent': UsersPageComponent,
            'ContactPageComponent': ContactPageComponent,
            "ErrorPageComponent" : ErrorPageComponent,
         },

         router: router



    })

})();