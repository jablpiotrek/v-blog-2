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
  name: 'PostEditControls',
  components: {
    ModalContent
  },
  data () {
    return {
      header: 'Discard changes',
      text: 'Do you want to discard changes?',
      actions: [
        {
          title: 'No',
          handler: this.hide
        },
        {
          title: 'Yes',
          handler: this.close,
          danger: true
        }
      ]
    }
  },
  methods: {
    close () {
      this.$router.push('/')
      this.hide()
    },
    hide () {
      this.$emit('close')
    }
  }
}
</script>
