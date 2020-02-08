<template>
  <div class="post-editor">
    <div class="post-editor__form">
      <div class="post-editor__section">
        <label class="post-editor__label" for="title">
          Title:
        </label>

        <input
          v-model="titleField"
          type="text"
          name="title"
          class="post-editor__title-field"
        >
      </div>
      <div class="post-editor__section">
        <label class="post-editor__label" for="thumbnail">
          Thumbnail image url:
        </label>

        <input
          v-model="thumbnailField"
          type="text"
          name="thumbnail"
          class="post-editor__thumbnail-field"
        >
      </div>
      <div class="post-editor__section">
        <label class="post-editor__label" for="abstract">
          Abstract:
        </label>

        <textarea
          v-model="abstractField"
          type="text"
          name="abstract"
          class="post-editor__abstract-field"
        />
      </div>

      <div class="post-editor__section">
        <label class="post-editor__label" for="html">
          HTML:
        </label>

        <textarea
          v-model="htmlField"
          type="text"
          name="html"
          class="post-editor__html-field"
        />
      </div>
      <div class="post-editor__section">
        <label class="post-editor__label" for="author">
          Author:
        </label>

        <input
          v-model="authorField"
          type="text"
          name="author"
          class="post-editor__author-field"
        >
      </div>
      <div class="post-editor__section">
        <label class="post-editor__label" for="publsihed">
          Publish post:
        </label>

        <input
          v-model="publishedField"
          type="checkbox"
          name="published"
          class="post-editor__published-field"
        >
      </div>
    </div>

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

<style lang="scss">
.post-editor {
  &__form {
    display: flex;
    flex-wrap: wrap;
    margin: $spacer-big 0;
  }
  &__section {
    flex-basis: 100%;

    box-sizing: border-box;
    margin-bottom: $spacer;
    @media #{$screen-medium} {
    flex-basis: 50%;
    &:nth-child(even) {
    padding-left: $spacer-small;
    }
    &:nth-child(odd) {
    padding-right: $spacer-small;
    }
    }
  }
  &__label {
    display: block;
    margin-bottom: $spacer-small;
  }
  &__title-field,
  &__abstract-field,
  &__html-field,
  &__author-field,
  &__thumbnail-field {
    border: 1px solid $primary;
    width: 100%;
    padding: $spacer-small;
    box-sizing: border-box;
  }
  &__abstract-field {
    height: 80px;
  }
    &__html-field {
    height: 200px;
  }
}
</style>
