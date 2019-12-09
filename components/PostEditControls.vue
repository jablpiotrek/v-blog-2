<template>
  <div>
    <button
      @click="submit"
      type="button"
    >
      Submit post
    </button>

    <button
      @click="show"
      type="button"
    >
      Close
    </button>

    <modal name="close-confirmation-modal">
      <modal-content
        :header="header"
        :text="text"
        :actions="actions"
      />
    </modal>
  </div>
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
          title: 'Yes',
          handler: this.close,
          danger: true
        },
        {
          title: 'No',
          handler: this.hide
        }
      ]
    }
  },
  methods: {
    submit () {
      this.close()
      this.$emit('submit')
    },
    close () {
      this.$router.push({
        name: 'index'
      })
    },
    show () {
      this.$modal.show('close-confirmation-modal')
    },
    hide () {
      this.$modal.hide('close-confirmation-modal')
    }
  }
}
</script>

<style>

</style>
