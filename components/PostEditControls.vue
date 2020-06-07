<template>
  <div class="post-edit-controls">
    <button
      type="button"
      class="post-edit-controls__submit"
      @click="submit"
    >
      Submit post
    </button>

    <button
      type="button"
      class="post-edit-controls__close"
      @click="show"
    >
      Close
    </button>
  </div>
</template>

<script>
import CloseConfirmnation from '@/components/CloseConfirmation.vue'

export default {
  name: 'PostEditControls',
  methods: {
    submit () {
      this.$emit('submit')
    },
    show () {
      this.$modal.show(CloseConfirmnation)
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
