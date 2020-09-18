<template>
  <b-alert show variant="danger" v-html="message"></b-alert>
</template>

<script>
  export default {
    name: 'Notification',
    props: ['message']
  }
</script>

<style lang="scss" scoped>

</style>
