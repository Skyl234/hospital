<template>
    <div id="app">
        <el-select v-model="selectedDepartment" placeholder="选择科室分类" style="width: 200px; margin-bottom: 20px;">
            <el-option v-for="category in categories" :key="category" :label="category" :value="category"></el-option>
        </el-select>

        <div v-if="selectedDepartment">
            <div v-for="dept in filteredDepartments" :key="dept.name" class="department-list">
                <img :src="dept.image" alt="科室图片" class="department-image">
                <div class="department-info">
                    <el-link type="primary" @click="openDialog(dept)">{{ dept.name }}</el-link>
                    <p>{{ dept.shortDescription }}</p>
                </div>
            </div>
        </div>

        <el-dialog v-model="dialogVisible" :title="selectedDept.name" width="50%">
            <img :src="selectedDept.image" alt="科室图片" style="width: 100%; margin-bottom: 20px;">
            <p>{{ selectedDept.fullDescription }}</p>
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
            selectedDepartment: '',
            dialogVisible: false,
            selectedDept: {},
            categories: ['内科', '外科', '医技科'],
            departments: [
                { category: '内科', name: '血液内科',
                 image: '/public/Department/血液内科.png', shortDescription: '心血管内科简介...', fullDescription: '详细信息...' },
                 { category: '内科', name: '消化内科',
                 image: 'image1.jpg', shortDescription: '心血管内科简介...', fullDescription: '详细信息...' },
                { category: '外科', name: '普外科', image: 'image2.jpg', shortDescription: '普外科简介...', fullDescription: '详细信息...' },
                { category: '医技科', name: '放射科', image: 'image3.jpg', shortDescription: '放射科简介...', fullDescription: '详细信息...' }
                
            ]
        }
    },
    methods: {
        openDialog(dept) {
            this.selectedDept = dept;
            this.dialogVisible = true;
        }
    },
    computed: {
        filteredDepartments() {
            return this.departments.filter(dept => dept.category === this.selectedDepartment);
        }
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
.department-list {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

.department-image {
    width: 80px;
    height: 80px;
    margin-right: 20px;
}

.department-info {
    flex-grow: 1;
}
</style>