<template>
    <section class="main">
        <div class="d-flex animate justify-content-center w-100 bounce-in-top" v-if="currentRouteName ==='/' && this.animate === true">
            <b-jumbotron>
                <span>
                    To start using <strong>Keeper</strong> you should be   <router-link class="link" to="/signup">Registred</router-link>. If you already have account, please click   <router-link class="link" to="/signin">Here.</router-link>
                </span>
                <hr class="my-4">
            </b-jumbotron>
        </div>
        <AllItems v-if="auth" :items="forSale"></AllItems>
        <transition name="fade" mode="out-in">
            <router-view :items="forSale"></router-view>
        </transition>
    </section>

</template>
<script>
import AllItems from "./AllItems.vue";
export default {
    name: "Main",
    components: {AllItems},
    data() {
        return {
            animate: false
        }
    },
    computed: {
        forSale() {
            return this.$store.getters.forSale;
        },
        inCart() {
            return this.$store.getters.inCart;
        },
        auth() {
            return this.$store.getters.isAuthenticated;
        },
        currentRouteName() {
            return this.$route.path;
        },
    },
    created() {
        this.$store.dispatch('fetchUser');
        this.$store.commit('clearAuthData');


    },
    mounted(){
        setTimeout(() => {
            this.animate = true;
            console.log('Done');
        }, 1000);
    }
}

</script>

<style scoped lang="scss">

.main {
    display: flex;
    flex-direction: column;
    align-items: center;

    .shopping-card {
        position: absolute;
        right: 10%;
    }
}
.bounce-in-top {
    -webkit-animation: bounce-in-top 1.1s both;
    animation: bounce-in-top 1.1s both;
    margin-top: 250px;
}
.animate {
    transition: all .5s;
}
.link {
    font-weight: 600;
    color: #f1b601;
}
button {
    color: white;
   background: #521751;
    outline: none;
    border: none;
    height: 30px;
}

.fade-enter-active, .fade-leave-active {
    transition: opacity .2s;
}

.fade-enter, .fade-leave-to {
    opacity: 0;
}

@-webkit-keyframes bounce-in-top {
    0% {
        -webkit-transform: translateY(-500px);
        transform: translateY(-500px);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
        opacity: 0;
    }
    38% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
        opacity: 1;
    }
    55% {
        -webkit-transform: translateY(-65px);
        transform: translateY(-65px);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
    }
    72% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
    }
    81% {
        -webkit-transform: translateY(-28px);
        transform: translateY(-28px);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
    }
    90% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
    }
    95% {
        -webkit-transform: translateY(-8px);
        transform: translateY(-8px);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
    }
    100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
    }
}
@keyframes bounce-in-top {
    0% {
        -webkit-transform: translateY(-500px);
        transform: translateY(-500px);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
        opacity: 0;
    }
    38% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
        opacity: 1;
    }
    55% {
        -webkit-transform: translateY(-65px);
        transform: translateY(-65px);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
    }
    72% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
    }
    81% {
        -webkit-transform: translateY(-28px);
        transform: translateY(-28px);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
    }
    90% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
    }
    95% {
        -webkit-transform: translateY(-8px);
        transform: translateY(-8px);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
    }
    100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
    }
}
</style>