<template>
  <div>
    <button
      @click="editPost"
      type="button"
    >
      Edit
    </button>

    <button
      @click="showDeleteModal"
      type="button"
    >
      Delete
    </button>
    <modal :name="`delete-post-modal-${postId}`">
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
            title: 'Yes',
            handler: this.deletePost,
            danger: true
          },
          {
            title: 'No',
            handler: this.hideDeletePopup
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
