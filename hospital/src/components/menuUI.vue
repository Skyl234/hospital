<template>
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
        <el-container>
            <el-main>Main</el-main>
        </el-container>
    </el-container>
</template>

<script>
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

    }
}


</script>

<style>
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