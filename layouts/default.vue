<template>
  <div>
    <Header/>
      <nuxt/>
    <Footer/>
  </div>
</template>

<script>
  import Header from '@/components/Layout/Header'
  import Footer from '@/components/Layout/Footer'
  export default {
      components: {
          Header,
          Footer
      }
  }
</script>

<style lang="sass">

</style>
