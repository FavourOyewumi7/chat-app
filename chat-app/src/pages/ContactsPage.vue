<template>
  <div class="p-8 w-1/3 shadow-inner groups">
    <h3 class="text-xl font-bold text-black bg-backg my-3">
      Contacts
    </h3>
    <Search />
  </div>
</template>

<script>
import Search from '@/components/Search.vue'
export default {
  components: { Search },
    name:'ContactsPage',
    
}
</script>

<style>
.groups{
  background-color: #f7f7ff;
}
</style>