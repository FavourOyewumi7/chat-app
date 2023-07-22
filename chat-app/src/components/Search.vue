<template>
  <div class="search mt-8">
    <form action="">
        <div class="flex rounded-xl">
            <div class="p-4  border border-light input rounded-l-xl bg-light h-12 flex flex-col justify-center">
                <button class="">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </button>
            </div>
            <input type="password" name="" id="" class="border border-light input w-full pl-3 rounded-r-xl bg-light" placeholder="Search...">
        </div>
    </form>
  </div>
</template>

<script>
export default {
    name:'SearchComp'
}
</script>

<style>
.search{
    background-color: #f7f7ff;
  }

</style>