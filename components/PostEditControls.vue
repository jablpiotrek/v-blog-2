<template>
  <div class="post-edit-controls">
    <button
      @click="submit"
      type="button"
      class="post-edit-controls__submit"
    >
      Submit post
    </button>

    <button
      @click="show"
      type="button"
      class="post-edit-controls__close"
    >
      Close
    </button>

    <modal :max-width="600" :adaptive="true" name="close-confirmation-modal" height="auto">
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
    submit () {
      this.$emit('submit')
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

<style lang="scss">
.post-edit-controls {
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  margin-top: $spacer-big;

  @media #{$screen-medium} {
    flex-direction: row;
  }

  &__submit {
    margin-bottom: $spacer;

    @media #{$screen-medium} {
      margin-right: $spacer;
      margin-bottom: 0;
    }
  }

  &__close {
    @extend %secondary-button;
  }
}
</style>
