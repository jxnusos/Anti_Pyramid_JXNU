const  test_env='zen-1b701c'

function formatNumber(n){
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

function formatTime(date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute, second].map(formatNumber).join(':')
  let t3=[hour,minute].map(formatNumber).join(':')
  let t4=[month,day].map(formatNumber)
  t4[0]=t4[0]+"月"
  t4[1]=t4[1]+"日"
  let t5 = t4[0]+t4[1]
    const  now = new  Date()
  const nowday=now.getDate()
  let mydata=''
 if( nowday==day){

   mydata= "今天"+t3
 } else if(nowday-day>=1){
  switch (nowday-day) {
     case 1:mydata= "昨天"+t3 ;break;
     case 2:mydata= "前天"+t3 ;break;
     default:mydata= t5+t3;break;

   }
 }
 return mydata
}

function request(url, method, data) {
  return new Promise((resolve, reject) => {
    wx.request({
      url,
      method,
      data,
      success: function(res) {
          console.log("请求成功")
          resolve(res.data)
      },
      fail: function(res) {
        reject(res)
      }
    })
  })

}
function login(){
  const code= new Promise((resolve, reject) => {
    wx.login({
      success:function(res) {
        console.log("获得code"+JSON.stringify(res))
      resolve(res.code)
      },
      fail:function(res){
        reject(res)
      }})
  })
  return code
}
 function  getOpenid() {
  return new Promise((resolve, reject) => {
    wx.cloud.callFunction({
      name: 'getopenid',
      config:{env:test_env},
      success(res) {
        console.log("openid是"+res.result.openId)
        resolve(res.result.openId)
      },
      fail(res) {
        reject(res)
      }
    })
  })
}

const createUtils={
  formatNumber,
  formatTime,
  request,
  login,
  getOpenid,

}
export  default createUtils

