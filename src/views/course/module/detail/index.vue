<template>
  <div>
    <!--课程详情头部-->
    <div class="article-banner">
      <div class="banner-bg"></div>
      <div class="banner-info">
        <div class="banner-left">
          <p>课程 <span>\ 编程入门</span></p>
          <p class="tit">程序语言设计</p>
          <p class="pic"><span class="new-pic">特惠价格￥999</span> <span class="old-pic">原价￥1999</span></p>
          <p class="info">
            <a href="/course/learning/101" target="_blank">马上学习</a>
            <span><em>难度等级</em>中级</span>
            <span><em>课程时长</em>2小时27分</span>
            <span><em>评分</em>4.7分</span>
            <span><em>授课模式</em>录播</span>
          </p>
        </div>
        <div class="banner-rit">
          <p>
            <a href="/static/test/learning/video_learning.html" target="_blank">
              <img src="/static/img/widget-video.png" alt="">
            </a>
          </p>
          <p class="vid-act"><span> <i class="el-icon-star-on"></i>收藏 23 </span> <span>分享 <i class="el-icon-share"></i></span></p>
        </div>
      </div>
    </div>
    <!--课程详情头部 end-->
    <!--课程介绍-->
    <div class="article-main">
      <el-row :gutter="20">
        <el-col :span="16">
          <div class="grid-content bg-purple">
            <el-tabs type="border-card">
              <el-tab-pane>
                <span slot="label"><i class="el-icon-date"></i> 课程介绍</span>
                <!--适用人群-->
                <div class="course-for-user">
                  <el-card class="box-card">
                    <div slot="header" class="clearfix">
                      <span>适用人群</span>
                    </div>
                    <div class="text item">
                      本课程假设学生熟悉大多数入门课程所涉及的程序，但它被明确设计成不是一门特别高级的课程。
                    </div>
                  </el-card>

                </div>
                <!--适用人群 end-->

                <!--教师介绍-->
                <div class="article-main-teacher-detail">
                  <el-card class="box-card">
                    <div slot="header" class="clearfix">
                      <span>讲师介绍</span>
                      <el-button style="float: right; padding: 3px 0" type="text">查看详情</el-button>
                    </div>
                    <div  class="content">
                      <h3>教学方：老师名称</h3>
                      <h5>JavaEE开发与教学多年，精通JavaEE技术体系，对流行框架JQuery、DWR、Struts1/2，Hibernate，Spring，MyBatis、JBPM、Lucene等有深入研究。授课逻辑严谨，条理清晰，注重学生独立解决问题的能力。</h5>
                    </div>
                  </el-card>
                </div>
                <!--教师介绍 end-->
                <!--课程介绍-->
                <div class="course-introduction">
                  <el-card class="box-card">
                    <div slot="header" class="clearfix">
                      <span>课程介绍</span>
                    </div>
                    <div  class="content">
                      本课程假设学生熟悉大多数入门课程所涉及的程序，但它被明确设计成不是一门特别高级的课程。学生应该熟悉变量，条件语句，数组，链表，栈，和递归（递归算法将审查和扩展），和一个接口和实现之间的区别。学生应该渴望用新的语言编写程序。本课程C部分分析了面向对象的基本概念和对比他们的其他语言，用java或密切相关的语言如此熟悉（例如，C #）可能有助于C部分，但它是没有必要的作业。本课程是基于专为第二和第三年本科生设计的课程：不是第一个计算机科学课程，但不是一个高级课程。因此，它当然不会涵盖在编程语言的美丽世界的一切，但它是一个坚实的介绍。它的目的是大开眼界和迷人的学习者寻求“第三或第四编程课程”，并为有更多的经验，谁正在寻找一个明确和精确的编程语言基础的学习者。课程中的作业设计是具有挑战性的，但课程内容需要你所需要的一切。
                    </div>
                  </el-card>
                </div>
                <!--课程介绍 end-->
                <!--常见问题-->
                <div class="course-question">
                  <el-card class="box-card">
                    <div slot="header" class="clearfix">
                      <span>常见问题</span>
                    </div>
                    <div  class="content">
                      <el-collapse v-model="activeNames" @change="handleChange">
                        <el-collapse-item title="我什么时候能够访问课程视频与作业？" name="1">
                          <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                          <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                        </el-collapse-item>
                        <el-collapse-item title="如何需要额外的时间来完成课程会怎么样？" name="2">
                          <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                          <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
                        </el-collapse-item>
                        <el-collapse-item title="我支付次课程之后会得到什么？" name="3">
                          <div>简化流程：设计简洁直观的操作流程；</div>
                          <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                          <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
                        </el-collapse-item>
                        <el-collapse-item title="退款条例是如何规定的？" name="4">
                          <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                          <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                        </el-collapse-item>
                      </el-collapse>
                    </div>
                  </el-card>
                </div>
                <!--常见问题end-->
              </el-tab-pane>
              <!--课程目录-->
              <el-tab-pane label="课程目录">
                <div class="course-catalogue">
                  <el-input
                    placeholder="输入关键字进行过滤"
                    v-model="filterText">
                  </el-input>

                  <el-tree
                    class="filter-tree"
                    :data="data"
                    :props="defaultProps"
                    default-expand-all
                    :filter-node-method="filterNode"
                    ref="tree">
                  </el-tree>
                </div>
              </el-tab-pane>
              <!--课程目录 end-->
              <!--课程问答-->
              <el-tab-pane label="课程问答">
                <div>
                  <div class="block">
                    <el-timeline>
                      <el-timeline-item timestamp="2018/4/12" placement="top">
                        <el-card>
                          <h4>更新 Github 模板</h4>
                          <p>王小虎 提交于 2018/4/12 20:46</p>
                        </el-card>
                      </el-timeline-item>
                      <el-timeline-item timestamp="2018/4/3" placement="top">
                        <el-card>
                          <h4>更新 Github 模板</h4>
                          <p>王小虎 提交于 2018/4/3 20:46</p>
                        </el-card>
                      </el-timeline-item>
                      <el-timeline-item timestamp="2018/4/2" placement="top">
                        <el-card>
                          <h4>更新 Github 模板</h4>
                          <p>王小虎 提交于 2018/4/2 20:46</p>
                        </el-card>
                      </el-timeline-item>
                    </el-timeline>
                  </div>
                </div>
              </el-tab-pane>
              <!--课程问答end-->
              <!--课程评价-->
              <el-tab-pane label="课程评价">
                <div class="course-evaluate">
                  <div class="course-evaluate-image">
                      <img src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" width="150px" height="150px">
                  </div>
                  <h3>课程评价</h3>
                  课程评价课程评价课程评价课程评价课程评价课程评价课程评价课程评价课程评价课程评价
                  课程评价课程评价课程评价课程评价课程评价课程评价课程评价课程评价课程评价课程评价
                  <div class="course-evaluate-user-conten">
                    <strong>课程评分：</strong>
                    <el-rate v-model="value"  disabled  show-score  text-color="#ff9900" score-template="{value}"></el-rate>
                  </div>
                </div>
              </el-tab-pane>
              <!--课程评价end-->
            </el-tabs>
          </div>
        </el-col>
        <!--课程推荐-->
        <el-col :span="8">
          <div class="course-recommended-top">
            <p>
              <span>好评度</span>
              <el-divider direction="vertical">&nbsp;&nbsp;</el-divider>
              <span>课程数</span>
              <el-divider direction="vertical">&nbsp;&nbsp;</el-divider>
              <span>学生数</span>
            </p>
            <p>
              <span>93%</span>
              <el-divider direction="vertical">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</el-divider>
              <span>39</span>
              <el-divider direction="vertical">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</el-divider>
              <span>36万</span>
            </p>
          </div>
          <div class="grid-content bg-purple">
            <!--课程推荐-->
            <div class="course-recommended">
              <h3>课程推荐</h3>
              <el-carousel trigger="click" height="150px">
                <el-carousel-item v-for="item in 4" :key="item">
                  <img src="http://134.175.30.90/group1/M00/00/00/rBAADV4JpOqACX1iAAII29NlvBA681_big.jpg" width="100%" height="100%">
                </el-carousel-item>
              </el-carousel>
            </div>

            <!--课程推荐-->
          </div>
        </el-col>
        <!--课程推荐end-->
      </el-row>
      <br>

    </div>
    <!--课程介绍 end-->
  </div>

