<template>
  <div>
    <post
      v-if="showPost"
      :post-id="id"
      :title="post.data.title"
      :edit-time="formatTime(post.data.timestamp)"
      :published="post.data.published"
      :html="post.data.html"
      :author="post.data.author"
      :abstract="post.data.abstract"
      :thumbnail="post.data.thumbnail"
    />
    <post-placeholder v-else />
  </div>
</template>

<script>
import time from '@/mixins/time'

import Post from '@/components/Post.vue'
import PostPlaceholder from '@/components/PostPlaceholder.vue'

export default {
  components: {
    Post,
    PostPlaceholder
  },
  mixins: [time],
  computed: {
    id () {
      return this.$route.params.postId
    },
    post () {
      return this.$store.getters.postById(this.id)
    },
    isLoading () {
      return !this.$store.state.postsFetched
    },
    showPost () {
      const { isLoading, post } = this
      return isLoading && post
    }
  },
  head () {
    return {
      title: this.post.data.title,
      meta: [
        {
          property: 'og:url',
          content: `${this.$store.state.rootUrl}${this.$nuxt.$route.path}`
        },
        {
          property: 'og:type',
          content: 'article'
        },
        {
          property: 'og:title',
          content: this.post.data.title
        },
        {
          property: 'og:description',
          content: this.post.data.abstract
        },
        {
          property: 'og:image',
          content: this.post.data.thumbnail
        }
      ]
    }
  },
  mounted () {
    this.$ga.page({
      page: `/post/${this.id}`,
      title: this.post.data.title,
      location: window.location.href
    })
  }
}
</script>
