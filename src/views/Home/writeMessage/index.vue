<script lang="ts" setup>
/***
 * Author:Noi-q
 * Email: noi.vcal@gmail.com
 */
import {ref,watch} from "vue";
import {useRouter} from "vue-router";
import { Snackbar } from '@varlet/ui'


const router = useRouter()
const phone = ref('')
const textContent = ref("")
const textSize = ref(0)
const maxSize = ref(900)
const price = ref(0)
const propBottom = ref(false)
const propDate = ref(false)
const day = new Date()
const today = `${day.getFullYear()}-${day.getMonth()+1}-${day.getDate()}`
const date = ref(today)

const columns = ref([
  Array.from({ length: 24 }).map((_, index) => index),
  Array.from({ length: 60 }).map((_, index) => index),
  // Array.from({ length: 60 }).map((_, index) => index)
])
const checkedText = ref(`${day.getHours()}:${day.getMinutes()}`)
const checkedButtonText = ref('立即发送')
const radioAgreement = ref(0)

const checkedDate = (text)=>{
  checkedText.value = `${text[0]}:${text[1]}`
  propDate.value = false
}
const closeChecked = ()=>{
  propDate.value = false
}
const propClose = ()=>{
  checkedButtonText.value = `${date.value} ${checkedText.value}`
}

const submit = ()=>{
  const form = {
    phone:phone.value,
    content:textContent.value,
    time:checkedButtonText.value,
    agreement:radioAgreement.value
  }
  if(form.agreement == 0){
    Snackbar({
      content:"请阅读同意并勾选用户隐私协议!",
      type:"warning"
    })
  }else if(form.time == '立即发送'){
    Snackbar({
      content:'请选择具体的发送时间!',
      type:'warning'
    })
  }else if(form.phone == ""){
    Snackbar({
      content:'请输入对方的手机号!',
      type:'warning'
    })
  }else if(form.content == ""){
    Snackbar({
      content:'请输入所要发送的内容!',
      type:'warning'
    })
  }
  console.log(form)
}

const goBack = ()=>{
  router.back()
}

watch(textContent,(count,prevCount)=>{
  textSize.value = count.length
  const defaultSize = 65
  if(textSize.value == 0){
    price.value = 0
  }
})
</script>

<template>
  <!-- 顶部导航栏 -->
  <var-app-bar
    title-position="center"
    color="#f3f4f6"
    text-color="black"
    :elevation="false"
  >
    <template #left>
      <var-button
        round
        text
        color="transparent"
        text-color="black"
        @click="goBack"
      >
        <var-icon name="chevron-left" :size="27" />
      </var-button>
    </template>
    <template #default>
      <span style="font-weight: bold;">编写短信</span>
    </template>
    <template #right>
      <div class="icon-help">
        <var-icon color="gray" name="help-circle-outline" :size="15"/>
        <span>使用帮助</span>
      </div>
    </template>
  </var-app-bar>
  <!-- 短信表单 -->
  <div class="write-form">

    <div class="form-input">
      <input v-model="phone" class="phone" type="text" placeholder="请输入对方手机号">
    </div>

    <div class="form-text">
      <div class="text-box">
        <textarea v-model="textContent" :maxlength="maxSize" class="content" placeholder="点击输入短信内容（把你想说的话或者小秘密悄悄 告诉TA吧）"></textarea>
        <div class="text-info">
          <div class="price">
            <span>{{textSize}}/900 65字1条,共{{price}}元</span>
          </div>
          <div class="icon-img">
            <img src="https://avatars.githubusercontent.com/u/76736117?v=4" alt="">
          </div>
        </div>
      </div>
    </div>

    <div class="form-select">
      <div class="date" @click="propBottom = true">
        <span>预约发送时间</span>
        <div class="icon">
          <span>{{checkedButtonText}}</span>
          <var-icon name="chevron-right" color="gray"/>
        </div>
      </div>
    </div>

    <div class="form-agreement">
      <var-radio
        :unchecked-value="0"
        :checked-value="1"
        v-model="radioAgreement"
        unchecked-color="#ddd"
        checked-color="#00d577"
      >
        <span style="color: gray;">
          我已阅读并接受<span style="color: #00d577;">《用户协议》</span>丶<span style="color: #00d577;">《隐私政策》</span>
        </span>
      </var-radio>
    </div>
    <div class="form-submit">
      <var-button @click="submit" color="#69dbaa" text-color="#eee">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;发送&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</var-button>
    </div>
  </div>
  <!-- 日期和时间选择器 -->
  <var-popup position="bottom" v-model:show="propBottom" @closed="propClose">
    <div class="popup-example-block">
      <var-date-picker v-model="date" />
    </div>
    <var-popup position="bottom" v-model:show="propDate">
      <var-picker title="请选择时间" :initialIndex="1" :columns="columns" :onCancel="closeChecked" :onConfirm="checkedDate"/>
    </var-popup>
    <div class="select-date">
      <div class="title">
        <span>选择时间</span>
      </div>
      <div class="date">
        <var-chip plain :round="false" color="#eee" text-color="gray" @click="propDate = true">
          {{checkedText}}
          <template #right>
            <var-icon name="chevron-right" color="gray" />
          </template>
        </var-chip>
      </div>
    </div>
  </var-popup>
