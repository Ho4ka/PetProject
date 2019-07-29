<template>
  <div id="signin">
    <div class="signin-form slide-in-elliptic-top-fwd">
      <h5>Please login. Or if you a new user  <router-link class="btn-login" to="/signup">SIGN UP</router-link></h5>
      <form @submit.prevent="onSubmit">
        <div class="input">
          <label for="email">Mail</label>
          <input
                  type="email"
                  id="email"
                  v-model="email">
        </div>
        <div class="input">
          <label for="password">Password</label>
          <input
                  type="password"
                  id="password"
                  v-model="password">
        </div>
        <div class="submit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
    <div class="mb-1">
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        email: '',
        password: '',
          name: ''
      }
    },
    methods: {
      onSubmit () {
        const formData = {
          email: this.email,
          password: this.password,
        };
          this.$store.dispatch('login', {email:formData.email, password: formData.password}).then(()=>{
              this.showMsgBoxTwo();
          });
      },
        showMsgBoxTwo() {
            this.$bvModal.msgBoxOk(`Login successful!`, {
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
    }
  }
</script>

<style scoped>
  #signin {
   display: flex;
    width: 100%;
    height: 100vh;
    background: url("../assets/images/waiter.png");
    background-size: cover;
    background-attachment: fixed;
  }
  .signin-form {
    width: 450px;
    height: 300px;
    margin: 100px auto;
    border: 1px solid #eee;
    padding: 20px;
    box-shadow: 0 2px 3px #ccc;
    background: white;
  }

  .input {
    margin: 10px auto;
  }

  .input label {
    display: block;
    color: #4e4e4e;
    margin-bottom: 6px;
  }

  .input input {
    font: inherit;
    width: 100%;
    padding: 6px 12px;
    box-sizing: border-box;
    border: 1px solid #ccc;
  }

  .input input:focus {
    outline: none;
    border: 1px solid #521751;
    background-color: #eee;
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