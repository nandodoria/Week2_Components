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
                if (this.input.password == this.$parent.mockAccount.password){
                    console.log("you are logged in!");
                    this.$emit("authenticated", true);
                    this.$router.replace({name: "users"});
                } else {
                    console.log("login failed");
                }
            } else {
                console.log("username and password can't be blank");
            }

        }
    }

}