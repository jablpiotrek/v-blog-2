<template>
  <div class="post-control-buttons">
    <button
      type="button"
      class="post-control-buttons__button"
      @click="editPost"
    >
      Edit
    </button>

    <button
      type="button"
      class="post-control-buttons__button post-control-buttons__button--delete"
      @click="showDeleteModal"
    >
      Delete
    </button>
  </div>
</template>

<script>
import DeletePost from '@/components/DeletePost.vue'
import '@/plugins/firestore'

export default {
  name: 'PostControlButtons',
  props: {
    postId: {
      type: String,
      required: true
    }
  },
  computed: {
    postsDB () {
      return this.$store.state.postsDB
    }
  },
  methods: {
    showDeleteModal () {
      const { postId } = this
      this.$modal.show(DeletePost, { postId })
    },
    editPost () {
      this.$router.push({
        name: 'edit-post-postId',
        params: {
          postId: this.postId
        }
      })
    }
  }
}
</script>

<style lang="scss">
.post-control-buttons {
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  &__button {
    width: 100%;
    margin-bottom: $spacer;

      @media #{$screen-medium} {
            width: 160px;
      }

      &--delete {
        @extend %secondary-button;
      }
  }
}
</style>
