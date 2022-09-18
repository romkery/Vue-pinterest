<template>
  <div
    v-if="isPopUp"
    class="pop-up"
    @click="hidePopUp($event)"
  >
    <div class="pop-up-block">
      <img
        loading="lazy"
        :src="popSrc"
        alt="ss"
        @click="setLiked"
      >
      <button @click="hidePopUp($event)" />
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import {mapActions, mapState} from 'vuex';

export default Vue.extend({
  name: 'PopUp',

  components: {},

  data() {
    return {};
  },

  computed: {
    ...mapState({
      isPopUp: state => state.MainModule.isPopUp,
      popSrc: state => state.MainModule.popSrc,
    })
  },

  methods: {
    ...mapActions('MainModule', [
      'setLiked', 'setPopUp'
    ]),

    hidePopUp() {
      document.querySelector('body').style.overflow = 'auto';
      this.setPopUp({isPopUp: false, popSrc: '', isPopUpLayout: false});
    },
  }
});

</script>


<style lang="scss">

@use './src/scss/util/functions' as f;
@use './src/scss/util/breakpoints' as b;

@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
  .pop-up {
    -webkit-backdrop-filter: blur(33px);
    backdrop-filter: blur(33px);
  }
}

.pop-up {
  z-index: 10;
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, .7);


  &-block {
    display: flex;

    img {
      max-width: min(f.rem(1400), 90vw);
      max-height: min(f.rem(1000), 90vh);
      border-radius: f.rem(16);
    }

    button {
      margin-left: f.rem(-32);
      width: f.rem(30);
      height: f.rem(30);
      background: url("./../../assets/img/cancel.svg");
      border: none;
      opacity: 0.5;
      cursor: pointer;
    }

    button:hover {
      opacity: 1;
    }

    @include b.breakpoint(xxl) {
      img {
        max-width: min(f.rem(2000), 90vw);
        max-height: min(f.rem(2000), 90vh);
      }
    }

    @include b.breakpoint-down(sm) {
      img {
        max-width: min(f.rem(400), 90vw);
        max-height: min(f.rem(400), 90vh);
      }
    }
  }
}

</style>
