<template>
  <NavigationBar />
  <iframe
    style="width: 100%; height: 100vh; display: flex; justify-content: center"
    src="https://docs.google.com/document/d/e/2PACX-1vR8yxxYQiDnonAPCmhS5CCtzAd64VL3AqA3nbgVB-CLjm0dJ3C3JTVnnPlBWVsUkQ/pub?embedded=true"
  ></iframe>
  <Footer />
</template>

<script>
import NavigationBar from "../components/Navigation.vue";
import Footer from "../components/Footer.vue";
import PrivacyPolicyData from "../data/privacyPolicy.json";

export default {
  components: { NavigationBar, Footer },
  data() {
    return {
      htmlContent: PrivacyPolicyData.content,
    };
  },
  created() {
    document.title = "Privacy Policy | Werk";
  },
};
</script>
