<template>
  <div class="main__layout">
    <div
      v-for="(item, itIndex) in getLayoutElements"
      :key="itIndex.substr(-1, 1)"
      class="main__line">
      <div
        @click="showPopUp"
        v-for="(el,elIndex) in item"
        :key="elIndex"
        class="main__item"
        :style="{maxWidth: (el.w * 120) + 'px',
                 height: (el.h * 50) + 'px',
                 marginBottom: el.mb + 'px'}">
        <img
          :key="elIndex"
          :src="el.pictureSrc"
          alt="pict">
        <h5 class="main__name">
          {{ getRandomName() }}
        </h5>
        <div class="main__author">
          <img :src="el.avatarSrc" alt="Avatar">
          <p>{{ getRandomUserName() }}</p>
        </div>
      </div>
    </div>
    <div v-if="isPopUp" class="main__pop-up" @click="hidePopUp">
      <div class="main__pop-up-block">
        <img :src="popSrc" alt="ss">
        <button @click="hidePopUp"/>
      </div>
    </div>
  </div>
</template>

<script lang="typescript">

import Vue from 'vue';
import ElementUi from 'element-ui';
import {mapActions, mapGetters} from 'vuex';

Vue.use(ElementUi);

export default Vue.extend({
  name: 'ImgMassive',
  components: {},

  data() {
    return {
      isPopUp: false,
      popSrc: ''
    };
  },

  computed: {
    ...mapGetters(['getLayoutElements', 'getPictureNames', 'getUsernames']),
  },

  mounted() {
    for (let i = this.getLayoutElements.layout1.length; i < 10; i++) {
      this.GetLayout();
    }
  },

  methods: {
    ...mapActions(['GetLayout']),
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
  }
});


</script>

<style scoped lang="less">

.main {

  &__layout {
    display: flex;
    justify-content: center;
    margin: 0 100px;
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

  &__name {
    margin: 8px 10px 0 10px;
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
        width: 30px;
        height: 30px;
        background: url("./../assets/img/cancel.svg");
        border: none;
        opacity: 0.5;
        cursor: pointer;
      }

      button:hover {
        opacity: 1;
      }
    }

  }

}

</style>
