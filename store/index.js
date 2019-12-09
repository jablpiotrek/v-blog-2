import postsDB from '@/plugins/firestore.js'

export const state = () => ({
  publishedPostsDB: null,
  posts: [],
  currentUser: null,
  postsListener: null
})

export const actions = {
  async nuxtServerInit ({ commit }) {
    const collection = postsDB.where('published', '==', true)
    const posts = await collection.get()
    commit('updatePosts', posts)
  }
}

export const mutations = {
  updatePosts (state, posts) {
    posts.forEach((post) => {
      state.posts.push({
        id: post.id,
        data: post.data()
      })
    })
  },
  currentUser (state, uid) {
    state.currentUser = uid
  }
}

export const getters = {
  postById (state) {
    return id => state.posts.filter((post) => {
      return post.id === id
    })[0]
  },
  isUserLoggedIn (state) {
    return !!state.currentUser
  }
}
