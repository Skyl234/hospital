<template>
    <div id="app">
        <el-card>
            <h3>最近新闻</h3>
            <el-divider></el-divider>
            <div v-for="news in newsList" :key="news.id" style="margin-bottom: 10px;">
                <el-link type="primary" @click="openDialog(news)">
                    {{ news.title }}
                </el-link>
            </div>
        </el-card>

        <el-dialog :visible.sync="dialogVisible" title="新闻详情" width="50%">
            <p>{{ selectedNews.content }}</p>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">关闭</el-button>
            </span>
        </el-dialog>
    </div>

</template>

<script>
export default {
    data() {
        return {
            dialogVisible: false,
            selectedNews: {},
            newsList: [
                { id: 1, title: '新闻一', content: '这是新闻一的详细内容...' },
                { id: 2, title: '新闻二', content: '这是新闻二的详细内容...' },
                { id: 3, title: '新闻三', content: '这是新闻三的详细内容...' },
            ]
        }
    },
    methods: {
        openDialog(news) {
            this.selectedNews = news;
            this.dialogVisible = true;
        }
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