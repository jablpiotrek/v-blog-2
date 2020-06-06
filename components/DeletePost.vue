<template>
  <modal-content
    :header="header"
    :text="text"
    :actions="actions"
  />
</template>

<script>
import ModalContent from './ModalContent.vue'
export default {
  name: 'DeletePost',
  components: {
    ModalContent
  },
  props: {
    postId: {
      required: true,
      type: String
    }
  },
  data () {
    return {
      header: 'Delete post',
      text: 'Do you really want to delete post?',
      actions: [
        {
          title: 'No',
          handler: this.hide
        },
        {
          title: 'Yes',
          handler: this.deletePost,
          danger: true
        }
      ]
    }
  },
  methods: {
    hide () {
      this.$emit('close')
    },
    async deletePost () {
      await this.$store.dispatch('deletePost', this.postId)
      this.hide()
    }
  }
}
</script>
