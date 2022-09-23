<script setup>
import {ref, reactive} from 'vue'
import {useRouter} from "vue-router";
const router = useRouter()

const formData = reactive({
  name:"",
  password:"",
  email:""
})
const form = ref(null)
const disabled = ref(false)
const readonly = ref(false)

const goBack = ()=>{
  router.back()
}
const register = ()=>{
  form.value.validate().then(
    res =>{
      if(res === true){
        console.log(formData)
      }
    }
  )
}
</script>

<template>
  <var-app-bar title-position="center" title="注册" color="#00c48f">
    <template #left>
      <var-button
        round
        text
        color="transparent"
        text-color="#fff"
        @click="goBack"
      >
        <var-icon name="chevron-left" :size="24" />
      </var-button>
    </template>
  </var-app-bar>
  <div class="form">
    <var-form ref="form" :disabled="disabled" :readonly="readonly">
      <var-space direction="column" :size="[14, 0]">
        <var-input
          placeholder="请输入用户名"
          :rules="[v => !!v || '用户名不能为空']"
          v-model="formData.name"
          focus-color="#00c48f"
          :clearable="true"
        />
        <var-input
          placeholder="请输入邮箱"
          :rules="[v => !!v || '邮箱不能为空']"
          v-model="formData.email"
          focus-color="#00c48f"
          :clearable="true"
        />
        <var-input
          type="password"
          placeholder="请输入密码"
          :rules="[v => !!v || '密码不能为空']"
          v-model="formData.password"
          focus-color="#00c48f"
          :clearable="true"
        />
      </var-space>
    </var-form>
  </div>
  <div class="submit">
    <var-button type="success" @click="register">确认注册</var-button>
  </div>
</template>

<style lang="less" scoped>
  .form {
    padding: 2rem;
  }
  .submit{
    text-align: center;
  }
</style>