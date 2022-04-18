<template>
<div class="login">
<div>
  <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>

  <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
  >

    <span>这是一段信息</span>
    <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
  </el-dialog>
</div>
</div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      dialogVisible: false
    };
  },
  methods: {
    handleClose() {
      this.$confirm('确认关闭？')

  }
}
}
</script>

<style scoped>
.login{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e03e3e;
  width: 1000px;
  height: 400px;
  float: left;
  right: 0;
}
.el-card{
  width: 400px;
  height: 200px;
}
</style>
