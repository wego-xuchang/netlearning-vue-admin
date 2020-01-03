<template>
  <div class="personal-main">

    <!--个人中心头部-->
    <div class="personal-header">
      <div class="personal-header-icon"></div>
      <div class="personal-header-title">

      </div>
    </div>
    <!--个人中心内容-->
    <div class="personal-content">
      <el-tabs tab-position="left" style="height: 200px;">
        <el-tab-pane label="我的课程" class="personal-tab-pane">

        </el-tab-pane>
        <el-tab-pane label="我的消息" class="personal-tab-pane">我的消息</el-tab-pane>
        <el-tab-pane label="个人设置" class="personal-tab-pane">个人设置</el-tab-pane>
        <el-tab-pane label="退出" class="personal-tab-pane">退出</el-tab-pane>
      </el-tabs>
    </div>
    <!--个人中心尾部-->
    <div class="personal-footer">

    </div>

  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'Perosonal',
    computed: {
      ...mapGetters([
        'name'
      ])
    }
  }
</script>

<style lang="scss" scoped>
/*@import "../../../../assets/css/page-learing-personal.css";*/
/*页面布局*/
.personal-main{
  width:78%;
  height:100%;
  background:#ffffff;
  margin:0 auto;
}
  /*个人中心头部*/
  .personal-header{
    width:100%;
    min-width: 600px;
    height: 202px;
    padding: 10px;
    border: #00a0e9 1px solid;
  }
  .personal-header-icon{
    width: 180px;
    height: 180px;
    float: left;
    border: #00a0e9 1px solid;
  }
  .personal-header-title{
    width: 80%;
    height: 180px;
    float: left;
    margin-left: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
  }
  /*个人中心头部end*/
  .personal-content{
    margin-top: 10px;
  }
  .personal-tab-pane{
    width:100%;
    height: 300px;
    padding: 10px;
    margin-top: 10px;
    border: #00a0e9 1px solid;
  }

  /*个人中心尾部*/
  .personal-footer{

  }
  /*个人中心尾部end*/
</style>
