<template>
  <div>
    <h2>
      Add post
    </h2>

    <post-editor
      :html.sync="html"
      :author.sync="author"
      :title.sync="title"
      :published.sync="published"
      :abstract.sync="abstract"
      :thumbnail.sync="thumbnail"
    />

    <post-edit-controls @submit="submit" />
  </div>
</template>

<script>
import time from '@/mixins/time'

import PostEditor from '../components/PostEditor.vue'
import PostEditControls from '../components/PostEditControls.vue'

export default {
  name: 'AddPost',
  components: {
    PostEditor,
    PostEditControls
  },
  mixins: [time],
  data () {
    return {
      html: '',
      published: false,
      author: '',
      title: '',
      abstract: '',
      editTime: '',
      thumbnail: ''
    }
  },
  computed: {
    post () {
      return {
        author: this.author,
        html: this.html,
        published: this.published,
        title: this.title,
        abstract: this.abstract,
        editTime: this.editTime,
        thumbnail: this.thumbnail
      }
    }
  },
  methods: {
    async submit () {
      this.editTime = this.time()
      await this.$store.dispatch('addPost', this.post)
    }
  }
}
</script>
