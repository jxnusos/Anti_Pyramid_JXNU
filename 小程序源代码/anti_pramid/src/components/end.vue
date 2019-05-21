<template>
  <div class="end" >
    <text>ಥ_ಥ没有了咋办呀 共{{total}}条</text>
  </div>
</template>

<script>
  export default {
    name: "end",
    props:['total']
  };
</script>

<style scoped>
  .end{
    width: 100%;
    height: 20px;
    text-align: center;
  }
  .end text{
    font-size: 12px;
    line-height: 20px;
    font-weight: lighter;
  }
</style>
