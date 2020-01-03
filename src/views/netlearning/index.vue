<template>
<div class="index_main">
  <!--头部-->
  <div class="index_header">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">首页</el-menu-item>
      <el-submenu index="2">
        <template slot="title">课程</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="4"><a href="https://www.baidu.com" target="_blank">联系我们</a></el-menu-item>
      <el-menu-item >
        <div class="el-menu-search">
          <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
      </el-menu-item>

    </el-menu>
  </div>
  <!--头部 end-->
  <!--轮播图-->
  <div class="index_nav">
    <el-carousel :interval="10000" type="card" >
      <el-carousel-item v-for="item in navItem" :key="item">
        <a :href="item.imgUrl" target="_blank">
          <img :src="item.imgUrl" width="100%" height="100%">
        </a>
      </el-carousel-item>
    </el-carousel>
  </div>
  <!--轮播图 end-->
  <!--精品推荐-->
  <div class="conten-list">
    <div class="Recommend">
      <div class="title">精品推荐<a href="#" class="queryall">查看全部</a></div>
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
    <!--精品推荐 end-->
    <!--精品推荐 Java工程师 PHP工程师-->
    <div class="course-box" v-for="item in recommendedCourseDirection" key="recommendedCourseDirection">
      <div class="title">
        {{item.courseDirectionName}}
        <div class="course-nav" v-for="subCate in item.courseCategory">
          <!--<span class="active">热门</span>-->
          <span><a href="#">{{subCate.categoryName}}</a></span>
        </div>
        <a class="queryall" href="#">查看全部</a>
      </div>
      <div class="content">
        <div class="cont-left">
          <img :src="item.leftImageUrl" width="100%" alt="">
        </div>
        <div class="cont-right">
          <div><img :src="item.headerImageUrl" width="100%" alt=""></div>
          <div class="recom-item" v-for="subCourse in item.courseItem">
            <a href="#">
              <p><img :src="subCourse.courseImageUrl" width="100%" alt=""></p>
              <ul>
                <li>{{subCourse.courseName}} </li>
                <li><span>{{subCourse.courseGrdle}}</span> <em> · </em> {{subCourse.learningUser}}人在学习</li>
              </ul>
            </a>
          </div>

        </div>
      </div>
    </div>
    <!--精品推荐 Java工程师 PHP工程师 end-->
    <div class="container">
      <div class="teacher-list text-center">
        <div class="title"> 名师大咖
          <a class="queryall" href="#">申请加入</a>
        </div>
        <div class="first-box">
          <div class="teach-item" v-for="item in recommendedTeacher" :key="recommendedTeacher">
            <a :href="item.teacherImageUrl" target="_blank">
              <img :src="item.teacherImageUrl" width="230px" height="230px" alt="">
              <span class="lab">{{item.teacherLearningCount}}学习过</span>
              <ul class="teach-info">
                <li>{{item.teacherName}} <span>{{item.teacherCourse}}</span></li>
              </ul>
            </a>
          </div>
          <div class="clearfix"></div>
        </div>

      </div>
    </div>

  </div>
  <!--尾部-->
<!--  <el-container>
    <el-footer>
      <div class="index_footer">
        <el-row type="flex" class="row-bg">
          <el-col :span="14">
            <div class="grid-content bg-purple">
              <div>网络学习平台一个方便师生的学习渠道</div>
            </div>
          </el-col>
          <el-col :span="10">
            <div class="grid-content bg-purple-light">
              <div>© 2018年 粤ICP备18113051号</div>
              <el-link type="primary">关注我们</el-link>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-footer>
  </el-container>-->

  <!--返回顶部-->
  <el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop>
</div>

