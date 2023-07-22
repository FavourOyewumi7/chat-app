<template>
    <div class=" w-full flex flex-row justify-center p-3 mt-3 mb-5 text-black">  
            <div class="bg-white p-8 rounded w-1/3">
                <form action="" class="bg-white">
                    <div class="py-3 bg-white">
                        <label for="" class="pb-2 bg-white">Email</label>
                        <div class="flex flex-row w-full pt-1">
                            <div class="p-4 border border-light input rounded-l-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                            </div>
                            <input type="text" class="border border-light w-full input pl-3 rounded-r-lg" placeholder="favouroyewumi@gmail.com">
                        </div>
                    </div>

                    <div class="py-3 bg-white">
                        <div class="flex flex-row justify-between bg-white">
                            <span>
                                <label for="" class="pb-2 bg-white">Password</label>
                            </span>
                            <span class="text-sm text-gray pb-2">
                                Forgot your password?
                            </span>
                        </div>
                        <div class="flex flex-row ">
                            <div class="p-4  border border-light input rounded-l-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                                </svg>
                            </div>
                            <input type="password" name="" id="" class="border border-light input w-full pl-3 rounded-r-lg" placeholder="*****">
                        </div>
                    </div>
                    <router-link to="/chats">
                        <button class="bg-blue text-white w-full rounded-lg py-3 my-3">
                            Sign In
                        </button>
                    </router-link>
                </form>
            </div>
    </div>
</template>

<script>
export default {
    name:'LoginComp'
}
</script>

<style>
.input{
    background-color: rgba(230,235,245,.25);
}

</style>