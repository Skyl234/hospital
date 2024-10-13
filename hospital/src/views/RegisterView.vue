<template>
    <div class="box">
        <div style="display: flex;">
            <clock />
            <h3 style="text-align: center; padding-left: 600px;color: aliceblue;">注册页</h3>
        </div>
        <el-card class="card">
            <template #header>
                <div class="card-header">
                    <span>用户注册</span>
                </div>
            </template>
            <div class="login-form">
                <el-form ref="registerForm" :model="registerForm" :rules="registerRules" label-width="80px"
                    size="large">
                    <el-form-item label="用户名" prop="username">
                        <el-input v-model="registerForm.username" placeholder="请输入你的用户名"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input v-model="registerForm.password" type="password" placeholder="请输入密码"></el-input>
                    </el-form-item>
                    <el-form-item label="我是" prop="role">
                        <el-select v-model="registerForm.role" placeholder="选择你的角色">
                            <el-option label="管理员" value="admin"></el-option>
                            <el-option label="学生" value="student"></el-option>
                            <el-option label="老师" value="teacher"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="密钥" prop="key"
                        v-if="this.registerForm.role === 'teacher' || this.registerForm.role === 'admin'">
                        <el-input v-model="registerForm.key" type="password" placeholder="请输入密钥"></el-input>
                    </el-form-item>
                    <el-form-item label="学号" prop="stu_id" v-if="this.registerForm.role === 'student'">
                        <el-input v-model="registerForm.stu_id" type="password" placeholder="请输入学号"></el-input>
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
                            <el-button type="success" @click="register" :loading="loading" class="button">注册</el-button>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="login" :loading="loading" class="button">返回登陆</el-button>
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
export default {
    components: {
        clock,
    },
    data() {
        return {
            registerForm: {
                username: '',
                password: '',
                role: '',
                key: '',//管理员，老师注册所需密钥
                stu_id: '',//学号，学生注册所需

            },
            registerRules: {
                username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
                password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
                role: [{ required: true, message: '请填入身份', trigger: 'change' }],
                key: [{ required: true, message: '请输入注册密钥', trigger: 'blur' }],
                stu_id: [{ required: true, message: '请输入学号', trigger: 'blur' }],
            },
            loading: false,
            checked: false,
            dialog: false,
        }
    },
    methods: {
        async register() {
            // 注册逻辑
            try {
                if (!this.checked) {//确认勾选用户协议
                    ElNotification({
                        title: '错误',
                        message: '请同意用户协议',
                        type: 'warning',
                    })
                    return
                } else {
                    if (!this.registerForm.role || (!this.registerForm.key && !this.registerForm.stu_id)) {
                        ElNotification({
                            title: '错误',
                            message: '请填写完整注册信息',
                            type: 'error',
                        })
                        return
                    }
                    const response = await this.$axios.post('public/register', {
                        registerData: {
                            user: this.registerForm.username,
                            pwd: this.registerForm.password,
                            role: this.registerForm.role,
                        },
                        key: this.registerForm.key,
                        stu_id: this.registerForm.stu_id,
                    })
                    if (response.data.meg === '用户名重复') {
                        ElNotification({
                            title: '错误',
                            message: '用户名重复',
                            type: 'error',
                        })
                        return
                    } else if (response.data.meg === '密钥错误') {
                        ElNotification({
                            title: '错误',
                            message: '密钥错误',
                            type: 'error',
                        })
                        return
                    } else if (response.data.meg === '学号不合法！') {
                        ElNotification({
                            title: '错误',
                            message: '学号不合法！',
                            type: 'error',
                        })
                        return
                    }
                    else {
                        console.log('zzz')
                        //注册成功
                        ElNotification({
                            title: '欢迎',
                            message: '成功注册，欢迎用户' + this.registerForm.username+",  两秒后跳转到登录页",
                            type: 'success',
                            duration: 3000,
                        })
                        setTimeout(() => {
                            window.location.href = '/login';
                        }, 2000);
                        
                        return
                    }
                }
            } catch (error) {
                console.log(error)
                ElNotification({
                    title: '错误',
                    message: error + 'axios错误',
                    type: 'error',
                })
            }
        },
        showUserAgreement() {//点击协议打开弹窗
            this.dialog = true
        },
        check() {
            this.checked = !this.checked
        },
        login() {
            window.location.href = '/login'
        }
    }
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
    background-image: url('./public/login.jpg');
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