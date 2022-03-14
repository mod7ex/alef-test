<template>
      <router-view />
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Roboto:wght@300&family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap");

* {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
}

ul {
      list-style: none;
}

a {
      text-decoration: none;
}

#app {
      font-family: "Montserrat" !important;

      min-height: 100vh;

      display: grid;
      grid-template-rows: auto 1fr auto;
      grid-row-gap: 1em;

      .container {
            @include center($p: 1em);
      }
}
</style>
