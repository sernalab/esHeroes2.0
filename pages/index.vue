<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        esHeroes
      </h1>
      <h2 class="subtitle">
        spanish Heroes of the storm Community
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
}
</script>

<style lang="sass">
.container 
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

.title 
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;

.subtitle 
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;


.links 
  padding-top: 15px;

</style>