</template>

<style lang="less" scoped>
  .icon-help{
    display: flex;
    flex-direction: row;
    span{
      align-self: center;
      font-size: .8em;
      color: gray;
    }
  }
  .write-form{
    height: 100vh;
    background-color: #f3f4f6;
    display: flex;
    flex-direction: column;
    .form-input{
      margin-top: 1rem;
      display: flex;
      flex-direction: row;
      justify-content: center;
      .phone{
        width: 80%;
        height: 1rem;
        padding: 1rem;
        border: white;
        border-radius: 7px;
        outline: none;
        text-shadow: 0 0 0 gray;
        color: #00d577;
        -webkit-text-fill-color: transparent;
      }
      .phone::-webkit-input-placeholder {    /* Chrome/Opera/Safari */
        color: gray;
      }
      .phone::-moz-placeholder { /* Firefox 19+ */
        color: gray;
      }
      .phone:-ms-input-placeholder { /* IE 10+ */
        color: gray;
      }
      .phone:-moz-placeholder { /* Firefox 18- */
        color: gray;
      }
    }
    .form-text{
      margin-top: 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      .text-box{
        width: 80%;
        padding: 1rem;
        background-color: white;
        border-radius: 7px;
        .content{
          width: 100%;
          height: 5rem;
          border: none;
          outline: none;
          font-size: 1.2em;
          text-shadow: 0 0 0 gray;
          color: #00d577;
          -webkit-text-fill-color: transparent;
        }
        .text-info{
          width: 100%;
          display: flex;
          flex-direction: row;
          .price{
            flex-grow: 1;
            align-self: flex-end;
            span{
              font-size: .7em;
              color: gray;
            }
          }
          .icon-img{
            //flex-grow: 1;
            align-self: flex-end;
            img{
              width: 80px;
              height: 80px;
            }
          }
        }
      }
    }
    .form-select{
      margin-top: 1rem;
      display: flex;
      flex-direction: row;
      justify-content: center;
      .date{
        align-self: center;
        width: 80%;
        padding: 1rem;
        background-color: white;
        border-radius: 7px;
        display: flex;
        flex-direction: row;
        span{
          flex-grow: 1;
          color: gray;
          font-size: .9em;
        }
        .icon{
          display: flex;
          flex-direction: row;
          align-items: center;
          span{
            font-size: .8em;
          }
        }
      }
    }
    .form-agreement{
      margin-top: .5rem;
      font-size: .8em;
      display: flex;
      flex-direction: row;
      margin-left: 10%;
    }
    .form-submit{
      margin-top: 2rem;
      display: flex;
      flex-direction: row;
      justify-content: center;
    }
  }
  .select-date{
    margin-bottom: 2rem;
    display: flex;
    flex-direction: row;
    .title{
      flex-grow: 3;
      margin-left: 2rem;
      align-self: center;
    }
    .date{
      flex-grow: 1;
      align-self: center;
    }
  }
</style>