<template>
      <div class="form-head">
            <h3>Дети (макс. 5)</h3>

            <BaseButton v-if="allowAdding" @click="addNewKid">
                  <img src="../assets/svg/plus.svg" />
                  Добавить ребенка
            </BaseButton>
      </div>

      <!-- kids goes here -->

      <div class="kids">
            <div class="kid" v-for="kid in kids" :key="kid.key">
                  <BaseInput label="Имя" v-model.trim="kid.name" />

                  <BaseInput
                        label="Возраст"
                        name="age"
                        v-model.trim="kid.age"
                  />

                  <a href="javascript:void(0)" @click="dropKid(kid.key)"
                        >Удалить</a
                  >
            </div>
      </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
      name: "KidsForm",

      setup() {
            let store = useStore();

            let kids = computed(() => store.state.kids);

            let allowAdding = computed(() => kids.value.length < 5);

            let addNewKid = () => {
                  store.dispatch("add_kid", {
                        name: null,
                        age: null,
                  });
            };

            let dropKid = (key) => {
                  store.dispatch("remove_kid", key);
            };

            return {
                  kids,
                  allowAdding,
                  addNewKid,
                  dropKid,
            };
      },
};
</script>

<style lang="scss"></style>
