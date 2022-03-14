<template>
      <Base>
            <div class="form">
                  <div class="form-section">
                        <PersonForm />
                  </div>

                  <div class="form-section">
                        <KidsForm />
                  </div>

                  <div class="form-section">
                        <BaseButton v-fill="true" @click="saveForm">
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

            let saveForm = () => {
                  store.dispatch("save_kids");
                  store.dispatch("save_person");
            };

            return {
                  saveForm,
            };
      },
};
</script>

<style lang="scss">
.form {
      @include center($base-width);

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
