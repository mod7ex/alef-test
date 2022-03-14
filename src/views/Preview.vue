<template>
      <Base>
            <div class="data">
                  <div class="person">
                        <p class="title">Персональные данные</p>
                        <h5>{{ person_preview }}</h5>
                  </div>

                  <div class="kids">
                        <p class="title">Дети</p>
                        <h5
                              class="kid"
                              v-for="(preview, i) in kids_preview"
                              :key="i"
                        >
                              {{ preview }}
                        </h5>
                  </div>
            </div>
      </Base>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
      name: "Preview",

      components: {},

      setup() {
            let store = useStore();

            let kids_preview = computed(() => store.getters.kids_preview);
            let person_preview = computed(() => store.getters.person_preview);

            return {
                  kids_preview,
                  person_preview,
            };
      },
};
</script>

<style lang="scss">
.data {
      @include center($base-width);

      p.title {
            margin-bottom: 1em;
      }

      .person {
            margin-bottom: 3em;
      }

      .kids {
            .kid {
                  background-color: $gray;
                  padding: 0.7em 1.4em;
                  width: max-content;
                  margin-bottom: 1em;
                  border-radius: $radius;
            }
      }
}
</style>
