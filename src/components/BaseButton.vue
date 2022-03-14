<template>
      <button class="base-btn">
            <slot>button</slot>
      </button>
</template>

<script>
export default {
      name: "BaseButton",
};
</script>

<style lang="scss">
.base-btn {
      border: solid 2px $blue;
      color: $blue;
      padding: 0.7em 1.4em;
      border-radius: 100px;
      @include flex();
      background-color: transparent;
      cursor: pointer;
      font-size: 1rem * 0.875;

      &:focus {
            outline: none;
      }
}
</style>
