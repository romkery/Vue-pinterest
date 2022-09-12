<template>
  <div class="main__layout">
    <div
      v-if="getIsLoading"
      class="main__loading"
    >
      <div class="main__loading-block">
        <div class="main__loading-img" />
        <P>Подождите, загружается...</P>
      </div>
    </div>
    <div
      v-for="(item, itIndex) in getLayoutElements"
      :key="itIndex.substr(-1, 1)"
      class="main__line"
    >
      <div
        v-for="(el, elIndex) in item"
        :key="elIndex"
        class="main__item"
        :style="{maxWidth: el.w + 'px', height: el.h + 'px', marginBottom: defineMb(elIndex, item, el)}"
      >
        <img
          :key="elIndex"
          :src="el.pictureSrc"
          alt="pict"
          @click="showPopUp"
        >
        <div class="main__stats">
          <h5>
            {{ getRandomName() }}
          </h5>
          <img
            :src="getRandomBool()"
            alt="heartSvg"
            @click="like"
          >
        </div>
        <div class="main__author">
          <img
            :src="el.avatarSrc"
            alt="Avatar"
            @click="showPopUp"
          >
          <p>{{ getRandomUserName() }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">

import Vue from 'vue';
import {mapActions, mapGetters, mapState} from 'vuex';

export default Vue.extend({
  name: 'Layout',

  computed: {
    ...mapState('MainModule', ['isPopUpLayout', 'popSrc']),
    ...mapGetters('MainModule', ['getLayoutElements', 'getPictureNames',
      'getUsernames', 'getIsLiked', 'getIsLoading']),
  },

  mounted() {
    this.GetLayout();
  },

  methods: {
    ...mapActions('MainModule', ['GetLayout', 'setLiked', 'setPopUp']),
    getRandomName() {
      const random = Math.trunc(Math.random() * 10);
      return this.getPictureNames[random];
    },
    getRandomUserName() {
      const random = Math.trunc(Math.random() * 19);
      return this.getUsernames[random];
    },
    getRandomBool() {
      if (Math.floor(Math.random() * 2) === 1) {
        return require('./../../assets/img/liked.svg');
      } else {
        return require('./../../assets/img/heart.svg');
      }
      // return (Math.floor(Math.random() * 2) === 1) ? './../../assets/img/liked.svg' : './../../assets/img/heart.svg';
    },
    showPopUp() {
      let target = event.target;
      document.querySelector('body').style.overflow = 'hidden';
      this.setPopUp({isPopUp: true, popSrc: target.src});
    },
    like() {
      let target = event.target;
      if (RegExp('\\b' + 'liked' + '\\b').test(target.src)) {
        return target.src = require('./../../assets/img/heart.svg');
      } else {
        return target.src = require('./../../assets/img/liked.svg');
      }
    },
    defineMb(elIndex, item, el) {
      if (elIndex !== item.length - 1) {
        return el.mb + 'px';
      } else {
        return '80px';
      }
    }
  }
});


</script>

<style scoped lang="less">

.main {

  &__layout {
    display: flex;
    justify-content: center;
    margin-top: 10px;
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

body.modal-open {
  overflow-y: hidden;
}

</style>
