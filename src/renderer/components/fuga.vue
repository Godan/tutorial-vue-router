<template>
  <div>

    <router-link :to="{ name: 'index-page' }"> back </router-link>
    This is fuga page
  </div>
</template>

<script>
  import store from '../store/index'

  export default {
    name: 'epsode-view',
    props: { index: Number },
    methods: {
    },
    store: store
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

</style>
