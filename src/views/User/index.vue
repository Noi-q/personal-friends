<script setup>
import {ref} from 'vue'
const messageLength = ref(0)
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
    id:1,
    title:'代理开通设置'
  },
  {
    id:2,
    title:'查看我的代理'
  },
  {
    id:3,
    title:'网页标题设置'
  },
  {
    id:4,
    title:'短信后缀配置'
  },
  {
    id:5,
    title:'公众号名称设置'
  },
  {
    id:6,
    title:'公众号设置'
  }
])
</script>

<template>
  <div class="user">
    <div class="clearSticky">
      <Header title="我的" color="#eee" />
    </div>
    <div class="card">
      <div class="message-item">
        <div class="item" v-ripple>
          <div class="icon">
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
      <div class="profit-item">
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
        <div class="item" v-for="item in moreSettings" :key="item.id" v-ripple>
          <span class="title-item">{{item.title}}</span>
          <i class="icon-item fa fa-angle-right"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.user{
  // height: 100vh;
  background-color: #eee;
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