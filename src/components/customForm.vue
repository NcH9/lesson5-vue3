<template>
    <form @submit.prevent="validateForm">
        <div class="grid">

            <div class="grid2">
                <label>Login</label>
                <input type="text" v-model.lazy="form.login" @blur="validateLogin"/>
                <span>{{ form.login }}</span>
                <span class="error">{{ error.login }}</span>
            </div>

            <div class="grid2">
                <label>Password</label>
                <input type="password" v-model.lazy="form.password" @blur="validatePassword"/>
                <span>{{ form.password }}</span>
                <span class="error">{{ error.password }}</span>
            </div>

            <div class="grid2">
                <label>Age</label>
                <input type="number" v-model.number="form.age" @blur="validateAge"/>
                <span>{{ form.age }}</span>
                <span class="error">{{ error.age }}</span>
            </div>

            <div class="grid2">
                <label>Email</label>
                <input type="email" v-model.lazy="form.email" @blur="validateEmail"/>
                <span>{{ form.email }}</span>
                <span class="error">{{ error.email }}</span>
            </div>

            <div class="grid2">
                <label>Do you agree to worship otter?</label>
                <input type="checkbox" v-model.lazy="form.worship" @input="validateOtter"/>
                <span>{{ form.worship }}</span>
                <span class="error">{{ error.worship }}</span>
            </div>
            <button type="submit">Submit form </button>
        </div>
    </form>
</template>
  
<script>
    export default {
        name: 'customForm',
        data(){
            return {
                form: {
                    login: '',
                    password: '',
                    email: '',
                    age: '',
                    worship: false,
                },
                error: {
                    login: '',
                    password: '',
                    email: '',
                    age: '',
                    worship: '',
                },
            }
        },
        methods: {
            submitForm(){
                console.log('formsubmitted');
                this.resetForm();
            },
            resetForm(){
                this.form = {
                    login: '',
                    password: '',
                    email: '',
                    age: '',
                    worship: false,
                };
                this.error = {
                    login: '',
                    password: '',
                    email: '',
                    age: '',
                    worship: '',
                };
            },
            validateLogin(){
                if (this.form.login.length < 3) {
                    this.error.login = 'Login must be at least 3 characters long.';
                } else {
                    this.error.login = '';
                }
            },
            validatePassword() {
                if (this.form.password.length < 5) {
                    this.error.password = 'Password must be at least 5 characters long.';
                } else {
                    this.error.password = '';
                }
            },
            validateEmail() {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(this.form.email)) {
                    this.error.email = 'Please enter a valid email address.';
                } else {
                    this.error.email = '';
                }
            },
            validateAge() {
                if (this.form.age < 3){
                    this.error.age = 'You must be older to submit this form'
                } else if (this.form.age > 120){
                    this.error.age = 'No way you are this old'
                } else {
                    this.error.age = '';
                }
            },
            validateOtter() {
                if (this.form.worship){
                    this.error.worship = 'WRONG!'
                } else {
                    this.error.worship = '';
                }
            },
            validateForm() {
                this.validateLogin();
                this.validateEmail();
                this.validatePassword();
                this.validateAge();
                if (!this.error.login && !this.error.email && !this.error.password && !this.error.age && !this.error.worship){
                    this.submitForm();
                }
            }
        }
    };
</script>
<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
input {
    padding: 5px;
    margin: 5px;
    background-color: rgb(138, 137, 137);
    border-radius: 15px;
}
input:focus {
    background-color: white;
}
button {
    background-color: white;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: rgb(31, 31, 31);
    border-radius: 10px;
}
.error {
    color: rgb(255, 110, 110)
}
.grid {
    display: grid;
}
.grid2 {
    display: grid;
    grid-template-columns: 70px repeat(2, 1fr) 3fr;
    margin: 10px;
    margin-left: -10px
}
label {
    display: flex;
    place-items: center;
}
span{
    display: flex;
    place-items: center; 
}
</style>
  