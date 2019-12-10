import firebase from 'firebase/app'
import 'firebase/auth'

export default ({ store }) => {
  let authStateChanged = false

  function updatePostsList (newUid) {
    if (newUid) {
      authStateChanged = true
      store.dispatch('getPosts', true)
    } else if (authStateChanged) {
      store.dispatch('getPosts', false)
    }
  }

  firebase.auth().onAuthStateChanged((user) => {
    const uid = user ? user.uid : null
    updatePostsList(uid)
    store.commit('currentUser', uid)
  })
}
