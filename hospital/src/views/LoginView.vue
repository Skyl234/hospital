<template>
    <div class="box">
        <div style="display: flex;">
            <clock />
            <h3 style="text-align: center; padding-left: 600px;color: aliceblue;">登录页</h3>
        </div>
        <el-card class="card">
            <template #header>
                <div class="card-header">
                    <span>用户登录</span>
                </div>
            </template>
            <div class="login-form">
                <el-form ref="loginForm" :model="loginForm" :rules="loginRules" label-width="80px" size="large">
                    <el-form-item label="用户名" prop="username">
                        <el-input v-model="loginForm.user" placeholder="请输入你的用户名"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input v-model="loginForm.pwd" type="password" placeholder="请输入密码"></el-input>
                    </el-form-item>
                    <el-form-item label="我是" prop="role">
                        <el-select v-model="loginForm.role" placeholder="选择你的角色">
                            <el-option label="管理员" value="admin"></el-option>
                            <el-option label="学生" value="student"></el-option>
                            <el-option label="老师" value="teacher"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-checkbox :checked size="large" border @click="check">
                            <template #default>
                                <span>是否同意用户协议 <a href="#" @click.prevent="showUserAgreement">PNSY使用协议</a></span>
                            </template>
                        </el-checkbox>
                    </el-form-item>
                    <div style="display: flex;">
                        <el-form-item>
                            <el-button type="primary" @click="login" :loading="loading" class="button"
                                size="large">登录</el-button>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="success" @click="register" :loading="loading" class="button"
                                size="large">注册</el-button>
                        </el-form-item>
                    </div>
                </el-form>
            </div>
        </el-card>
    </div>
    <el-dialog v-model="dialog" width="500" title="PNSC用户协议">
        <p>协议一：连线铁驭</p>
        <p>协议二：坚守任务</p>
        <p>协议三：保护铁驭</p>
    </el-dialog>
</template>

<script>
import clock from '@/components/clock.vue'
import { ElNotification } from 'element-plus'
import { jwtDecode } from 'jwt-decode'
export default {
    components: {
        clock,
    },
    data() {
        return {
            loginForm: {
                user: '',
                pwd: '',
                role: '',
            },
            loginRules: {
                username: [{ required: true, message: '账号不能为空', trigger: 'blur', trip: true }],
                password: [{ required: true, message: '密码不能为空', trigger: 'blur', trip: true }],//失去焦点时验证
                role: [{ required: true, message: '请填入身份', trigger: 'change' }]//change用于下拉框复选框之类，值更改时验证
            },
            loading: false,
            dialog: false,
            checked: false,

        }
    },
    methods: {
        async login() {
            
            try {
                localStorage.clear()
                if (!this.checked) {//确认勾选用户协议
                    ElNotification({
                        title: '错误',
                        message: '请同意用户协议',
                        type: 'warning',
                    })
                } else {// 登录逻辑
                    const response = await this.$axios.post('public/login', this.loginForm)
                    const token = response.data
                    if (token) {//token非空即为登录成功
                        //存储登录角色信息
                        localStorage.setItem('token',token)
                        const dtoken = jwtDecode(token,{ secret: 'DSYTS' })
                        const { user_id, role, exp, username} = dtoken
                        localStorage.setItem('user_id',user_id)
                        localStorage.setItem('role',role)
                        localStorage.setItem('exp',exp)
                        localStorage.setItem('username',username)
                        
                        // 根据角色信息跳转到对应页面
                        switch (role) {
                            case 'admin':
                                window.location.href = '/admin';
                                break;
                            case 'student':
                                window.location.href = '/student';
                                break;
                            case 'teacher':
                                window.location.href = '/teacher';
                                break;
                            default:
                                // 如果角色不匹配,可以跳转到登录页面或其他默认页面
                                window.location.href = '/login';
                        }
                        
                    } else {
                        if (response.meg = "用户名不存在"){
                            ElNotification({
                            title: '错误',
                            message: '用户名不存在',
                            type: 'error',
                        })
                        }else if(response.meg = "密码错误"){
                            ElNotification({
                            title: '错误',
                            message: '密码错误',
                            type: 'error',
                        })
                        }else{
                            ElNotification({
                            title: '错误',
                            message: '用户名不存在或密码错误',
                            type: 'error',
                        })
                        }
                    }

                }
            } catch (error) {
                console.log(error)
            }
        },
        showUserAgreement() {//点击协议打开弹窗
            this.dialog = true
        },
        register() {
            window.location.href = '/register'
        },
        check() {
            this.checked = !this.checked
        },
    },
}
</script>

<style>
html {
    height: 100%;
    margin: 0;
    padding: 0;
}

body {
    height: 100%;
    margin: 0;
    padding: 0;
    background-image: url('/background.jpg');
    background-size: 100% 100%;
    background-attachment: fixed;
}

.box {
    height: 100%;
    width: 100%;
}

.button {
    margin-left: 30%;
    width: 100px;
}

.login-form {
    position: relative;
    width: 450px;
    background-color: transparent;
    /* 使登录表单背景透明 */
}

.el-input__inner {
    background-color: rgba(255, 255, 255, 0.5);
    /* 使输入框背景半透明 */
}

.el-select .el-input__inner {
    background-color: rgba(255, 255, 255, 0.5);
    /* 使选择框背景半透明 */
}

.el-card {
    margin-left: 35%;
    width: 500px;
    background: rgba(255, 255, 255, 0.5);
}
</style>