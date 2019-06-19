<template>
    <div class="warp">
      <div class="head">
        <div class="title">{{news.title}}</div>
        <div class="message">
          <text class="message_item">{{news.publicTime}}</text>
          <text class="message_item">{{news.source}}</text>
        </div>
      </div>
      <div class="content"><text>{{news.content}}</text></div>
    </div>
</template>

<script>
  export default {
    name: "news",
    props:['news']
  };
</script>

<style scoped>
.warp{
  width: 100%;
  height: auto;
}
  .head{
    margin-top: 20px;
    width: 100%;
    height: auto;
  }
  .title{
    text-align: center;
    font-size: 20px;
    font-weight: bolder;
  }
  .message{
    width: 100%;
    height: 20px;
    font-size: 10px;
    color: #AAA;
    font-weight: lighter;
    display: flex;
   justify-items: center;
    justify-content: center;

  }
  .message_item{
    margin-left: 10px;

  }
  .content{
    width: 100%;
    height: auto;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
  }

</style>
