<template>
<div class="container">
    <h3>欢迎登录</h3>
    <!-- 登陆表单区域 -->
    <el-form ref="loginFrom" :model="loginFrom" :rules="LoginfromRules"   label-width="80px" >
        <!-- 用戶名 -->
      <el-form-item prop="username" label="用户名">
         <el-input  v-model="loginFrom.username">
         </el-input>
      </el-form-item>
      <!-- 密碼 -->
        <el-form-item prop="password" label="密码">
         <el-input v-model="loginFrom.password"  type="password" autocomplete="off">
         </el-input>
      </el-form-item>
      <!-- 按鈕 -->
        <el-form-item>
         <el-button type="primary" @click="submitForm">登录</el-button>
         <el-button type="info" @click="resetForm('loginFrom')">重置</el-button>
      </el-form-item>
    </el-form>





</div>
</template>

<script>
export default {
    data(){
        return{
            loginFrom:{
                username:'',
                password:''
            },
            LoginfromRules:{
                   // 验证用户名是否合法
                    username: [
                    { required: true, message: '请输入登录名称', trigger: 'blur' },
                    { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
                    ],
                    // 验证密码是否合法
                    password: [
                    { required: true, message: '请输入登录密码', trigger: 'blur' },
                    { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
                    ]
            }
        }
    },
    methods:{
               submitForm() {

                    this.$refs.loginFrom.validate((valid) => {
                    if (valid) {
                        window.sessionStorage.setItem("islogin","true");
                        this.$store.dispatch('asyncUpdateUser',{name:this.loginFrom.username})
                        this.$router.push({name:'header'});
                    } else {
                       return false;
                    }
                    });
                },
                resetForm(loginFrom) {
                    this.$refs[loginFrom].resetFields();
                }
            }
        }


</script>
<style scoped>
.container{
	padding-top: 20px;
	border: 1px solid silver;
	width: 400px;
	margin: 80px auto;
	padding-right: 20px;
}
</style>
