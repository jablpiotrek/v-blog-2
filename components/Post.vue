<template>
  <div class="post">
    <div class="post__header">
      <img
        v-if="thumbnail.length"
        :src="thumbnail"
        aria-hidden="true"
        class="post__thumbnail"
      >
      <h2 class="post__title">
        {{ title }}
      </h2>
    </div>

    <p class="post__abstract">
      {{ abstract }}
    </p>

    <div class="post__main" v-html="html" />
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
        type="button"
        class="post__goto"
        @click="back"
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
  data () {
    return {
      chagesDebounce: null
    }
  },
  computed: {
    isEditable () {
      return this.$store.getters.isUserLoggedIn
    }
  },
  mounted () {
    this.higlightCode()
  },
  updated () {
    clearTimeout(this.changesDebounce)
    this.changesDebounce = setTimeout(this.higlightCode, 1000)
  },
  methods: {
    back () {
      this.$router.push('/')
    },
    async higlightCode () {
      const codeBlocks = document.querySelectorAll('pre')

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
    font-size: $font-large;
    text-align: center;

    @media #{$screen-medium} {
      margin-left: $spacer;
      text-align: left;
      font-size: $font-extra-large;
    }
  }

  &__abstract {
    padding: $spacer-big 0;
    font-style: italic;
  }

  &__main {
    img {
      width: 100%;
      margin: $spacer 0;
      &.original-width {
        width: auto;
        max-width: 100%;
        margin-left: auto;
        margin-right: auto;
        display: block;
      }
    }

    h2 {
      font-size: $font-big;
      margin-top: $spacer-big;
      margin-bottom: $spacer-small;
      border-left: 3px solid $secondary;
      padding-left: $spacer;

      @media #{$screen-medium} {
       font-size: $font-large;
       padding-left: $spacer;
      }
    }

    p {
      margin: $spacer 0;
      line-height: 1.6;

      &.description {
        font-size: $font-small;
        font-style: italic;
        text-align: center;
        margin-top: 0;
      }

      &.citation {
        font-style: italic;
        margin: $spacer;
        border-left: 1px solid $primary;
        padding: 0 0 $spacer $spacer;
        @media #{$screen-medium} {
          margin: $spacer-big $spacer-large;
        }
      }
    }

    li {
      margin: $spacer-small 0;
    }

    ul, ol {
      padding: $spacer 0 $spacer $spacer-big;
      @media #{$screen-medium} {
        padding: $spacer-big $spacer-large;
      }
    }

    .hljs {
      margin: $spacer-big $spacer;
      border-radius: $spacer-small;
      box-shadow: 4px 4px 13px -3px rgba(0,0,0,1);
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
