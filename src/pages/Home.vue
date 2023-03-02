<template>
  <NavigationBar />
  <section>
    <div class="container mx-auto">
      <div class="flex flex-col items-center justify-center pt-16 pb-8">
        <h1 class="text-5xl font-bold leading-tight">
          Connecting People,<br />
          Transforming Lives
        </h1>
        <div
          style="width: max-content"
          class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mt-6 mb-2"
        >
          Coming Soon
        </div>
      </div>
    </div>
    <img class="mx-auto mb-8" src="../assets/app.png" alt="werk" />
  </section>
  <section class="mx-auto" style="max-width: 1000px">
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <FeaturesCard />
    </div>
  </section>
  <section class="mx-auto" style="max-width: 800px">
    <div class="container mx-auto py-16">
      <h2 class="text-2xl font-semibold text-center mb-8">
        Frequently Asked Questions
      </h2>
      <Faq />
    </div>
  </section>
  <Footer />
</template>

<script>
import NavigationBar from "../components/Navigation.vue";
import FeaturesCard from "../components/Card.vue";
import Faq from "../components/Faq.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "werk",
  components: { NavigationBar, FeaturesCard, Faq, Footer },
  data() {
    return {};
  },
  created() {
    document.title = "Werk | Connecting People, Transforming Lives";
  },
};
</script>
