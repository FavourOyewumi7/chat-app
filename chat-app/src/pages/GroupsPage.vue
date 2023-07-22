<template>
  <div class="p-8 w-1/3 shadow-inner groups">
    <h3 class="text-xl font-bold text-black bg-backg my-3">
      Groups
    </h3>

    <SearchComp />

    <div>
      <ProfilePicture v-for="group in groups" :imgLink="group.link" :profileName="group.name" :key="group.id" />
    </div>
  </div>
</template>

<script>
import SearchComp from '@/components/Search.vue';
import ProfilePicture from '@/components/ProfilePicture.vue';
export default {
    name: 'GroupsPage',
    components:{
      SearchComp,
      ProfilePicture
    },
    data(){
      return{
        groups:[
          {
            id:1,
            name: 'General',
            link: null
          },
          {
            id:2,
            name: 'Reporting',
            link: null
          },
          {
            id:3,
            name: 'Designers',
            link: null
          },
          {
            id:4,
            name: 'Developers',
            link: null
          },
          {
            id:5,
            name: 'Snacks',
            link: 'profile-image.jpg'
          },
      ]
      }
    }
}
</script>

<style>
.groups{
  background-color: #f7f7ff;
}

</style>