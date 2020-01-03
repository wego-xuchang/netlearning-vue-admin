<template>
  <div class="course-search-container">
    <!--分类-->
    <div class="learing-list">
      <div class="list-box">
        <ul>
          <li>一级分类：</li>
          <li class="all">全部</li>
          <ol>
            <li>数据分析</li>
            <li>机器学习工程</li>
            <li>前端开发工程</li>
            <li>人工智能工程</li>
            <li>全栈工程</li>
            <li>iOS工程</li>
            <li>VR开发</li>
            <li>深度学习</li>
            <li>商业预测</li>
          </ol>
        </ul>
        <ul>
          <li>二级分类：</li>
          <li class="all">全部</li>
          <ol>
            <li>体系课程</li>
            <li>大数据</li>
            <li>云计算</li>
          </ol><a href="#" class="more">更多 ∨</a></ul>
        <ul>
          <li>难度等级：</li>
          <li class="all">全部</li>
          <ol>
            <li>初级</li>
            <li>中级</li>
            <li>高级</li>
          </ol>
        </ul>
      </div>
    </div>
    <!--分类end-->

    <!--课程列表-->
    <div class="course-list-main">
      <div class="course-list">
        <el-row >
          <el-col :span="18">
            <div class="course-list-tab">
              <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="推荐" name="first"></el-tab-pane>
                <el-tab-pane label="最新" name="second"></el-tab-pane>
                <el-tab-pane label="热门" name="third"></el-tab-pane>
              </el-tabs>
            </div>
            <div class="conten-list">
              <div class="Recommend">
                <div class="content" >
                  <div class="recom-item" v-for="item in recommendedCourse" :key="item">
                    <a :href="item.courseImageUrl" target="_blank">
                      <p><img :src="item.courseImageUrl" width="100%" alt=""><span class="lab">HOT</span></p>
                      <ul>
                        <li>{{item.courseName}} </li>
                        <li><span>{{item.courseGrdle}}</span> <em> · </em> {{item.learningUser}}人在学习</li>
                      </ul>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <!--课程列表end-->
            <!--尾部分页-->
            <!--分页栏-->
            <div class="course-search-page">
              <el-row>
                <el-col span="24">
                  <div class="block">
                    <el-pagination
                      @size-change="handleSizeChange"
                      @current-change="handleCurrentChange"
                      :current-page="currentPage4"
                      :page-sizes="[100, 200, 300, 400]"
                      :page-size="100"
                      background="true"
                      layout="total, sizes, prev, pager, next, jumper"
                      :total="400">
                    </el-pagination>
                  </div>
                </el-col>
              </el-row>
            </div>

          </el-col>

          <el-col :span="6">
            <!--热门推荐-->
            <div class="course-search-right">
              <!--精品推荐-->
              <div class="course-search-right-recommend">
                <h3>热点</h3>
                <div class="course-recommend-card">
                  <div class="card-image">
                    <img src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png">
                  </div>
                  <div class="card-content">
                    <h4>ThinkPHP</h4>
                    通过对ThinkPHP框架基础，带领大家由浅入深轻松掌握ThinkPHP的理论基础，更加全面的掌握ThinkPHP框架运行机制…
                  </div>
                </div>
                <div class="course-recommend-card">
                  <div class="card-image">
                    <img src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png">
                  </div>
                  <div class="card-content">
                    <h4>ThinkPHP</h4>
                    通过对ThinkPHP框架基础，带领大家由浅入深轻松掌握ThinkPHP的理论基础，更加全面的掌握ThinkPHP框架运行机制…
                  </div>
                </div>
                <div class="course-recommend-card">
                  <div class="card-image">
                    <img src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png">
                  </div>
                  <div class="card-content">
                    <h4>ThinkPHP</h4>
                    通过对ThinkPHP框架基础，带领大家由浅入深轻松掌握ThinkPHP的理论基础，更加全面的掌握ThinkPHP框架运行机制…
                  </div>
                </div>
              </div>
              <!--精品推荐end-->
            </div>
          </el-col>
        </el-row>
      </div>

    </div>


  </div>
</template>

<script>

