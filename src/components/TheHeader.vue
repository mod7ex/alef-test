<template>
      <header>
            <div class="container">
                  <h1 class="logo">
                        <img src="../assets/svg/logo.svg" />
                  </h1>

                  <ul class="nav">
                        <li>
                              <router-link :to="{ name: 'Forma' }">
                                    Форма
                              </router-link>
                        </li>

                        <li>
                              <router-link :to="{ name: 'Preview' }">
                                    Превью
                              </router-link>
                        </li>
                  </ul>
            </div>
      </header>
</template>

<script>
export default {
      name: "TheHeader",
};
</script>

<style lang="scss">
header {
      box-shadow: 0px 1px 0px rgba(17, 17, 17, 0.1);

      .container {
            @include flex($justify: flex-start);

            .logo {
                  @include flex();
            }

            .nav {
                  flex-grow: 1;
                  @include flex();

                  li {
                        margin: 0 0.5em;

                        a {
                              font-size: 1rem * 0.875;
                              color: $second-gray;
                        }
                  }
            }
      }
}
</style>
