<template>
  <div class="post-control-buttons">
    <button
      @click="editPost"
      type="button"
      class="post-control-buttons__button"
    >
      Edit
    </button>

    <button
      @click="showDeleteModal"
      type="button"
      class="post-control-buttons__button post-control-buttons__button--delete"
    >
      Delete
    </button>
    <modal :name="`delete-post-modal-${postId}`" height="auto" :max-width="600" :adaptive="true">
      <modal-content
        :header="deletePostModal.header"
        :text="deletePostModal.text"
        :actions="deletePostModal.actions"
      />
    </modal>
  </div>
</template>

<script>
import ModalContent from './ModalContent.vue'
import '@/plugins/firestore'

export default {
  name: 'PostControlButtons',
  components: {
    ModalContent
  },
  props: {
    postId: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      deletePostModal: {
        header: 'Delete post',
        text: 'Do you really want to delete post?',
        actions: [
          {
            title: 'No',
            handler: this.hideDeletePopup
          },
          {
            title: 'Yes',
            handler: this.deletePost,
            danger: true
          }
        ]
      }
    }
  },
  computed: {
    postsDB () {
      return this.$store.state.postsDB
    }
  },
  methods: {
    showDeleteModal () {
      this.$modal.show(`delete-post-modal-${this.postId}`)
    },
    hideDeletePopup () {
      this.$modal.hide(`delete-post-modal-${this.postId}`)
    },
    editPost () {
      this.$router.push({
        name: 'edit-post-postId',
        params: {
          postId: this.postId
        }
      })
    },
    async deletePost () {
      await this.$store.dispatch('deletePost', this.postId)
      this.hideDeletePopup()
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