export default {
  name: 'CourseSearch',
  computed: {

  },
  data(){
    return{
      activeName: 'second',
      recommendedCourse:[
        {
          courseId:'1000',
          courseName:'Think PHP 5.0 博客系统实战项目演练',
          courseImageUrl:'http://134.175.30.90/group1/M00/00/00/rBAADV4JocWAPE4PAADlcugLgic457_big.png',
          courseGrdle:'高级',
          learningUser:'1125',
          isHot:'1'
        },
        {
          courseId:'1001',
          courseName:'Android实战项目演练',
          courseImageUrl:'http://134.175.30.90/group1/M00/00/00/rBAADV4JojuASA-xAADeYd6Zqb8484_big.png',
          courseGrdle:'高级',
          learningUser:'1125',
          isHot:'1'
        },
        {
          courseId:'1002',
          courseName:'HTML实战项目演练',
          courseImageUrl:'http://134.175.30.90/group1/M00/00/00/rBAADV4Jon-AM16SAAC8wt5a22w464_big.png',
          courseGrdle:'高级',
          learningUser:'1125',
          isHot:'1'
        },
        {
          courseId:'1003',
          courseName:'Java实战项目演练',
          courseImageUrl:'http://134.175.30.90/group1/M00/00/00/rBAADV4Jon-AM16SAAC8wt5a22w464_big.png',
          courseGrdle:'高级',
          learningUser:'1125',
          isHot:'1'
        },
        {
          courseId:'1004',
          courseName:'PHP实战项目演练',
          courseImageUrl:'http://134.175.30.90/group1/M00/00/00/rBAADV4JopqAGIuuAADGQKPeQeM823_big.png',
          courseGrdle:'高级',
          learningUser:'1125',
          isHot:'1'
        },
        {
          courseId:'1004',
          courseName:'PHP实战项目演练',
          courseImageUrl:'http://134.175.30.90/group1/M00/00/00/rBAADV4JopqAGIuuAADGQKPeQeM823_big.png',
          courseGrdle:'高级',
          learningUser:'1125',
          isHot:'1'
        }
      ],

    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    onSubmit() {
      console.log('submit!');
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
}
</script>

<style >
  html, body {
    min-height: 100%;
    height: 100%;
    min-width: 1000px;
    background: #f3f5f7;
  }
  .course-list{
    margin-top: 15px;
  }
  /*分页栏*/
  .course-search-page{
    margin: 20px 0;
  }
  /*分页栏end*/

  /*列表右侧*/
  .course-search-right{
    margin-top: 65px;
  }
  .course-search-right .course-search-right-recommend{
    margin-bottom: 15px;
  }
  .course-search-right .course-search-right-recommend .course-recommend-card{
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    border-radius: 4px;
    width: 350px;
    height: 135px;
    padding: 5px;
    margin-bottom: 10px;

  }
  .course-search-right .course-search-right-recommend .course-recommend-card .card-image{
    width: 64px;
    height: 64px;
    float: left;

  }
  .course-search-right .course-search-right-recommend .course-recommend-card .card-image img{
    width: 60px;
    height: 60px;
    padding: 2px;
  }
  .course-search-right .course-search-right-recommend .course-recommend-card .card-content{
    padding: 5px;

  }
  /*列表右侧*/


  /*课程列表*/
  .course-list-main{
    width:78%;
    height:100%;
    /*background:#ffffff;*/
    margin:0 auto;
  }
  .conten-list {
    width: 100%;
  }
  .conten-list .Recommend .title {
    position: relative;
    font-size: 20px;
    text-align: left;
  }

  .conten-list .Recommend .title .queryall {
    position: absolute;
    font-size: 12px;
    color: #787d82;
    top: 10px;
    right: 20px;
  }

  .conten-list .Recommend .title-class {
    margin-top: 30px;
    margin-bottom: 15px;
    position: relative;
    font-size: 20px;
    text-align: left;
  }

  .conten-list .Recommend .title-class .course-nav {
    display: inline-block;
    max-width: 385px;
    font-size: 16px;
    position: relative;
    left: 50%;
    color: #787d82;
    transform: translateX(-70%);
  }

  .conten-list .Recommend .title-class .course-nav span {

    display: inline-block;
    padding: 0 30px;
  }
  .conten-list .Recommend .title-class .course-nav a {
    display: inline-block;
    padding: 0 30px;
    color: #00a0e9;
  }

  .conten-list .Recommend .title-class a {
    position: absolute;
    font-size: 12px;
    color: #787d82;
    top: 10px;
    right: 20px;
  }

  .conten-list .Recommend .content {
    overflow: hidden;

    /*display: flex;
    justify-content: space-around;*/
  }

  .conten-list .Recommend .content div:nth-child(5n+1) {
    margin-left: 0px;
  }

  .conten-list .Recommend .content .recom-item {
    background: #fff;
    margin: 10px 0;
    /*width: 18.8%;
    margin-left: 1.5%;
    */
    width: 21.8%;
    height: 300px;
    margin-right: 34px;
    float: left;
  }

  .conten-list .Recommend .content .recom-item p {
    position: relative;
  }

  .conten-list .Recommend .content .recom-item p .lab {
    font-size: 12px;
    text-align: center;
    width: 41px;
    height: 24px;
    line-height: 22px;
    color: #f07700;
    position: absolute;
    right: -5px;
    top: 10px;
    background: url(../../assets/img/widget-hotIco.png) no-repeat;
  }

  .conten-list .Recommend .content .recom-item ul {
    padding: 25px;
    font-size: 14px;
  }

  .conten-list .Recommend .content .recom-item ul li {
    list-style: none;
    /*超过的部分隐藏*/
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .conten-list .Recommend .content .recom-item ul li:nth-child(2) {
    margin-top: 20px;
    color: #999;
  }

  .conten-list .Recommend .content .recom-item ul li:nth-child(2) span {
    color: #ff7c2d;
  }

  .conten-list .Recommend .content .recom-item ul li:nth-child(2) em {
    font-weight: bold;
  }

  .conten-list .Recommend .content .recom-item a {
    color: #050505;
    text-decoration: none;
  }

  .conten-list .Recommend .content .recom-item:hover {
    box-shadow: 0px 0px 4px #999;
  }

  .conten-list .course-box {
    overflow: hidden;
    margin-top: 20px;
  }

  .conten-list .course-box .title {
    margin-bottom: 15px;
    position: relative;
    font-size: 20px;
    text-align: left;
  }
  .conten-list .course-box .title .queryall {
    position: absolute;
    font-size: 14px;
    color: #787d82;
    top: 10px;
    right: 20px;
  }
  .conten-list .course-box .title .course-nav {
    display: inline-block;
    max-width: 385px;
    font-size: 16px;
    position: relative;
    left: 50%;
    color: #787d82;
    transform: translateX(-70%);
  }
  .conten-list .course-box .title .course-nav a{
    color: #787d82;
  }
  .conten-list .course-box .title .course-nav span {
    display: inline-block;
    padding: 0 30px;
  }

  /*.conten-list .course-box .title a {*/
  /*  position: absolute;*/
  /*  font-size: 12px;*/
  /*  color: #787d82;*/
  /*  top: 10px;*/
  /*  right: 20px;*/
  /*}*/

  .conten-list .course-box .content .cont-left {
    width: 20%;
    /*max-width: 228px;*/
    float: left;
  }

  .conten-list .course-box .content .cont-right {
    width: 78%;
    /*max-width: 890px;*/
    float: right;
  }

  .conten-list .course-box .content .cont-right div:nth-child(2) {
    margin-left: 0;
  }

  .conten-list .course-box .content .cont-right .recom-item {
    background: #fff;
    margin: 15px 0;
    width: 23.5%;
    margin-left: 2%;
    float: left;
  }

  .conten-list .course-box .content .cont-right .recom-item p {
    position: relative;
  }

  .conten-list .course-box .content .cont-right .recom-item p .lab {
    font-size: 12px;
    text-align: center;
    width: 41px;
    height: 24px;
    line-height: 22px;
    color: #f07700;
    position: absolute;
    right: -5px;
    top: 10px;
    background: url(../../assets/img/widget-hotIco.png) no-repeat;
  }

  .conten-list .course-box .content .cont-right .recom-item ul {
    padding: 25px;
    font-size: 14px;
  }

  .conten-list .course-box .content .cont-right .recom-item ul li {
    list-style: none;
  }

  .conten-list .course-box .content .cont-right .recom-item ul li:nth-child(2) {
    margin-top: 20px;
    color: #999;
  }

  .conten-list .course-box .content .cont-right .recom-item ul li:nth-child(2) span {
    color: #ff7c2d;
  }

  .conten-list .course-box .content .cont-right .recom-item ul li:nth-child(2) em {
    font-weight: bold;
  }

  .conten-list .course-box .content .cont-right .recom-item a {
    color: #050505;
    text-decoration: none;
  }

  .conten-list .active {
    color: #00a4ff;
  }
  /*课程列表end*/

  /*分类*/
  .learing-list {
    width: 100%;
    background: #fff;
  }
  .learing-list ul, .learing-list li {
    padding: 0px;
    margin: 0px;
    list-style: none;
  }
  .learing-list .list-box {
    /*max-width: 1170px;*/
    width:78%;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
  }
  .learing-list .list-box ul {
    overflow: hidden;
    padding: 20px 0;
    border-bottom: solid 1px #ccc;
  }
  .learing-list .list-box ul .all {
    padding: 1px 5px;
    color: #fff;
    background: #00a4ff;
  }
  .learing-list .list-box ul:last-child {
    border: none;
  }
  .learing-list .list-box li {
    padding: 1px 15px;
    margin: 0 3px;
    float: left;
  }
  .learing-list .active {
    color: #fff;
    background: #00a4ff;
  }
  .learing-list .more {
    position: absolute;
    text-decoration: none;
    right: 10px;
  }
  /*分类end*/

  /*课程列表end*/
</style>
