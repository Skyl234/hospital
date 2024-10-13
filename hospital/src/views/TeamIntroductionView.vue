<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <HeaderUI />
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <el-menu @select="selected" style="width: 200px; height: 846px;" background-color="#545c64"
                        text-color="#fff" active-text-color="#ffd04b">
                        <el-menu-item index="1">
                            <el-icon>
                                <Collection />
                            </el-icon>
                            <template #title>科室介绍</template>
                        </el-menu-item>
                        <el-menu-item index="2">
                            <el-icon>
                                <Edit />
                            </el-icon>
                            <template #title>开始问诊</template>
                        </el-menu-item>
                        <el-menu-item index="3">
                            <el-icon>
                                <Star />
                            </el-icon>
                            <template #title>我的病例</template>
                        </el-menu-item>
                        <el-menu-item index="4">
                            <el-icon>
                                <CircleCheck />
                            </el-icon>
                            <template #title>团队介绍</template>
                        </el-menu-item>
                        <el-menu-item index="5">
                            <el-icon>
                                <UserFilled />
                            </el-icon>
                            <template #title>个人中心</template>
                        </el-menu-item>
                    </el-menu>
                </el-aside>
                <el-container class="main">
                    <el-main>
                        <div class="container">
                            <div class="box">
                                <img src="/public/lyt.jpg" alt="Logo" class="logo" />
                                <div class="description">
                                    <h3>龙栐图</h3>
                                    <p>智能科学与技术专业大三本科生，拥有坚实的前端功底与丰富的项目开发经验，负责本项目的然间前端搭建与总体框架设计。</p>
                                </div>
                            </div>
                            <div class="box">
                                <img src="/public/zyy.jpg" alt="Logo" class="logo" />
                                <div class="description">
                                    <h3>朱彦旸</h3>
                                    <p>智能科学与技术专业大三本科生，拥有深度学习算法项目搭建经验，在计算机设计大赛，科研项目等负责设计搭建相关算法，负责本项目的后端接口设计与相关算法设计</p>
                                </div>
                            </div>
                            <div class="box">
                                <img src="/public/dhm.jpg" alt="Logo" class="logo" />
                                <div class="description">
                                    <h3>邓红牡</h3>
                                    <p>拥有丰富的实践经验，负责本项目的文档设计与需求调查。</p>
                                </div>
                            </div>
                        </div>
                    </el-main>
                </el-container>
            </el-container>
            <el-footer class="footerUI">
                <FooterUI />
            </el-footer>
        </el-container>
    </div>
</template>

<script>

import FooterUI from '@/components/footerUI.vue';
import HeaderUI from '@/components/headerUI.vue';
export default {
    data() {
        return {

        }
    },
    methods: {

    },
    computed: {

    },
    watch: {

    },
    created() {

    },
    mounted() {

    },
    components: {
        HeaderUI,
        FooterUI,
    }
}


</script>

<style>
.el-main {
    background-color: #f5f5f5;
}

.container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 50px;
    border-radius: 10px;

}

.box {
    background-color: white;
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    padding: 20px;
    text-align: center;
    width: 200px;
    height: 400px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
}

.box:hover {
    transform: translateY(-5px);
}

.box img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 15px;
}

.description h3 {
    margin: 10px 0 5px;
    color: #333;
}

.description p {
    color: #666;
}

.el-row {
    margin-bottom: 20px;
}

.el-row:last-child {
    margin-bottom: 0;
}

.el-col {
    border-radius: 4px;
}

.grid-content {
    border-radius: 4px;
    min-height: 36px;
}

.el-header {
    height: 100%;
    padding: 0;
    margin: 0;
    width: 100%;
}

.footerUI {
    background-color: #000;
    color: #fff;
    padding: 20px 0;

}

.common-layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}


.el-footer {
    flex-shrink: 0;

}
</style>