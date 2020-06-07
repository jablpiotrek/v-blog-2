<template>
  <div class="post-thumbnail">
    <div class="post-thumbnail__header">
      <div v-if="thumbnail.length" class="post-thumbnail__image-container">
        <img
          :src="thumbnail"
          aria-hidden="true"
          class="post-thumbnail__image"
        >
      </div>

      <h2 class="post-thumbnail__title">
        {{ title }}
      </h2>
    </div>

    <p class="post-thumbnail__abstract">
      {{ abstract }}
    </p>

    <div class="post-thumbnail__footer">
      <div class="post-thumbnail__details">
        <p class="post-thumbnail__author">
          {{ author }}
        </p>

        <p class="post-thumbnail__edit-time">
          {{ editTime }}
        </p>
      </div>
      <button
        type="button"
        class="post-thumbnail__goto"
        @click="openPost"
      >
        Go to post
        <icon
          icon="chevron-right"
          class="post-thumbnail__goto-icon"
        />
      </button>
    </div>
    <post-control-buttons
      v-if="isEditable"
      :post-id="postId"
    />
  </div>
</template>

<script>
import PostControlButtons from './PostControlButtons.vue'

export default {
  components: {
    PostControlButtons
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
    abstract: {
      type: String,
      default: ''
    },
    published: {
      type: Boolean,
      default: false
    },
    editTime: {
      type: String,
      default: ''
    },
    thumbnail: {
      type: String,
      default: ''
    },
    author: {
      type: String,
      default: ''
    }
  },
  computed: {
    isEditable () {
      return this.$store.getters.isUserLoggedIn
    }
  },
  methods: {
    openPost () {
      this.$router.push({
        name: 'post-postId',
        params: {
          postId: this.postId
        }
      })
    }
  }
}
</script>

<style lang="scss">
.post-thumbnail {
  padding-bottom: $spacer-big;
  &__header {
    display: flex;
    flex-direction: column;
    align-items: center;
    @media #{$screen-medium} {
      flex-direction: row;
      margin-bottom: $spacer;
    }
  }

  &__image {
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
      width: 160px;
    }
  }

  &__goto-icon {
    margin-left: $spacer;
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
