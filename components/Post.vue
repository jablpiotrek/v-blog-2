<template>
  <div class="post">
    <div class="post__header">
      <img
        :src="thumbnail"
        aria-hidden="true"
        class="post__thumbnail"
      >
      <h2 class="post__title">
        {{ title }}
      </h2>
    </div>

    <p>
      {{ abstract }}
    </p>

    <div v-html="html" />
    <div class="post__footer">
      <div class="post__details">
        <p class="post__author">
          {{ author }}
        </p>

        <p class="post__edit-time">
          {{ editTime }}
        </p>
      </div>

      <button
        v-if="displayControls"
        @click="back"
        type="button"
        class="post__goto"
      >
        Go to posts list
      </button>
    </div>
  </div>
</template>

<script>
import 'highlight.js/styles/monokai-sublime.css'

export default {
  name: 'Post',
  metaInfo () {
    return {
      title: this.meta.title,
      meta: [
        {
          property: 'og:url',
          content: this.meta.url
        },
        {
          property: 'og:type',
          content: 'article'
        },
        {
          property: 'og:title',
          content: this.meta.title
        },
        {
          property: 'og:description',
          content: this.meta.desc
        },
        {
          property: 'description',
          content: this.meta.desc
        },
        {
          property: 'og:image',
          content: this.meta.thumbnail
        }
      ]
    }
  },
  props: {
    postId: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: ''
    },
    author: {
      type: String,
      default: ''
    },
    abstract: {
      type: String,
      default: ''
    },
    published: {
      type: Boolean,
      default: false
    },
    html: {
      type: String,
      default: ''
    },
    editTime: {
      type: String,
      default: ''
    },
    displayControls: {
      type: Boolean,
      default: true
    },
    thumbnail: {
      type: String,
      default: ''
    }
  },
  computed: {
    isEditable () {
      return this.$store.getters.isUserLoggedIn
    },
    meta () {
      return {
        url: window.location.href,
        title: this.title,
        desc: this.abstract,
        thumbnail: this.thumbnail
      }
    }
  },
  mounted () {
    this.higlightCode()
  },
  updated () {
    this.higlightCode()
  },
  methods: {
    back () {
      this.$router.push('/')
    },
    async higlightCode () {
      const codeBlocks = document.querySelectorAll('code')

      if (codeBlocks.length) {
        const hljs = await import(/* webpackChunkName: 'highlight-js' */'highlight.js')
        codeBlocks.forEach((block) => {
          hljs.highlightBlock(block)
        })
      }
    }
  }
}
</script>

<style lang="scss">
.post {
  &__header {
    display: flex;
    flex-direction: column;
    align-items: center;

    @media #{$screen-medium} {
      flex-direction: row;
      margin-bottom: $spacer;
    }
  }

  &__thumbnail {
     width: 70px;
    height: 70px;
    border-radius: 35px;
    object-fit: cover;
    border: 1px solid $secondary;
    padding: $spacer-small;
    box-sizing: border-box;

    @media #{$screen-medium} {
      width: 90px;
      height: 90px;
      border-radius: 45px;
    }
  }

  &__title {
        margin: $spacer 0;

    @media #{$screen-medium} {
      margin-left: $spacer-big;
    }
  }

  &__footer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media #{$screen-medium} {
      flex-direction: row;
    }
  }

    &__edit-time {
    font-size: $font-small;
    font-style: italic;
  }

  &__goto {
    width: 100%;
    margin: $spacer 0;

    @media #{$screen-medium} {
      width: 180px;
    }
  }

  &__author {
    color: $secondary;
  }

  &__details {
    width: 100%;
    margin-top: $spacer;

    @media #{$screen-medium} {
      width: auto;
    }
  }
}
</style>
