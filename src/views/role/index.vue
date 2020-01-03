<template>
  <div>
    <el-container>
      <el-header>
        <!--工具栏-->
        <el-row>
          <el-col :span="24">
            <div class="grid-content bg-purple-dark">
              <el-form :inline="true" :model="course" class="demo-form-inline">
                <el-form-item label="课程名称">
                  <el-input v-model="course.name" placeholder="课程名称"></el-input>
                </el-form-item>
                <el-form-item label="课程类型">
                  <el-select v-model="course.type" placeholder="请选择">
                    <el-option label="类型一" value="shanghai"></el-option>
                    <el-option label="类型二" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="onSubmit">查询</el-button>
                </el-form-item>
              </el-form>
            </div>
          </el-col>
        </el-row>

      </el-header>
      <el-main>
        <!--数据显示区-->
        <el-table
          :data="courseData"
          style="width: 100%">
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" inline class="demo-table-expand">
                <el-row type="flex" class="row-bg">
                  <el-col span="6">
                    <el-image
                      style="width: 100px; height: 100px"
                      :src="props.row.url"
                      :preview-src-list="props.row.srcList">
                    </el-image>
                  </el-col>
                  <el-col span="18">
                    <el-form-item label="商品名称">
                      <span>{{ props.row.name }}</span>
                    </el-form-item>
                    <el-form-item label="所属店铺">
                      <span>{{ props.row.shop }}</span>
                    </el-form-item>
                    <el-form-item label="商品 ID">
                      <span>{{ props.row.id }}</span>
                    </el-form-item>
                    <el-form-item label="店铺 ID">
                      <span>{{ props.row.shopId }}</span>
                    </el-form-item>
                    <el-form-item label="商品分类">
                      <span>{{ props.row.category }}</span>
                    </el-form-item>
                    <el-form-item label="店铺地址">
                      <span>{{ props.row.address }}</span>
                    </el-form-item>
                    <el-form-item label="商品描述">
                      <span>{{ props.row.desc }}</span>
                    </el-form-item>
                  </el-col>
                </el-row>

              </el-form>
            </template>
          </el-table-column>
          <el-table-column
            label="商品 ID"
            prop="id">
          </el-table-column>
          <el-table-column
            label="商品名称"
            prop="name">
          </el-table-column>
          <el-table-column
            label="描述"
            prop="desc">
          </el-table-column>
        </el-table>
      </el-main>

      <el-footer>
        <!--分页栏-->
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
      </el-footer>
    </el-container>
  </div>

</template>

<script>

  export default {
    data() {
      return {
        course: {
          name: '',
          type: ''
        },
        courseData: [{
          id: '12987122',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333',
          url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          srcList: [
            'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
            'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
          ]
        }]
      }
    },
    created() {

    },
    methods: {
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
<style>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>
