<template>
      <div class="form-head">
            <h4>Персональные данные</h4>
      </div>

      <BaseInput label="Имя" v-model.trim="person.name" />

      <BaseInput label="Возраст" name="age" v-model.trim="person.age" />
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
      name: "PersonForm",

      setup() {
            let store = useStore();

            let person = computed(() => store.state.person);

            return {
                  person,
            };
      },
};
</script>

<style lang="scss"></style>
