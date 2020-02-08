<template>
  <div>
    <post
      :post-id="id"
      :title="post.data.title"
      :edit-time="post.data.editTime"
      :published="post.data.published"
      :html="post.data.html"
      :author="post.data.author"
      :abstract="post.data.abstract"
      :thumbnail="post.data.thumbnail"
    />
  </div>
</template>

<script>
import Post from '@/components/Post.vue'

export default {
  components: {
    Post
  },
  computed: {
    id () {
      return this.$route.params.postId
    },
    post () {
      return this.$store.getters.postById(this.id)
    },
    isLoading () {
      return !this.$store.state.postsFetched
    }
  }
}
</script>
