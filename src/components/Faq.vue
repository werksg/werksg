<template>
  <div class="border-b border-gray-200 p-4" v-for="faq in faqs" :key="faq.id">
    <FaqItem :faq="faq" />
  </div>
</template>

<script>
import FaqItem from "./FaqItem.vue";

import FAQsJson from "../data/faq.json";

export default {
  components: { FaqItem },
  data() {
    return {
      faqs: FAQsJson,
      showContent: false,
    };
  },
};
</script>
