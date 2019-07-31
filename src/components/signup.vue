<template>
    <div id="signup" class="">
         <div class="signup-form slide-in-elliptic-top-fwd">
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
        <div class="mb-1">
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
        this.$store.dispatch('signup', formData);
          this.showMsgBoxTwo();

      },
      showMsgBoxTwo() {
        this.$bvModal.msgBoxOk(`Waiter ${this.name} was successfully created `, {
          title: 'Confirmation',
          size: 'sm',
          buttonSize: 'sm',
          okVariant: 'success',
          headerClass: 'p-2 border-bottom-0',
          footerClass: 'p-2 border-top-0',
          centered: true
        }).finally(value => {
            this.$router.push({path: '/pizza'});
        })
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
  display: flex;
    width: 100%;
    height: 100vh;
    background: url("../assets/images/waiter.png");
    background-size: cover;
    background-attachment: fixed;
}
.signup-form {
    margin: 100px auto;
    width: 400px;
    max-height: 530px;
    border: 1px solid #eee;
    padding: 20px;
    background: white;
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
    color: #f1b601;
    text-decoration: none;
}
@-webkit-keyframes slide-in-fwd-center {
    0% {
        -webkit-transform: translateZ(-1400px);
        transform: translateZ(-1400px);
        opacity: 0;
    }
    100% {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        opacity: 1;
    }
}
@keyframes slide-in-fwd-center {
    0% {
        -webkit-transform: translateZ(-1400px);
        transform: translateZ(-1400px);
        opacity: 0;
    }
    100% {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        opacity: 1;
    }
}


@-webkit-keyframes slide-in-elliptic-top-fwd {
    0% {
        -webkit-transform: translateY(-600px) rotateX(-30deg) scale(0);
        transform: translateY(-600px) rotateX(-30deg) scale(0);
        -webkit-transform-origin: 50% 100%;
        transform-origin: 50% 100%;
        opacity: 0;
    }
    100% {
        -webkit-transform: translateY(0) rotateX(0) scale(1);
        transform: translateY(0) rotateX(0) scale(1);
        -webkit-transform-origin: 50% 1400px;
        transform-origin: 50% 1400px;
        opacity: 1;
    }
}
@keyframes slide-in-elliptic-top-fwd {
    0% {
        -webkit-transform: translateY(-600px) rotateX(-30deg) scale(0);
        transform: translateY(-600px) rotateX(-30deg) scale(0);
        -webkit-transform-origin: 50% 100%;
        transform-origin: 50% 100%;
        opacity: 0;
    }
    100% {
        -webkit-transform: translateY(0) rotateX(0) scale(1);
        transform: translateY(0) rotateX(0) scale(1);
        -webkit-transform-origin: 50% 1400px;
        transform-origin: 50% 1400px;
        opacity: 1;
    }
}

.slide-in-elliptic-top-fwd {
    -webkit-animation: slide-in-elliptic-top-fwd 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    animation: slide-in-elliptic-top-fwd 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
</style>