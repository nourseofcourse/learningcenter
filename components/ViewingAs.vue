<template>
  <div>
    yo
    {{ viewingAsAdvisor }}
    <div v-if="viewingAsAdvisor">hi</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters( [ 'viewingAsAdvisor' ])
    }
  }
</script>

<style lang="scss" scoped>

</style>
