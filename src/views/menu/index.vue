<template>
  <div >
    <el-container>
      <el-header>

      </el-header>
      <el-main>

      </el-main>
    </el-container>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'Course',
    computed: {
      ...mapGetters([
        'name'
      ])
    }
  }
</script>

<style lang="scss" scoped>

</style>
