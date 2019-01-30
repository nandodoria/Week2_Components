export default {
    template: `
    <div id="login">
        <h1>Log In</h1>
        <input type="text" name="username" v-model="input.username" placeholder="user name">
        <input type="password" name="password" v-model="input.password" placeholder="password">
        <button type="button" v-on:click="login()">Log In!</button>
    </div>
    `,

    data(){
        return {
            input: {
                username: "",
                password: ""
            }
        }
    },


    methods: {
        login(){
            console.log("trying to log in");

            //check against our mock account creds

            if (this.input.username != "" && this.input.password != ""){

                    // do a fetch here and check creds on the back end
                    let url = `./includes/index.php?username=${this.input.username}&&password=${this.input.password}`;

                    fetch(url)
                        .then(res => res.json())
                        .then(data => {
                            if (data[0] == "false" || data[0].length < 1) {
                                console.log("authentication failed, try again");
                            } else {
                                //if the back-end authentication works, then go to the users page
                                this.$emit("authenticated", true);
                                this.$router.replace({ name: "users" });
                            }
                        })
                        .catch(function(error) {
                            console.error(error);
                        });
                } else {
                    console.log("login failed");
                }


        }
    }

}