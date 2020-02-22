<template>
  <div class="invitationContainer">
      <div class="cardInfo">
          <span class="topic">社畜的一天</span>
          <span class="author">作者|孤独自学<span class="date">2019/12/22</span></span>
      </div>
      <div class="imgBox">
          <img src="../../assets/1.jpg" width="100%" alt=""> 
      </div>
     
  </div>
</template>

<script>
export default {

}
</script>

<style>
.invitationContainer{
    display: flex;
    flex-direction: column;
    width: 560px;
    height: 304px;
    background-color: #ffffff;
    padding: 8px;
    box-sizing: border-box;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    margin-bottom: 10px;
    border-radius: 5px;
}
.imgBox{
    overflow: hidden;
    
}
.cardInfo{
    display: flex;
    height:  48px;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 10px;
    padding-bottom: 5px;
}
.topic{
    font-size: 15px;
    font-weight: 550;
}
.author{
    margin-top: 6px;
    color: #999;
    font-size: 12px;
}
.date{
    margin-left: 5px;
}
</style>