<script>
  import store from './store/index'
  export default {
    store,
    created() {
      console.log('created', this)
      wx.cloud.init({
        env:'demo1-b5a6ce',
        traceUser: true
      })
    },
    mounted() {
    },
    onLoad() {
      console.log('  onLoad', this)
    },
    onReady() {
      console.log('  onReady', this)
    },
    onShow() {
      console.log('onShow', this)
    },
    onUnload() {
      console.log('onUnload', this)
    },
    onHide() {
      console.log('onHide', this)
    },
    onlaunch(){
      console.log(' onlaunch',this)
    }
  }
</script>

<style>
@import './css/Animate.css';
</style>
