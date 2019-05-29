<template>
<div>
  <wemark :md="md" link highlight type="wemark"></wemark>
</div>
</template>
<script>
  import md from '../../test.md'
export  default {
  name:'news',
  data(){
  return {
    md:md
  }
  }

}
</script>
<style scoped>

  </style>
