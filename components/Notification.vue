<template>
  <div class="notification  is-danger" v-html>{{ message }}</div>
</template>

<script>
  export default {
    name: 'Notification',
    props: ['message']
  }
</script>

<style lang="scss" scoped>

</style>
