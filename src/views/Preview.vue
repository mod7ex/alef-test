<template>
      <Base>
            <div class="data-preview center-min">
                  <PreviewSection name="Персональные данные" class="person">
                        <h5>{{ person_preview }}</h5>
                  </PreviewSection>

                  <PreviewSection name="Персональные данные" class="kids">
                        <h5
                              class="kid"
                              v-for="(kid_preview, i) in kids_preview"
                              :key="i"
                        >
                              {{ kid_preview }}
                        </h5>
                  </PreviewSection>
            </div>
      </Base>
</template>

<script>
import PreviewSection from "../layouts/PreviewSection.vue";

import { computed } from "vue";
import { useStore } from "vuex";

export default {
      name: "Preview",

      components: {
            PreviewSection,
      },

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
.data-preview {
      h5 {
            font-weight: 700;
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
