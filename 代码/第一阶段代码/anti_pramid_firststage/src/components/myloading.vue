<template>
    <div class="loading" >
      <text>加载中...</text>
    </div>
</template>

<script>
  export default {
    name: "myloading",
  };
</script>

<style scoped>
.loading{
  width: 100%;
  height: 20px;
  text-align: center;
}
  .loading text{
    font-size: 12px;
    line-height: 20px;
    font-weight: lighter;
  }
</style>
