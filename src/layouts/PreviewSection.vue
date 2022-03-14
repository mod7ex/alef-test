<template>
      <div :class="class">
            <p class="title">{{ name }}</p>
            <slot>content...</slot>
      </div>
</template>

<script>
export default {
      name: "PreviewSection",

      props: {
            name: {
                  type: String,
                  default: "section title",
            },

            class: {
                  type: String,
                  default: null,
            },
      },
};
</script>

<style lang="scss" scoped>
p.title {
      margin-bottom: 1em;
}
</style>
