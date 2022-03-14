<template>
      <div class="form-field">
            <label :for="name">
                  {{ label }}
                  <input
                        type="text"
                        :id="name"
                        :placeholder="placeholder"
                        :value="modelValue"
                        @input="$emit('update:modelValue', $event.target.value)"
                  />
            </label>
      </div>
</template>

<script>
export default {
      name: "BaseInput",

      props: {
            name: {
                  type: String,
                  default: "name",
            },

            label: {
                  type: String,
                  default: "label",
            },

            placeholder: {
                  type: String,
                  default: "",
            },

            modelValue: {
                  type: [String, Number],
                  default: "",
            },
      },
};
</script>

<style lang="scss">
.form-field {
      border-radius: $radius;
      border: 1px solid $gray;
      padding: 0.5em 1em;
      margin-bottom: 1em;

      label {
            color: $second-gray;
            input {
                  background-color: transparent;
                  display: block;
                  outline: none;
                  border: none;
                  padding: 0.3em 0;

                  color: #111111;
                  font-size: 1rem * 0.875;
            }
      }
}
</style>
