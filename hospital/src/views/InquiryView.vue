<template>
    <div id="app">
        <div id="chat-container">
            <div id="chat-messages">
                <el-scrollbar height="700px">
                    <div v-for="message in messages" :key="message.id" :class="['message', message.type]">
                        {{ message.text }}
                    </div>
                </el-scrollbar>
            </div>
            <div id="chat-input">
                <el-input type="textarea" v-model="userInput" placeholder="输入您的问题..." @keyup.enter.native="sendMessage"
                    rows="2">
                </el-input>
                <el-button type="primary" @click="sendMessage">发送</el-button>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    data() {
        return {
            userInput: '',
            messages: [
                { id: 1, text: '欢迎使用问诊服务，请问有什么可以帮助您的？', type: 'bot-message' }
            ],
            nextId: 2
        };

    },
    methods: {
        sendMessage() {
            if (this.userInput.trim() === '') return;

            this.messages.push({
                id: this.nextId++,
                text: this.userInput,
                type: 'user-message'
            });

            this.userInput = '';

            // 模拟机器人回复
            setTimeout(() => {
                this.messages.push({
                    id: this.nextId++,
                    text: '感谢您的提问，我们会尽快回复。',
                    type: 'bot-message'
                });
            }, 1000);
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
#chat-container {
    width: 100%;
    height: 100%;
    border: 1px solid #ccc;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

#chat-messages {
    flex-grow: 1;
    padding: 10px;
    overflow-y: auto;
    background-color: #f9f9f9;
}

.message {
    margin-bottom: 10px;
    padding: 8px;
    border-radius: 4px;
    max-width: 70%;
}

.user-message {
    background-color: #b3e5fc;
    align-self: flex-end;
}

.bot-message {
    background-color: #e0e0e0;
    align-self: flex-start;
}

#chat-input {
    padding: 10px;
    border-top: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    align-items: center;

}

#chat-input textarea {
    flex-grow: 1;
    resize: none;
}

#chat-input el-input {
    flex: 1;
    margin-right: 10px;
}
</style>