<template>
  <div class="main__layout">
    <div v-if="getIsLoading" class="main__loading">
      <div class="main__loading-block">
        <div class="main__loading-img"></div>
        <P>Подождите, загружается...</P>
      </div>
    </div>
    <div
      v-for="(item, itIndex) in getLayoutElements"
      :key="itIndex.substr(-1, 1)"
      class="main__line">
      <div
        v-for="(el,elIndex) in item"
        :key="elIndex"
        class="main__item"
        :style="{maxWidth: el.w + 'px',height: el.h + 'px',marginBottom: el.mb + 'px'}">
        <img
          :key="elIndex"
          :src="el.pictureSrc"
          alt="pict"
          @click="showPopUp">
        <div class="main__stats">
          <h5>
            {{ getRandomName() }}
          </h5>
          <img :src="getRandomBool() ? likedSvg : likeSvg" alt="heartSvg" @click="like">
        </div>
        <div class="main__author">
          <img :src="el.avatarSrc" alt="Avatar" @click="showPopUp">
          <p>{{ getRandomUserName() }}</p>
        </div>
      </div>
    </div>
    <div v-if="isPopUp" class="main__pop-up" @click="hidePopUp">
      <div class="main__pop-up-block">
        <img :src="popSrc" alt="ss" @click="setLiked">
        <button @click="hidePopUp"/>
      </div>
    </div>
  </div>
</template>

<script lang="js">

import ElementUi from 'element-ui';
import {mapActions, mapGetters} from 'vuex';
import Vue from 'vue';

Vue.use(ElementUi);

export default Vue.extend({
  name: 'ImgMassive',
  components: {},

  data() {
    return {
      isPopUp: false,
      popSrc: '',
      likeSvg: require('../../assets/img/heart.svg'),
      likedSvg: require('../../assets/img/liked.svg'),
    };
  },

  computed: {
    ...mapGetters(['getLayoutElements', 'getPictureNames',
      'getUsernames', 'getIsLiked', 'getIsLoading']),
  },

  mounted() {
    this.GetLayout();
  },

  methods: {
    ...mapActions(['GetLayout', 'setLiked']),
    getRandomName() {
      const random = Math.trunc(Math.random() * 10);
      return this.getPictureNames[random];
    },
    getRandomUserName() {
      const random = Math.trunc(Math.random() * 19);
      return this.getUsernames[random];
    },
    getRandomBool() {
      return Math.floor(Math.random() * 2) === 1;
    },
    showPopUp(event) {
      let target = event.target;
      this.isPopUp = true;
      document.querySelector('body').style.overflow = 'hidden';
      return this.popSrc = target.src;
    },
    hidePopUp() {
      this.isPopUp = false;
      document.querySelector('body').style.overflow = 'auto';
    },
    like() {
      let target = event.target;
      if(RegExp('\\b'+ 'liked' +'\\b').test(target.src)) {
       return target.src = require('../../assets/img/heart.svg');
      }
      else  {
        return target.src = require('../../assets/img/liked.svg');
      }
    },
  }
});


</script>

<style scoped lang="less">

.main {

  &__layout {
    display: flex;
    justify-content: center;
    margin-top: 10px;
    //margin: 0 100px;
  }

  &__line {
    display: flex;
    flex-direction: column;
    height: 5000px;
  }

  &__item {
    margin: 5px 5px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 16px;
      cursor: pointer;
    }
  }

  &__stats {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h5 {
      margin: 8px 10px 0 10px;
    }

    img {
      width: 20px;
      height: 20px;
      margin-right: 4px;
    }
  }


  &__author {
    display: inline-flex;
    margin: 8px 10px 0 10px;
    align-items: center;

    img {
      width: 34px;
      height: 34px;
      border-radius: 20px;
    }

    p {
      margin: 0 0 0 8px;
    }
  }

  &__pop-up {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, .7);

    &-block {
      display: flex;

      img {
        max-width: 1000px;
        max-height: 800px;
        border-radius: 16px;
      }

      button {
        margin-left: -32px;
        width: 30px;
        height: 30px;
        background: url("./../../assets/img/cancel.svg");
        border: none;
        opacity: 0.5;
        cursor: pointer;
      }

      button:hover {
        opacity: 1;
      }
    }

  }
  &__loading {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, .9);

    &-block {
      display: flex;
      align-items: center;

      p {
        color: white;
        margin-left: 10px;
      }
    }

    &-img {
      background: url("./../../assets/img/preloader.png");
      width: 90px;
      height: 90px;
      background-size: cover;
    }

  }


}

</style>
