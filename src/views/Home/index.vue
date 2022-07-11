<script setup>
</script>

<template>
  <div class="write">
    <div class="clearSticky">
      <Header title="私人朋友" color="#eee" />
    </div>
    <div class="write-item">
      <div class="item">
        <div class="title">
          <var-chip 
            :round="false"
            color="#eee"   
            style="font-weight: bold;"         
          >你瞧</var-chip>
          <span class="title-text">被人记起的感觉多么美好</span>
        </div>
        <div class="content">
          <span>至少在这个世界上你能真真切切的想到我</span>
        </div>
        <div class="btn">
          <var-button type="success">去发短信</var-button>
        </div>
        <div class="image">
          <img src="https://avatars.githubusercontent.com/u/76736117?v=4" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.write{
  height: 94vh;
  background-color: #eee;
  .write-item{
    // background-color: #eee;
    .item{
      margin: 20px;
      background-color: white;
      height: 250px;
      border-radius: 15px;
      display: flex;
      flex-direction: column;
      position: relative;
      .title{
        // text-align: center;
        margin: 20px;
        margin-left: 40px;
        // background-color: red;
        .title-text{
          margin-left: 20px;
        }
      }
      .content{
        // background-color: red;
        margin-top: 10px;
        margin-left: 40px;
        width: 150px;
      }
      .btn{
        margin-top: 35px;
        margin-left: 40px;
      }
      .image{
        position: absolute;
        bottom: -4px;
        right: 0px;
        img{
          width: 100px;
          height: 100px;
          border-radius: 0 0 15px 0;
        }
      }
    }
  }
}
</style>