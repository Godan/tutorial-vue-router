<template>
  <div>

    <router-link :to="{ name: 'index-page' }"> back </router-link>
    This is hoge page.   value i{{ $route.params.value }} 
  </div>
</template>


<script>
  import store from '../store/index'

  export default {
    name: 'epsode-view',
    props: { index: Number },
    methods: {
    },
    beforeRouteUpdate (to, from, next) {
      this.post = null
      console.log(to)
    },
    store: store
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

</style>
