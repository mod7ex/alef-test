<template>
      <TheHeader />
      <main>
            <div class="container">
                  <slot></slot>
            </div>
      </main>
      <TheFooter />
</template>

<script>
import { useStore } from "vuex";
import { onMounted } from "vue";

import TheHeader from "../components/TheHeader.vue";
import TheFooter from "../components/TheFooter.vue";

export default {
      name: "Base",

      components: {
            TheHeader,
            TheFooter,
      },

      setup() {
            let store = useStore();

            onMounted(() => {
                  store.dispatch("pullup_kids");
                  store.dispatch("pullup_person");
            });
      },
};
</script>
