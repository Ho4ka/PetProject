import Vue from 'vue';
import Vuex from 'vuex';
import json from './static/data.json';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
      forSale: json,
      inCart: [],
      idToken: null,
      userId: null,
      user: null
},
    mutations: {
        ADD_TO_CART(state, invId) { state.inCart.push(invId); },
        REMOVE_FROM_CART(state, index) { state.inCart.splice(index, 1)},
        CLEAR_CART(state){
            state.inCart = [];
        },
        authUser(state, userData) {
            state.idToken = userData.token;
            state.userId = userData.userId;
        },
        storeUser(state, user) {
            state.user = user;
        },
        clearAuthData(state) {
            state.idToken = null;
            state.userId = null;
        }
        },
    actions: {
        addToCart(context, invId) { context.commit('ADD_TO_CART', invId); },
        removeFromCart(context, index) { context.commit('REMOVE_FROM_CART', index); },
        clearCart(state) { state.commit("CLEAR_CART"); },
        signup({commit, dispatch}, authData) {
            axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyDKssT9vsm6cjKLZ_pPsxuzACRdMACoHds',
                {
                    email: authData.email,
                    password: authData.password,
                    name: authData.name,
                    returnSecureToken: true
                })
                .then(res => {
                    console.log(res);
                    commit('authUser', {
                        token: res.data.idToken,
                        userId: res.data.localId,
                    });
                    // debugger;
                    dispatch('storeUser', authData);
                })
                .catch(error => console.log(error))
        },
        login({commit, dispatch}, authData){
            axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyDKssT9vsm6cjKLZ_pPsxuzACRdMACoHds',
                {
                    email: authData.email,
                    password: authData.password,
                    returnSecureToken: true
                })
                .then(res => {
                    console.log(res);
                    commit('authUser', {
                        token: res.data.idToken,
                        userId: res.data.localId
                    });
                    dispatch('storeUser', authData);
                })
                .catch(error => console.log(error))
        },
        logout({commit}){
            commit('clearAuthData');
        },
        storeUser({commit, state}, userData){
            if (!state.idToken) {
                return;
            }
            axios.post('https://petproject-c4eb1.firebaseio.com/users.json' + '?auth=' + state.idToken, userData)
                .then(res =>  {
                    commit('storeUser', userData);
                })
                .catch(error => console.log(error))
        },
        fetchUser({commit, state}) {
            if (!state.idToken) {
                return;
            }
            axios.get('https://petproject-c4eb1.firebaseio.com/users.json' + '?auth=' + state.idToken)
                .then(res => {
                    const data = res.data;
                    const users = [];
                    for(let key in data) {
                        const user = data[key];
                        user.id = key;
                        users.push(user);
                    }
                    console.log(users);
                    commit('storeUser', users[0])

                })
                .catch(error => console.log(error))
        },
    },
    getters: {
        forSale: state => state.forSale,
        inCart: state => state.inCart,
        user(state) {return state.user;},
        isAuthenticated(state) {
            return state.idToken !== null;
        }
    },


});