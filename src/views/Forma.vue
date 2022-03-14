<template>
      <Base>
            <div class="form center-min">
                  <div class="form-section">
                        <PersonForm />
                  </div>

                  <div class="form-section">
                        <KidsForm />
                  </div>

                  <div class="form-section">
                        <BaseButton v-fill="true" @click="saveData">
                              Сохранить
                        </BaseButton>
                  </div>
            </div>
      </Base>
</template>

<script>
import KidsForm from "../components/KidsForm.vue";
import PersonForm from "../components/PersonForm.vue";
import { useStore } from "vuex";

export default {
      name: "Forma",

      components: { KidsForm, PersonForm },

      setup() {
            let store = useStore();

            let saveData = () => {
                  store.dispatch("save_kids");
                  store.dispatch("save_person");
            };

            return {
                  saveData,
            };
      },
};
</script>

<style lang="scss">
.form {
      .form-section {
            margin-bottom: 2em;

            .base-btn {
                  img {
                        margin-right: 0.5em;
                  }
            }

            .form-head {
                  @include flex($justify: space-between);
                  padding: 1em 0;

                  h4 {
                        font-weight: 500;
                  }
            }

            .kid {
                  @include flex($justify: space-between);
                  gap: 1em;
                  margin-bottom: 1em;

                  .form-field {
                        flex-grow: 1;
                        margin: 0 !important;
                  }

                  a {
                        color: $blue;
                  }
            }
      }
}
</style>
