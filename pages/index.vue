<template>
  <div>
    <template v-if="posts.length">
      <post-thumbnail
        v-for="post in posts"
        :key="post.id"
        :post-id="post.id"
        :title="post.data.title"
        :edit-time="post.data.editTime"
        :published="post.data.published"
        :abstract="post.data.abstract"
        :thumbnail="post.data.thumbnail"
        :author="post.data.author"
      />
    </template>

    <no-posts v-else>
      Unfortunately, there are no posts that could be displayed.
    </no-posts>
  </div>
</template>

<script>

import PostThumbnail from '../components/PostThumbnail.vue'
import NoPosts from '../components/NoPosts.vue'
import metaConfig from '../assets/config/meta.js'

export default {
  components: {
    PostThumbnail,
    NoPosts
  },
  metaInfo () {
    return {
      title: metaConfig.title,
      meta: [
        {
          property: 'og:url',
          content: window.location.href
        },
        {
          property: 'og:type',
          content: 'blog'
        },
        {
          property: 'og:title',
          content: metaConfig.title
        },
        {
          property: 'og:description',
          content: metaConfig.desc
        },
        {
          property: 'description',
          content: metaConfig.desc
        },
        {
          property: 'keywords',
          content: metaConfig.keywords
        }
      ]
    }
  },
  computed: {
    posts () {
      return this.$store.state.posts
    }
  }
  // async fetch ({ store, params }) {
  //   console.log(store.state)
  //   const posts = await postsDB.where('published', '==', true).get()
  //   store.commit('updatePosts', posts)
  // }
}
</script>
