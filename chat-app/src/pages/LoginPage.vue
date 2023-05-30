<template>
    <div class="login h-screen flex flex-col justify-center text-black">

        <div class=" h-3/4">
            <div class="text-center">
                <h2 class="text-black text-center text-xl font-bold p-2">Sign in</h2>
                <p class="text-gray text-sm ">Sign in to continue to ChatThrough.</p>
            </div>
            <div class="">
                <LoginComp />
            </div>
            <div class="text-center">
                <div class="flex text-center justify-center mb-3">
                    <span>
                        <p>Don't have an account ?</p>
                    </span>
                    <span class="text-purple before:p-1">
                        <a href="#"> Signup now</a>
                    </span>
                </div>

                <p> 2023 ChatThrough. Made with ❤️ by FavourOyewumi </p>
            </div>
        </div>
    </div>
</template>

<script>
import LoginComp from '@/components/LoginComp.vue'

export default {
    name:'LoginPage',
    components:{
        LoginComp
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Public+Sans&display=swap');
.login{
    font-family: 'Public Sans', sans-serif;
    background-color: rgba(230,235,245,.25);
    
}

</style>