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
      :id="'main__line--' + itIndex.substr(-1, 1)"
      :key="itIndex.substr(-1, 1)"
      class="main__line"
    >
      <div
        v-for="(el, elIndex) in item"
        :key="elIndex"
        class="main__item"
        :style="{maxWidth: (el.w / 16) + 'rem', height: (el.h / 16) + 'rem', marginBottom: defineMb(elIndex, item, el)}"
      >
        <img
          :key="elIndex"
          loading="lazy"
          :src="el.pictureSrc"
          alt="pict"
          @click="showPopUp"
        >
        <div class="main__stats">
          <h5>
            {{ getRandomName() }}
          </h5>
          <img
            loading="lazy"
            :src="getRandomBool()"
            alt="heartSvg"
            @click="like"
          >
        </div>
        <div class="main__author">
          <img
            loading="lazy"
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
        return el.mb / 16 + 'rem';
      } else {
        return '5rem';
      }
    }
  }
});


</script>

<style scoped lang="scss">
@use "../../scss/util/functions" as f;

.main {

  &__layout {
    display: flex;
    justify-content: center;
    gap: f.rem(10);
    margin: f.rem(10) f.rem(10);
  }


  &__line {
    display: flex;
    flex-direction: column;
    height: f.rem(5000);
    justify-content: space-between;
    align-items: center;
  }

  &__item {
    width: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: f.rem(16);
      cursor: pointer;
    }
  }

  &__stats {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h5 {
      margin: f.rem(8) f.rem(10) 0 f.rem(10);
    }

    img {
      width: f.rem(20);
      height: f.rem(20);
      margin-right: f.rem(4);
    }
  }


  &__author {
    display: inline-flex;
    margin: f.rem(8) f.rem(10) 0 f.rem(10);
    align-items: center;

    img {
      width: f.rem(34);
      height: f.rem(34);
      border-radius: f.rem(20);
    }

    p {
      margin-right: f.rem(8);
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
        margin-left: f.rem(10);
      }
    }

    &-img {
      background: url("./../../assets/img/preloader.png");
      width: f.rem(90);
      height: f.rem(90);
      background-size: cover;
    }

  }
}

body.modal-open {
  overflow-y: hidden;
}

</style>