</template>
<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        navItem:[
          {
            id:'',
            name:'',
            imgUrl:'http://134.175.30.90/group1/M00/00/00/rBAADV4JpOqACX1iAAII29NlvBA681_big.jpg'
          },
          {
            id:'',
            name:'',
            imgUrl:'http://134.175.30.90/group1/M00/00/00/rBAADV4JpSCAdJ1lAAHrBFlP9N0917_big.jpg'
          },
          {
            id:'',
            name:'',
            imgUrl:'http://134.175.30.90/group1/M00/00/00/rBAADV4JpQuASgcvAAK6A9GjnBM525_big.jpg'
          }
          ,
          {
            id:'',
            name:'',
            imgUrl:'http://134.175.30.90/group1/M00/00/00/rBAADV4JpT-Afr2bAAHlpM2Vvt8342_big.jpg'
          }
        ],
        //精品推荐
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
          }
        ],
        //课程方向
        recommendedCourseDirection:[
          {
            courseDirectionName:'Java工程师',
            leftImageUrl:'http://134.175.30.90/group1/M00/00/00/rBAADV4JsK-AC4uaAAFA06l-mUI178_big.png',
            headerImageUrl:'http://134.175.30.90/group1/M00/00/00/rBAADV4JsIKATV_kAAFQiFsKYYI690_big.png',
            courseCategory:[
              {
                categoryName:'基础课程',
                categoryUrl:''
              },
              {
                categoryName:'就业课程',
                categoryUrl:''
              },
              {
                categoryName:'高级课程',
                categoryUrl:''
              }
            ],
            courseItem:[
              {
                courseId:'1000',
                courseName:'Think PHP 5.0 博客系统实战项目演练',
                courseImageUrl:'http://134.175.30.90/group1/M00/00/00/rBAADV4JocWAPE4PAADlcugLgic457_big.png',
                courseGrdle:'高级',
                learningUser:'1125',
              },
              {
                courseId:'1001',
                courseName:'Android实战项目演练',
                courseImageUrl:'http://134.175.30.90/group1/M00/00/00/rBAADV4JojuASA-xAADeYd6Zqb8484_big.png',
                courseGrdle:'高级',
                learningUser:'1125',
              },
              {
                courseId:'1002',
                courseName:'HTML实战项目演练',
                courseImageUrl:'http://134.175.30.90/group1/M00/00/00/rBAADV4Jon-AM16SAAC8wt5a22w464_big.png',
                courseGrdle:'高级',
                learningUser:'1125',
              },
              {
                courseId:'1003',
                courseName:'Java实战项目演练',
                courseImageUrl:'http://134.175.30.90/group1/M00/00/00/rBAADV4Jon-AM16SAAC8wt5a22w464_big.png',
                courseGrdle:'高级',
                learningUser:'1125',
              }
            ]
          },
          {
            courseDirectionName:'PHP工程师',
            leftImageUrl:'http://134.175.30.90/group1/M00/00/00/rBAADV4JsOyAImv8AAD2sHw37B8894_big.png',
            headerImageUrl:'http://134.175.30.90/group1/M00/00/00/rBAADV4JsMGAMy39AADUbUclKZs548_big.png',
            courseCategory:[
              {
                categoryName:'基础课程',
                categoryUrl:''
              },
              {
                categoryName:'就业课程',
                categoryUrl:''
              },
              {
                categoryName:'高级课程',
                categoryUrl:''
              }
            ],
            courseItem:[
              {
                courseId:'1000',
                courseName:'Think PHP 5.0 博客系统实战项目演练',
                courseImageUrl:'http://134.175.30.90/group1/M00/00/00/rBAADV4JocWAPE4PAADlcugLgic457_big.png',
                courseGrdle:'高级',
                learningUser:'1125',
              },
              {
                courseId:'1001',
                courseName:'Android实战项目演练',
                courseImageUrl:'http://134.175.30.90/group1/M00/00/00/rBAADV4JojuASA-xAADeYd6Zqb8484_big.png',
                courseGrdle:'高级',
                learningUser:'1125',
              },
              {
                courseId:'1002',
                courseName:'HTML实战项目演练',
                courseImageUrl:'http://134.175.30.90/group1/M00/00/00/rBAADV4Jon-AM16SAAC8wt5a22w464_big.png',
                courseGrdle:'高级',
                learningUser:'1125',
              },
              {
                courseId:'1003',
                courseName:'Java实战项目演练',
                courseImageUrl:'http://134.175.30.90/group1/M00/00/00/rBAADV4Jon-AM16SAAC8wt5a22w464_big.png',
                courseGrdle:'高级',
                learningUser:'1125',
              }
            ]
          }
        ],
        //名师大咖
        recommendedTeacher:[
          {
            teacherId:'1001',
            teacherName:'老师名称1',
            teacherCourse:'JAVA课程',
            teacherLearningCount:'1000',
            teacherImageUrl:'http://134.175.30.90/group1/M00/00/00/rBAADV4Jpp2AWHEzAABaQy-hdAE287_big.jpg'
          },
          {
            teacherId:'1002',
            teacherName:'老师名称2',
            teacherCourse:'PHP课程',
            teacherLearningCount:'888',
            teacherImageUrl:'http://134.175.30.90/group1/M00/00/00/rBAADV4Jpp2AWHEzAABaQy-hdAE287_big.jpg'
          },
          {
            teacherId:'1003',
            teacherName:'老师名称3',
            teacherCourse:'Android课程',
            teacherLearningCount:'1000',
            teacherImageUrl:'http://134.175.30.90/group1/M00/00/00/rBAADV4Jpp2AWHEzAABaQy-hdAE287_big.jpg'
          },
          {
            teacherId:'1004',
            teacherName:'老师名称4',
            teacherCourse:'大数据课程',
            teacherLearningCount:'1000',
            teacherImageUrl:'http://134.175.30.90/group1/M00/00/00/rBAADV4Jpp2AWHEzAABaQy-hdAE287_big.jpg'
          },
          {
            teacherId:'1005',
            teacherName:'老师名称5',
              teacherCourse:'前端课程',
            teacherLearningCount:'1000',
            teacherImageUrl:'http://134.175.30.90/group1/M00/00/00/rBAADV4Jpp2AWHEzAABaQy-hdAE287_big.jpg'
          }
        ]
      };
    },
    mounted() {
      this.function()
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      function(){

      }
    }
  }
