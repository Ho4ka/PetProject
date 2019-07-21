<template>
    <div id="signup">
         <div class="signup-form">
             <h5>Register a new waiter. If you already registered, please press <router-link class="btn-login" to="/auth/signin">HERE</router-link></h5>
             <form @submit.prevent="onSubmit">
                <div class="input" :class="{invalid: !$v.name.required}">
                    <label for="name">Name</label>
                    <input
                            type="name"
                            id="name"
                            @blur="$v.name.$touch()"
                            v-model="name">
                    <p class="invalid" v-if="!$v.name.required">This field must not be empty!</p>
                </div>
                <div class="input" :class="{invalid: $v.email.$error}">
                    <label for="email">Mail</label>
                    <input
                            type="email"
                            id="email"
                            @blur="$v.email.$touch()"
                            v-model="email">
                    <p class="invalid" v-if="!$v.email.email">Please provide a valid email address</p>
                    <p class="invalid" v-if="!$v.email.required">This field must not be empty!</p>
                </div>
                <div class="input" :class="{invalid: $v.password.$error}">
                    <label for="password">Password</label>
                    <input
                            type="password"
                            id="password"
                            @blur="$v.password.$touch()"
                            v-model="password">
                </div>
                <div class="input" :class="{invalid: $v.confirmPassword.$error}">
                    <label for="confirm-password">Confirm Password</label>
                    <input
                            type="password"
                            id="confirm-password"
                            @blur="$v.confirmPassword.$touch()"
                            v-model="confirmPassword">
                    <p class="invalid" v-if="$v.confirmPassword.$error">Password do not much!</p>
                </div>
                <div class="submit">
                    <button :disabled="$v.$invalid" type="submit">Submit</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import { required, email, minLength, sameAs } from 'vuelidate/lib/validators';
    export default {
        data() {
            return {
                email: '',
                password: '',
                confirmPassword: '',
                name: ''
            }
        },
        methods: {
            onSubmit() {
                const formData = {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    confirmPassword: this.confirmPassword,
                };
                this.$store.dispatch('signup', formData).then( res => {
                        this.$router.push({ path: '/' });
                }).catch(error => {
                    console.log(error);
                });
            }
        },
        computed: {
            auth() {
                return this.$store.getters.isAuthenticated
            }
        },
        validations: {
            email: {
                required: required,
                email: email
            },
            password: {
                required: required,
                minLength: minLength(6)
            },
            confirmPassword: {
                sameAs: sameAs('password')
            },
            name: {
                required: required
            }
        }

    }
</script>

<style scoped>
    #signup {
        margin: 50px auto;
        background: white;
        height: auto;
    }
    .signup-form {
        width: 400px;
        border: 1px solid #eee;
        padding: 20px;
        box-shadow: 0 2px 3px #ccc;
    }

    .input {
        margin: 10px auto;
    }

    .input label {
        display: block;
        color: #4e4e4e;
        margin-bottom: 6px;
    }

    .input.inline label {
        display: inline;
    }

    .input input {
        font: inherit;
        width: 100%;
        padding: 6px 12px;
        box-sizing: border-box;
        border: 1px solid #ccc;
    }

    .input.inline input {
        width: auto;
    }

    .input input:focus {
        outline: none;
        border: 1px solid #521751;
        background-color: #eee;
    }

    .input select {
        border: 1px solid #ccc;
        font: inherit;
    }


    .input.invalid label,
    .invalid {
       color: red;
    }
    .input.invalid input {
        border: 1px solid red;
    }
    .submit button {
        border: 1px solid #521751;
        color: #521751;
        padding: 10px 20px;
        font: inherit;
        cursor: pointer;
    }

    .submit button:hover,
    .submit button:active {
        background-color: #521751;
        color: white;
    }

    .submit button[disabled],
    .submit button[disabled]:hover,
    .submit button[disabled]:active {
        border: 1px solid #ccc;
        background-color: transparent;
        color: #ccc;
        cursor: not-allowed;
    }
    .btn-login {
        color: #521751;
        text-decoration: none;
    }
</style>