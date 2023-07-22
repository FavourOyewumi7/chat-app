<template>
  <div
    class="border border-border flex flex-col justify-center rounded-lg bg-backg  px-2 py-2"
    
  >
    <div class="flex flex-row overflow-auto justify-between bg-backg">
      <h4 class="text-lg font-medium">{{ title }}</h4>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#7a7f9a"
          @click="show()"
          class="w-6 h-6 cursor-pointer"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
    </div>
    <div
      class="py-5 flex flex-row justify-center text-sm text-light text-left"
      v-if="showContent"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileAccordion",
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
.icon {
  transform: rotate(90deg);
  stroke: white;
  border-radius: 50%;
  padding: 3px;
}



</style>