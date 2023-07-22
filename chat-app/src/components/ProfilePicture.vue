<template>
  <div>
    <div class="bg-backg">
      <div class="flex justify-center bg-backg">
        <div class="m-5 rounded-full w-20 h-20 a">
         
            <img :src="this.links" alt="image" />
          
          <h1 class="font-2xl text-blue"> {{this.profileName}}</h1>
        </div>
      </div>
    </div>
    <h3>{{ profileName }}</h3>
  </div>
</template>

<script>
export default {
  name: "ProfilePicture",
  props: {
    imgLink: String,
   
    profileName:{
      type: String,
      required:true
  },
  data(){
    return{
      value:'',
      links:''
    }
  },
  computed:{

    haslink(){
    if (this.imgLink !== null){
      this.links = this.imgLink
     
    }
    else{
      this.links = 'profile-image.jpg'
    }
    return {
      icon: require('@/assets/images/'+ this.imgLink)  }
  }
}}};
</script>

<style>
</style>