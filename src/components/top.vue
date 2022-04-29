<template>
<div class="top">
    <div class="icon">
      <iconFont :iconClass="iconSize" :iconHref="'icon-wangyiyunyinle'" class="logo"></iconFont>
    </div>
  <div class="title">网易云音乐</div>
  <div class="but">
    <i class="el-icon-arrow-left" @click="goBack"></i>
    <i class="el-icon-arrow-right" @click="goBackBack"></i>
  </div>
  <div class="box" >
    <i class="el-icon-search"></i>
    <input class="search" prefix-icon="el-icon-search">
  </div>
  <div class="right">
    <el-avatar icon="el-icon-user-solid" :size="'small'" @click="dialogVisible = true"></el-avatar>
    <el-button type="text" @click="dialogVisible = true">未登录</el-button>
    <i class="el-icon-setting"></i>
    <i class="el-icon-message"></i>
    <el-divider direction="vertical"></el-divider>
    <i class="el-icon-minus"></i>
    <i class="el-icon-full-screen"></i>
    <i class="el-icon-close"></i>
  </div>
  <div>


    <el-dialog
        title="登录到仿网易云"
        :visible.sync="dialogVisible"
        width="30%"
        :append-to-body="true"
        :close-on-click-modal="false"
    >
    <el-form label-width="80px">
      <el-form-item label="手机号">
    <el-input v-model="user.phone"></el-input>
  </el-form-item>
  <el-form-item label="密码">
    <el-input v-model="user.password"></el-input>
  </el-form-item>
    </el-form>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false" class="cancel">取 消</el-button>
    <el-button type="primary" @click="handleMessage" >确 定</el-button>
  </span>
    </el-dialog>
  </div>
</div>

</template>

<script>
import axios from 'axios';
import iconFont from './iconFont'
export default {
  name: "top",
   components:{iconFont},
   data() {
    return {
      iconSize:{
        width:'20px',
        height:'20px',
      },
      dialogVisible: false,
      user:{
        phone:'',
         password:'',
      }
    };
  },
  methods: {
    handleMessage(){
      this.$confirm("确认需要登录吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
         this.dialogVisible = false
      console.log(this.user.phone,this.user.password)

      axios({
        url:'http://localhost:3000/login/cellphone',
        method:'get',
        params:{
          phone:this.user.phone,
          password:this.user.password
        }
      }).then(
        response =>{
            console.log(response)
        },
        error =>{
            console.log('请求失败了',error.message)
        }
    )
      }).catch(()=>{})
	},
    goBack(){
      this.$router.go(-1)
    },
    goBackBack(){
      this.$router.go(1)
    },
},
}
</script>

<style scoped>
.top{
  display: flex;
}
.logo{
  border-radius:50%;
  width: 30px;
  height: 30px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
}
.title{
  color: white;
  margin-left: 5px;
  letter-spacing: 2px;
}
.but{
  display: flex;
  flex-flow: row;
  align-items: center;
  margin-left: 80px;
  color: white;
  justify-content: center;
}
.el-icon-arrow-left,.el-icon-arrow-right{
  margin-right: 10px;
  border-radius:50%;
  width: 30px;
  height: 30px;
  background-color: #e03e3e;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.search{
  width: 160px;
  height: 30px;
  caret-color:white;
  font-size: 13px;
  border-radius:25px;
  background-color:#e03e3e ;
  border: 0;
  outline: none;
  padding-left: 30px;
  margin-left: 30px;
}
i{
  color: white;
}
.box{
  position: relative;
}
.box .el-icon-search{
  width: 20px;
  height: 20px;
  position: absolute;
  top: 25px;
  left: 40px;
}
*{
  caret-color: transparent;

}
.right{
  text-align: right;
  margin-left: auto;
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.right>*{
  margin-left: 30px;
}
el-divider{
  color: #919191;
}
.login{
  color: #fdfdfd;
  font-size: x-small;
}
.el-button{
  color: rgba(255, 255, 255, 0.796);
  font-size: x-small;
  border-left: 0;
  margin-left: 8px;
}
.el-button:hover{
  color: white;
}
.cancel{
  background-color: red;
}
.cancel:hover{
  background-color: red;
}

</style>
