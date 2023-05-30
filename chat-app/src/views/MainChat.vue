<template>
  <div class="h-screen flex flex-row">
    <SideBar />
    <router-view></router-view>
    <TextPage />
  </div>
</template>

<script>
import SideBar from '@/components/SideBar.vue';
import TextPage from '@/pages/TextPage.vue';
export default {
    name:'MainChat',
    components:{
        SideBar,
        TextPage
    }
}
</script>

<style>
*{
    font-family: 'Public Sans', sans-serif;
    background-color: rgba(230,235,245,.25);
    
}
</style>