</template>

<script>

  export default {
    name: 'CourseDetail',
    data() {
      return {
        //常见问题
        activeNames: ['1'],
        //课程评价
        value: 3.7,
        //课程目录
        filterText: '',
        data: [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    },
    //课程目录
    watch: {
      filterText(val) {
        this.$refs.tree.filter(val);
      }
    },
    methods: {
      //课程目录
      filterNode(value, data) {
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
      }
    },
  }
</script>

<style >
  html, body {
    min-height: 100%;
    height: 100%;
    min-width: 1000px;
    background: #f3f5f7;
  }
  /*课程推荐*/
  .course-recommended-top{
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    margin: 0 0 15px 0;
    padding: 15px;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 15px;
  }
  .course-recommended{
    padding: 15px;
  }
  /*课程评价*/
  .course-evaluate{
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    margin: 15px;
    padding: 15px;
  }
  .course-evaluate .course-evaluate-image{
    float: left;
    margin-right: 15px;
  }
  .course-evaluate .course-evaluate-user-conten{
    margin-top: 5px;
    margin-left: 15px;
  }
  /*课程评价end*/
  /*教师介绍*/
  .article-main-teacher-detail{
    margin: 30px 0;
  }
  .article-main-teacher-detail .text {
    font-size: 14px;
  }

 .article-main-teacher-detail .item {
    margin-bottom: 18px;
  }

  .article-main-teacher-detail .clearfix:before,
  .article-main-teacher-detail .clearfix:after {
    display: table;
    content: "";
  }
  .article-main-teacher-detail .clearfix:after {
    clear: both
  }

  .article-main-teacher-detail .box-card {
    width: 100%;
  }
  /*教师介绍 end */
  /*课程介绍*/
  .course-introduction{
    margin: 30px 0;
  }
  .course-introduction .content{
    margin: 10px;
    font-size: 16px;
  }
  /*常见问题*/
  .course-question{
    margin: 30px 0;
  }
  /*常见问题end*/
  /*课程详情头部*/
  .article-banner {
    position: relative;
  }
  .article-banner .banner-bg {
    width: 100%;
    height: 240px;
    background: url(../../../../assets/img/widget-bannerBg.png) top center no-repeat;
    background-size: cover;
  }
  .article-banner .banner-info {
    margin: 20px 0;
    position: absolute;
    width: 78%;
    /*max-width: 1170px;*/
    color: #fff;
    top: 0px;
    left: 50%;
    transform: translateX(-50%);
  }
  .article-banner .banner-info .banner-left {
    float: left;
  }
  .article-banner .banner-info .banner-left .tit {
    font-size: 32px;
  }
  .article-banner .banner-info .banner-left .pic {
    font-size: 16px;
  }
  .article-banner .banner-info .banner-left .pic .new-pic {
    color: #ca50f8;
  }
  .article-banner .banner-info .banner-left .pic .old-pic {
    color: #999;
    text-decoration: line-through;
  }
  .article-banner .banner-info .banner-left .info {
    margin-top: 15px;
  }
  .article-banner .banner-info .banner-left .info a {
    background: #00a4ff;
    color: #fff;
    font-size: 18px;
    display: inline-block;
    padding: 5px 20px;
    position: relative;
    top: -10px;
  }
  .article-banner .banner-info .banner-left .info span {
    display: inline-block;
    padding: 0px 20px;
    font-size: 18px;
    border-right: solid 1px #787d82;
  }
  .article-banner .banner-info .banner-left .info span em {
    font-size: 14px;
    display: block;
  }
  .article-banner .banner-info .banner-left .info span:last-child {
    border: none;
  }
  .article-banner .banner-info .banner-rit {
    float: right;
  }
  .article-banner .banner-info .banner-rit .vid-act {
    color: #dadada;
    cursor: pointer;
  }
  .article-banner .banner-info .banner-rit .vid-act i {
    margin: 0 5px;
    position: relative;
    top: 1px;
  }
  .article-banner .banner-info .banner-rit .vid-act span {
    display: inline-block;
    width: 49%;
    line-height: 15px;
    text-align: center;
    margin: 15px 0;
  }
  .article-banner .banner-info .banner-rit .vid-act span:nth-child(1) {
    border-right: solid 1px #787d82;
  }
  .article-banner .banner-info .banner-rit .vid-act .active {
    color: #00a4ff;
  }
  /*课程详情头部 end*/
  .article-main{
    width:78%;
    height:100%;
    background:#ffffff;
    margin:0 auto;
    margin-top: 20px;
  }
  .article-main .el-row {
    margin-bottom: 20px;
    &:last-child {
       margin-bottom: 0;
     }
  }
  .article-main .el-col {
    border-radius: 4px;
  }
  .article-main .bg-purple-dark {
    background: #99a9bf;
  }
  .article-main .bg-purple {
    background: #c6e4e6;
  }
  .article-main .bg-purple-light {
    background: #e5e9f2;
  }
  .article-main .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .article-main .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
