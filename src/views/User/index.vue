<script setup>
/***
 * Author:Noi-q
 * Email: noi.vcal@gmail.com
 */
import {ref} from 'vue'
import {useRouter} from 'vue-router'
const messageLength = ref(0)
const router = useRouter()
const profitButton = ref([
  {
    title:'今日收益',
    content:'0.00'
  },
  {
    title:'累计收益',
    content:'0.00'
  },
  {
    title:'可提现余额',
    content:'0.00'
  },
  {
    title:'我的代理',
    content:'0'
  }
])
const moreSettings = ref([
  {
    id:0,
    title:"个人设置"
  },
  {
    id:1,
    title:'代理开通设置'
  },
  {
    id:2,
    title:'查看我的代理'
  },
  // {
  //   id:3,
  //   title:'网页标题设置'
  // },
  {
    id:4,
    title:'短信后缀配置'
  },
  // {
  //   id:5,
  //   title:'公众号名称设置'
  // },
  // {
  //   id:6,
  //   title:'公众号设置'
  // },
  {
    id:7,
    title:"点击登录"
  }
])
const setting = (item)=>{
  // 登录
  if(item.id === 7){
    router.push({
      path:"/my/login"
    })
  }
}
const goIssued = ()=>{
  router.push({
    path:'/write'
  })
}
const goProfit = ()=>{
  router.push({
    path:'/profit'
  })
}
</script>

<template>
  <div class="user">
    <div class="clearSticky">
      <Header title="我的" color="#f3f4f6" />
    </div>
    <div class="card">
      <div class="message-item">
        <div class="item" v-ripple>
          <div class="icon" @click="goIssued">
            <i class="icon-item fa fa-comment"></i>
            <span class="icon-item">我发出的短信</span>
          </div>
          <div class="content">
            <span class="content-item-length">{{messageLength}}</span>
            <span class="content-item-text">条</span>
          </div>
        </div>
      </div>
    </div>
    <div class="card" style="padding-top: 5px;">
      <div class="profit-item" @click="goProfit">
        <div class="item" v-for="item in profitButton" :key="item">
          <div class="content">
            <span class="content-item-money">{{item.content}}</span>
            <span class="content-item-text">{{item.title != '我的代理' ? '元' : ''}}</span>
          </div>
          <div class="title">
            <span>{{item.title}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="card" style="padding-top: 5px;">
      <span class="more-settings-title">更多设置</span>
      <div class="more-settings-item" style="padding-top: 5px;">
        <div class="item" v-for="item in moreSettings" :key="item.id" v-ripple @click="setting(item)">
          <span class="title-item">{{item.title}}</span>
          <i class="icon-item fa fa-angle-right"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.user{
   height: 100vh;
  background-color: #f3f4f6;
}
.card{
  padding: 1rem;
  .message-item{
    .item{
      display: flex;
      flex-direction: column;
      
      background-color: #fff;
      // margin: 1rem;
      padding: 1rem;
      width: 50%;
      height: 80px;
      border-radius: 10px;
      position: relative;
      .icon{
        display: flex;
        flex-direction: row;
        .icon-item{
          align-self: center;
          margin-left: 2px;
          color: gray;
        }
      }
      .content{
        position: absolute;
        bottom: .5rem;
        display: flex;
        flex-direction: row;
        .content-item-length{
          align-self: center;
          font-size: 25px;
          font-weight: bold;
        }
        .content-item-text{
          align-self: flex-end;
          margin-bottom: 10%;
          margin-left: .5rem;
          font-size: 15px;
        }
      }
    }
  }
  .profit-item{
    display: flex;
    flex-direction: row;
    // align-items: center;
    background-color: #fff;
    // justify-content: center;
    // align-items: stretch;
    flex-wrap:wrap;
    display: -webkit-flex;
    // align-content: space-between;
    padding: 1rem;
    border-radius: 10px;
    .item{
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      text-align: center;
      .content{
        text-align: center;
        .content-item-money{
          font-size: 20px;
          font-weight: bold;
        }
        .content-item-text{
          font-size: 15px;
          font-weight: 500;
        }
      }
      .title{
        margin-top: 10px;
        span{
          font-size: 15px;
          color: gray;
        }
      }
    }
  }
  .more-settings-title{
    font-size: 15px;
    color: gray;
  }
  .more-settings-item{
    display: flex;
    flex-direction: column;
    .item{
      background-color: #fff;
      border-radius: 7px;
      padding: 15px;
      margin-top: 15px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      position: relative;
      .title-item{
        align-self: center;
        color: rgb(61, 60, 60);
      }
      .icon-item{
        align-self: center;
        position: absolute;
        right: 40px;
        font-size: 25px;
        color: gray;
      }
    }
  }
}
</style>