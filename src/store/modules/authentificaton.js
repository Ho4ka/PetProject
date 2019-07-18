
import axios from 'axios/index';


 const state = {
    idToken: null,
    userId: null,
    user: null
  };
  const mutations = {
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
  };
  const actions = {
    signup({commit, dispatch}, authData) {
      axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyDKssT9vsm6cjKLZ_pPsxuzACRdMACoHds',
        {
          email: authData.email,
          password: authData.password,
          name: authData.name,
          returnSecureToken: true
        })
        .then(res => {
          commit('authUser', {
            token: res.data.idToken,
            userId: res.data.localId,
            name: res.data.name
          });
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
          commit('authUser', {
            token: res.data.idToken,
            userId: res.data.localId
          });
          // dispatch('storeUser', authData);
          // dispatch('fetchUser');
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
  };
 const getters = {
    user(state) {return state.user;},
    isAuthenticated(state) {
      return state.idToken !== null;
    }
  };

export default {
  state,
  getters,
  mutations,
  actions
};