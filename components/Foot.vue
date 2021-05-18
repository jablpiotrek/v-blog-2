<template>
  <footer class="foot">
    <h1>test</h1>
    <ul class="foot__links">
      <li class="foot__item">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/piotr-jablonski-008b2799/"
        >
          <icon
            :icon="['fab', 'linkedin']"
            class="foot__icon fa-2x"
          />
        </a>
      </li>
      <li class="foot__item">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/jablpiotrek"
        >
          <icon
            :icon="['fab', 'github']"
            class="foot__icon fa-2x"
          />
        </a>
      </li>
    </ul>
  </footer>
</template>

<style lang="scss" scoped>
.foot {
  display: block;
  background-color: $primary;
  border-top: $spacer-small solid $secondary;

  &__links {
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  &__item {
    display: block;
    margin: 0 $spacer-small;
  }

  &__icon {
    padding: $spacer-small $spacer;
    color: $white;
    &:hover,
    &:focus {
      color: $secondary;
    }
  }
}
</style>
