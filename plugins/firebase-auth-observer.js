import firebase from 'firebase/app'
import 'firebase/auth'

export default ({ store }) => {
  firebase.auth().onAuthStateChanged((user) => {
    const uid = user ? user.uid : null
    store.commit('currentUser', uid)
  })
}
