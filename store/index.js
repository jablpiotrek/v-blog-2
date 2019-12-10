import postsDB from '@/plugins/firestore.js'

const allPosts = postsDB
const publishedPosts = allPosts.where('published', '==', true)

export const state = () => ({
  posts: [],
  currentUser: null
})

export const actions = {
  async nuxtServerInit ({ commit }) {
    const posts = await publishedPosts.get()
    commit('updatePosts', posts)
  },
  async getPosts ({ commit }, fetchAll = false) {
    const collection = fetchAll ? allPosts : publishedPosts
    const posts = await collection.get()
    posts.forEach((post) => {
      console.log(post.id)
    })
    commit('updatePosts', posts)
  }
}

export const mutations = {
  updatePosts (state, posts) {
    const newPosts = []
    posts.forEach((post) => {
      newPosts.push({
        id: post.id,
        data: post.data()
      })
    })
    state.posts = newPosts
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
