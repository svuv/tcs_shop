<template>
  <!-- 面包屑导航区 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item v-for="item in data" :key="item">{{item}}</el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script>
export default {
    props:['data'],
    data(){
        return{
            
        }
    }
}
</script>

<style>

</style>