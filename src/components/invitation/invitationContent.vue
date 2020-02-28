<template>
  <div class="contentContainer">
    <div>Fate简介</div>
    <author></author>
    <main-content></main-content>
  </div>
</template>

<script>
import author from "@/components/invitation/author";
import mainContent from "@/components/invitation/content"
export default {
  components: {
    author,
    mainContent
  }
};
</script>

<style scoped>
.contentContainer {
  
  margin-top: 24px;
  
}
</style>