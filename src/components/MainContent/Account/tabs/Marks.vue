<template>
  <div class="marks">
    <img
      :src="this.userSvg"
      alt="userSvg"
    >
    <h1>Фото с вами</h1>
    <p>Здесь показываются люди, отметившие вас на фото.</p>
  </div>
</template>

<script lang="js">


import Vue from 'vue';


export default Vue.component('Marks', {

  components: {},

  data() {
    return {
      userSvg: require('@/assets/img/user.svg')
    };
  },
});

</script>

<style lang="less">
.marks {
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  img {
    max-width: 62px;
    max-height: 62px;
  }

  h1 {
    font-weight: 500;
    margin: 0;
  }

  p {
    max-width: 350px;
  }
}
</style>
