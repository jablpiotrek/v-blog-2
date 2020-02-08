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
    commit('updatePosts', posts)
  },
  async deletePost ({ commit }, postId) {
    await allPosts.doc(postId).delete()
    commit('deletePost', postId)
  },
  async addPost ({ commit }, post) {
    await allPosts.doc(post.id).set(post.data)
    commit('addPost', post)
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
  deletePost (state, postId) {
    state.posts = state.posts.filter((post) => {
      return post.id !== postId
    })
  },
  addPost (state, newPost) {
    state.posts = state.posts.filter((post) => {
      return post.id !== newPost.id
    })
    state.posts.push(newPost)
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
