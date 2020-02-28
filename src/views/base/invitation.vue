<template>
  <div class="invitationViewContainer">
      <div class="invitationBg">
        <nav-topic :topics="['基地','推荐','帖子']"></nav-topic>
        <invitation-content></invitation-content>
      </div>
      <div>
          作者信息
      </div>
  </div>
</template>

<script>
import navTopic from '@/components/topicNav'
import invitationContent from '@/components/invitation/invitationContent'
export default {
    components:{
        navTopic,
        invitationContent
    }
}
</script>

<style scoped>
.invitationViewContainer{
    width: 800px;
    margin: 0 auto;
    margin-top: 20px;
    display: flex;
}
.invitationBg{
    max-width: 560px;
    padding: 16px;
    background-color: #ffffff;
}
</style>