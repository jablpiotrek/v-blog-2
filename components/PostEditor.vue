<template>
  <div class="editor">
    <label for="title">
      Title:
    </label>

    <input
      v-model="titleField"
      type="text"
      name="title"
    >

    <label for="abstract">
      Abstract:
    </label>

    <textarea
      v-model="abstractField"
      type="text"
      name="abstract"
    />

    <label for="thumbnail">
      Thumbnail image url:
    </label>

    <textarea
      v-model="thumbnailField"
      type="text"
      name="thumbnail"
    />

    <label for="html">
      HTML:
    </label>

    <textarea
      v-model="htmlField"
      type="text"
      name="html"
    />

    <label for="author">
      Author:
    </label>

    <input
      v-model="authorField"
      type="text"
      name="author"
    >

    <label for="publsihed">
      Publish post automatically
    </label>

    <input
      v-model="publishedField"
      type="checkbox"
      name="published"
    >
    <post
      :title="title"
      :html="html"
      :author="author"
      :abstract="abstract"
      :display-controls="false"
      :thumbnail="thumbnail"
      post-id="post-previev"
    />
  </div>
</template>
<script>
import Post from './Post.vue'
export default {
  name: 'PostEditor',
  components: {
    Post
  },
  props: {
    html: {
      required: true,
      type: String
    },
    author: {
      required: true,
      type: String
    },
    title: {
      required: true,
      type: String
    },
    abstract: {
      required: true,
      type: String
    },
    published: {
      required: true,
      type: Boolean
    },
    thumbnail: {
      required: true,
      type: String
    }
  },
  computed: {
    htmlField: {
      get () {
        return this.html
      },
      set (value) {
        this.$emit('update:html', value)
      }
    },
    titleField: {
      get () {
        return this.title
      },
      set (value) {
        this.$emit('update:title', value)
      }
    },
    publishedField: {
      get () {
        return this.published
      },
      set (value) {
        this.$emit('update:published', value)
      }
    },
    abstractField: {
      get () {
        return this.abstract
      },
      set (value) {
        this.$emit('update:abstract', value)
      }
    },
    thumbnailField: {
      get () {
        return this.thumbnail
      },
      set (value) {
        this.$emit('update:thumbnail', value)
      }
    },
    authorField: {
      get () {
        return this.author
      },
      set (value) {
        this.$emit('update:author', value)
      }
    }
  }
}
</script>
