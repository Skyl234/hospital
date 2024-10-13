<template>


    <div class="common-layout">
        <el-container>
            <el-header >
                <headerUI />
            </el-header>
            <el-container>
                <el-aside width="200px">Aside</el-aside>
                <el-container>
                    <el-main>Main</el-main>
                </el-container>
            </el-container>
            <el-footer class="footerUI">
                <footerUI />
            </el-footer>
        </el-container>
    </div>


</template>

<script>
import headerUI from '@/components/headerUI.vue'
import footerUI from '@/components/footerUI.vue'
export default {
    data() {
        return {

        }
    },
    components: {
        headerUI,
        footerUI,
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