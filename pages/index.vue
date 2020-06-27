<template>
  <div>
    <template v-if="posts.length">
      <post-thumbnail
        v-for="post in posts"
        :key="post.id"
        :post-id="post.id"
        :title="post.data.title"
        :edit-time="formatTime(post.data.timestamp)"
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
import time from '@/mixins/time'

import PostThumbnail from '../components/PostThumbnail.vue'
import NoPosts from '../components/NoPosts.vue'
import metaConfig from '../assets/config/meta.js'

export default {
  components: {
    PostThumbnail,
    NoPosts
  },
  mixins: [time],
  head () {
    return {
      title: metaConfig.title,
      meta: [
        {
          property: 'og:url',
          content: `${this.$store.state.rootUrl}${this.$nuxt.$route.path}`
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
          property: 'keywords',
          content: metaConfig.keywords
        }
      ]
    }
  },
  computed: {
    posts () {
      return this.$store.getters.postsSorted
    }
  },
  mounted () {
    this.$ga.page({
      page: `/`,
      title: 'index',
      location: window.location.href
    })
  }
}
</script>
