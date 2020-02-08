<template>
  <div :class="`main-content ${isUserLoggedIn ? 'main-content--logged-user' : ''}`">
    <heading />
    <router-view class="main-content__router-view" />
    <foot />
  </div>
</template>

<script>

import 'firebase/auth'
import Heading from '@/components/Heading.vue'
import Foot from '@/components/Foot.vue'

export default {
  name: 'MainContent',
  components: {
    Heading,
    Foot
  },
  computed: {
    isUserLoggedIn () {
      return this.$store.getters.isUserLoggedIn
    }
  }
}
</script>
<style lang="scss">
.main-content {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding-top: 72px;

  &--logged-user {
    padding-top: 180px;

    @media #{$screen-medium} {
      padding-top: 120px;
    }
  }

  &__router-view {
    flex: 1 0 auto;
    margin: $spacer-big $spacer;
    @media #{$screen-medium} {
      margin: $spacer-large 0;
      width: 900px;
      align-self: center;
    }

    @media #{$screen-big} {
      width: 1200px;
    }
  }
}
</style>
