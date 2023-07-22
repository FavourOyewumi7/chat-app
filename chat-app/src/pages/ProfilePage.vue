<template>
  <div class="p-5 w-1/3 shadow-inner groups bg-backg">
    <div class="w-full flex flex-row justify-between bg-backg">
      <h3 class="text-xl font-bold text-black bg-backg my-3">My Profile</h3>

      <span class="bg-backg flex pt-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 bg-backg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
          />
        </svg>
      </span>
    </div>

    <div
      class="w-full flex-row justify-center bg-backg my-8 border-b border-border pb-4"
    >
      <div class="bg-backg">
        <div class="flex justify-center bg-backg">
          <div class="m-5 rounded-full w-20 h-20 a">
            <img
              src="../assets/images/profile-image.jpg"
              alt="Profile Picture"
              class="h-20 w-20 rounded-full"
            />
          </div>
        </div>

        <h2 class="text-center bg-backg">Favour Oyewumi</h2>
        <p class="text-center bg-backg">Active</p>
      </div>
    </div>

    <div>
      <p class="text-secondary my-8 bg-backg px-5">
        If several languages coalesce, the grammar of the resulting language is
        more simple and regular than that of the individual.
      </p>
    </div>

    
      <div
        class="border border-border flex flex-col justify-center rounded bg-backg px-5 py-3"
      >
        <div class="flex flex-row overflow-auto justify-between bg-backg">
          <div class="flex flex-row bg-backg">
            <div class="flex flex-col justify-center bg-backg text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5 bg-backg mx-3 stroke-black stroke-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>  
            </div>

            <h4 class="text-lg bg-backg text-black about font-bold">About</h4>
          </div>
          <div class="flex flex-col justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#7a7f9a"
              @click="show()"
              class="w-4 h-4 cursor-pointer bg-backg stroke-black stroke-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
        </div>
        <div
          class="py-5 px-5 justify-center text-sm text-light text-left bg-white "
          v-if="showContent"
        >
          <h2 class="bg-white text-gray font-lg">Name</h2>
          <p class="bg-white text-black font-xl">Patricia Smith</p>
          <br />
          <h2 class="bg-white text-gray font-lg">Email</h2>
          <p class="bg-white text-black font-xl">adc@123.com</p>
          <br />
          <h2 class="bg-white text-gray font-lg">Time</h2>
          <p class="bg-white text-black font-xl">11:40 AM</p>
          <br />
          <h2 class="bg-white text-gray font-lg">Location</h2>
          <p class="bg-white text-black font-xl">California, USA</p>
        </div>
      
 
   
  </div>
</template>

<script>
export default {
  name: "ProfilePage",
  props: {
    title: String,
  },
  data() {
    return {
      showContent: false,
    };
  },
  methods: {
    show() {
      this.showContent = !this.showContent;
      let icon = this.$el.querySelector("#icon").classList;
      icon.toggle("icon");
    },
  },
};
</script>

<style>
.groups {
  background-color: #f7f7ff;
}
.icon {
  transform: rotate(90deg);
  background-color: #f7f7ff;
}

</style>