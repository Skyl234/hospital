<template>
    <div class="headerUI">
        <div class="left" @click="toMain">
            <img src="/public/logo.png" alt="Logo" class="logo" />
            <p class="title">TX医院智慧问诊系统</p>
        </div>
        <div class="right">
            <el-dropdown>
                <span class="el-dropdown-link">
                    <el-avatar :size="40" :src="avatarUrl" />
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item @click="toCenter" v-if="show">个人中心</el-dropdown-item>
                        <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
            <el-breadcrumb separator="/">
                <el-breadcrumb-item v-for="(item, index) in breadcrumbList" :key="index" :to="item.path">
                    {{ item.meta.title }}
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            avatarUrl: this.getAvatarUrl(),
            show: this.isStudent(),
        }
    },
    methods: {
        logout() {//登出
            localStorage.clear()
            window.location.href = '/login';
        },
        toMain() {//点击图标跳转到默认首页

            window.location.href = '/home'
        },
        getAvatarUrl() {//根据不同对象获取不同头像
            return '/public/patient.png'

        },
        toCenter() {//跳转个人中心
            window.location.href = '/center'
        },
        isStudent() {//是学生或者老师才会显示个人中心
            return true
        }
    },
    computed: {
        breadcrumbList() {//自动计算当前页面填入面包屑
            const routes = []
            let matched = this.$route.matched.filter(item => item.meta && item.meta.title)

            matched.forEach(item => {
                const breadcrumb = {
                    path: item.path,
                    meta: item.meta
                }
                routes.push(breadcrumb)
            })
            console.log(routes)
            return routes
        }
    },
    watch: {

    },
    created() {

    },
    mounted() {

    }
}


</script>

<style>
.headerUI {
    display: flex;
    align-items: center;
    background-color: #fff;
    padding: 0 0;
    height: 60px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    width: 100%;
}

.left {

    display: flex;
    align-items: center;
}

.left:hover {
    cursor: pointer;
}

.logo {
    height: 40px;
}

.title {
    padding-left: 20px;
    color: #409EFF;
    font-weight: bold;
    font-family: 'Times New Roman', Times, serif;
}

.title:hover {
    animation: animate 0.5s linear infinite;
}

/* 文字点击震荡 */
@keyframes animate {

    0%,
    25% {
        text-shadow: 2px 2px 2px #ff6384;
    }

    50% {
        text-shadow: 2px -2px 2px #ff6384;
    }

    75% {
        text-shadow: -2px 2px 2px #ff6384;
    }

    100% {
        text-shadow: -2px -2px 2px #ff6384;
    }
}

.right {
    display: flex;
    align-items: center;
    margin-left: 70%;
}

.el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
}

.el-breadcrumb {
    margin-left: 20px;
}
</style>