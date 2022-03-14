import Base from "../layouts/Base.vue";
import BaseInput from "../components/BaseInput.vue";
import BaseButton from "../components/BaseButton.vue";

const basePlugin = {
      install(app, options) {
            // registering base components globally
            app.component("Base", Base);
            app.component("BaseInput", BaseInput);
            app.component("BaseButton", BaseButton);

            /*
                  creating a directive for the base button,
                  fill directive if set to true,it allows to give
                  a blue background color to the element applied into
            */
            app.directive("fill", (el, binding, vnode) => {
                  if (!binding.value) return;
                  el.style.backgroundColor = "#01a7fd";
                  el.style.color = "#fff";
            });
      },
};

export default basePlugin;
