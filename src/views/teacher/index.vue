<template>
  <div>

    <el-container>

      <el-header>
        <!--工具栏-->
        <el-row>
          <el-col :span="24">
            <div class="grid-content bg-purple-dark">
              <el-form :inline="true" :model="admin" class="demo-form-inline">
                <el-form-item label="课程名称">
                  <el-input v-model="admin.name" placeholder="课程名称"></el-input>
                </el-form-item>
                <el-form-item label="课程类型">
                  <el-select v-model="admin.type" placeholder="请选择">
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
        <el-table
          :data="tableData"
          border
          style="width: 100%">
          <el-table-column
            prop="date"
            label="日期"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="sex"
            label="性别">
          </el-table-column>
          <el-table-column
            prop="email"
            label="Email">
          </el-table-column>
          <el-table-column
            prop="phone"
            label="手机">
          </el-table-column>
          <el-table-column
            prop="desc"
            label="描述">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址">
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
        admin: {
          name: '',
          type: ''
        },
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
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
    }
  }
</script>
