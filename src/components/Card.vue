<template>
  <div
    class="bg-gray-50 rounded-xl p-4"
    v-for="feature in features"
    :key="feature.id"
  >
    <h2 class="text-lg font-semibold mb-2">{{ feature.title }}</h2>
    <p>{{ feature.content }}</p>
  </div>
</template>

<script>
import FeaturesDataJson from "../data/features.json";

export default {
  data() {
    return {
      features: FeaturesDataJson,
    };
  },
};
</script>
