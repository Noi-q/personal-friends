<script setup>
/***
 * Author:Noi-q
 * Email: noi.vcal@gmail.com
 */
import {ref} from 'vue'
import {getAssetsFile} from '../../plugins/pub-use'
import SunIcon from '../../static/icon/sun.png'
const options = ref([
  {
    id:1,
    title:'早安短信',
    des:'每天一句早安问候',
    src:SunIcon
  },
  {
    id:2,
    title:'晚安短信',
    des:'每天这句晚安伴你入眠',
    src:getAssetsFile('moon.png')
  },
  {
    id:3,
    title:'土味情话短信',
    des:'情话是编的，爱你是真的',
    src:getAssetsFile('love.png')
  },
  {
    id:4,
    title:'毒鸡汤短信',
    des:'干了这碗，明天还有一碗',
    src:getAssetsFile('soup.png')
  },
  {
    id:5,
    title: '学习提醒短信',
    des:'每天鞭策自己坚持学习',
    src:getAssetsFile('study.png')
  }
])
</script>

<template>
  <div class="plan">
    <div class="clearSticky">
      <Header title="短信计划" color="#f3f4f6" />
    </div>
    <div class="sms-box">
      <div class="box-list" v-for="item in options" :key="item.id">
        <div class="item">
          <div class="icon">
            <img :src="item.src" alt="">
          </div>
          <div class="content">
            <div class="title">
              <span>{{item.title}}</span>
            </div>
            <div class="des">
              <span>{{item.des}}</span>
            </div>
          </div>
          <div class="change">
            <var-button size="small" type="success">去创建</var-button>
          </div>
        </div>
      </div>
    </div>
    <div class="my-box">
      <div class="title">
        <span>我的短信计划</span>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .plan{
    background-color: #f3f4f6;
    height: 100vh;
    .sms-box{
      .box-list{
        display: flex;
        flex-direction: column;
        .item{
          height: 4.5rem;
          margin-top: 1rem;
          margin-left: 1rem;
          margin-right: 1rem;
          display: flex;
          flex-direction: row;
          background-color: white;
          border-radius: 10px;
          .icon{
            align-self: center;
            margin-left: 1rem;
            margin-right: 1rem;
            border-radius: 50%;
            width: 3rem;
            height: 3rem;
            background-color: #f4f2f2;
            display: flex;
            flex-direction: row;
            justify-content: center;
            img{
              align-self: center;
              height: 30px;
              width: 30px;
              border-radius: 50%;
            }
          }
          .content{
            width: 50%;
            margin-left: .3rem;
            margin-right: .8rem;
            align-self: center;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            .title{
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              span{
                font-weight: bold;
              }
            }
            .des{
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              span{
                font-size: .7em;
                color: gray;
              }
            }
          }
          .change{
            align-self: center;
            margin-right: 1rem;
          }
        }
      }
    }
    .my-box{
      .title{
        margin-top: 2rem;
        margin-left: 1rem;
        span{
          color: gray;
          font-size: .8em;
        }
      }
    }
  }
</style>