</script>
<style>
  /*页面布局*/
  .index_main{
    width:78%;
    height:100%;
    background:#ffffff;
    margin:0 auto;
    /*position:absolute;*/
    /*top:0;*/
    /*bottom:0;*/
    /*left:0;*/
    /*right:0;*/
  }
  /*头部菜单*/
  .el-select .el-input {
    width: 50px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
  /*轮播图*/
  .index_nav{
    margin-top: 20px;
  }
  .index_nav .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.5;
    line-height: 300px;
    margin: 0;
    height: 400px;
  }

  .index_nav .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .index_nav .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

  /*精品推荐 Java工程师 PHP工程师*/
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

    display: flex;
    justify-content: space-around;
  }

  .conten-list .Recommend .content div:nth-child(5n+1) {
    margin-left: 0px;
  }

  .conten-list .Recommend .content .recom-item {
    background: #fff;
    margin: 10px 0;
    width: 18.8%;
    /*margin-left: 1.5%;*/
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
  /*精品推荐 Java工程师 PHP工程师 end*/

  /*名师大咖*/
  .teacher-list {
    position: relative;
    overflow: hidden;
  }

  .teacher-list ul, .teacher-list li {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .teacher-list .teach-item-adv {
    float: left;
  }

  .teacher-list .title {
    margin-bottom: 15px;
    position: relative;
    font-size: 20px;
    text-align: left;
  }

  .teacher-list .teach-item {
    position: relative;
    width: 18.8%;
    margin-left: 1.5%;
    float: left;
  }

  .teacher-list .teach-item .lab {
    position: absolute;
    background: url(../../assets/img/widget-learNumIco.png) no-repeat;
    width: 84px;
    line-height: 22px;
    height: 24px;
    color: #ff7c2d;
    font-size: 12px;
    padding: 0 5px;
    top: 210px;
    right: -1px;
    z-index: 9;
  }

  .teacher-list .teach-item .teach-info {
    text-align: left;
    padding: 10px;
    color: #fff;
    position: absolute;
    background: rgba(0, 0, 0, 0.5);
    bottom: 0px;
    width: 100%;
    height: 52px;
  }
  .teacher-list .title .queryall {
    position: absolute;
    font-size: 14px;
    color: #787d82;
    top: 10px;
    right: 20px;
  }
  .teacher-list .first-box div:nth-child(1) {
    margin-left: 0;
  }

  .teacher-list .two-box {
    margin-top: 30px;
  }

  .teacher-list .two-box div:nth-child(1) {
    width: 39.1%;
  }
  /*名师大咖 end*/
  /*尾部*/
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
