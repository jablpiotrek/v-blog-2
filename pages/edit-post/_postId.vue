<template>
  <div class="edit-post">
    <h2 class="edit-post__title">
      Edit Post
    </h2>

    <post-editor
      v-if="post"
      :html.sync="post.html"
      :author.sync="post.author"
      :title.sync="post.title"
      :published.sync="post.published"
      :abstract.sync="post.abstract"
      :thumbnail.sync="post.thumbnail"
    />

    <post-edit-controls @submit="submit" />
  </div>
</template>

<script>
import PostEditor from '@/components/PostEditor.vue'
import PostEditControls from '@/components/PostEditControls.vue'

export default {
  components: {
    PostEditor,
    PostEditControls
  },
  data () {
    return {
      post: {
        html: '',
        author: '',
        title: '',
        published: '',
        abstract: '',
        thumbnail: ''
      }
    }
  },
  computed: {
    id () {
      return this.$route.params.postId
    }
  },
  mounted () {
    this.post = Object.assign({}, this.$store.getters.postById(this.id).data)
  },
  methods: {
    async submit () {
      const { id, post } = this
      const data = { ...post, timestamp: post.timestamp }
      const overwrite = true

      await this.$store.dispatch('addPost', { id, data, overwrite })
    }
  }
}
</script>
