<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <HeaderUI />
            </el-header>


            <el-container class="main">
                <div id="app">
                    <div class="card">
                        <el-card>
                            <h3>TX医院新闻</h3>
                            <el-divider></el-divider>
                            <div v-for="news in newsList" :key="news.id" style="margin-bottom: 10px;">
                                <el-link type="primary" @click="openDialog(news)">
                                    {{ news.title }}
                                </el-link>
                            </div>
                        </el-card>
                    </div>
                    <el-dialog v-model="dialogVisible" title="新闻详情" width="50%">
                        <p>{{ selectedNews.content }}</p>
                        <span slot="footer" class="dialog-footer">
                            <el-button @click="dialogVisible = false">关闭</el-button>
                        </span>
                    </el-dialog>
                </div>
                <div class="button">
                    <el-button type="success" size="large" @click="login">点击登录</el-button>
                </div>
                
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
        },
        login(){
            window.location.href = '/login'
        },
        mainview(){
            window.location.href = '/main'
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
        HeaderUI,
        FooterUI,
    }
}


</script>

<style>
.card{
    padding-top: 200px;
    padding-left: 600px;
    
}


.el-card {
    background-color: rgba(255, 255, 255, 0.9);
    width: 600px;
    height: 300px;
    text-align: left;
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
    
}

.main{
    flex-direction: column;
}

.el-link {
    font-size: 20px;
    cursor: pointer;
}

.el-dialog {
    border-radius: 8px;
}

.dialog-footer {
    text-align: right;
}



.button{
    padding-top: 50px;
    padding-left: 850px;
    
    
}

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