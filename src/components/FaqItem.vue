<template>
  <div class="flex flex-row justify-between">
    <h2 class="text-lg font-semibold mb-2">{{ faq.title }}</h2>
    <button v-if="!showContent" type="button" @click="showItemContent">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>
    </button>

    <button v-if="showContent" type="button" @click="showItemContent">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4.5 15.75l7.5-7.5 7.5 7.5"
        />
      </svg>
    </button>
  </div>
  <div v-if="showContent" class="text-gray-500" v-html="faq.content"></div>
</template>

<script>
export default {
  props: ["faq"],
  data() {
    return {
      showContent: false,
    };
  },
  methods: {
    showItemContent() {
      this.showContent = !this.showContent;
    },
  },
};
</script>
