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

@use './src/scss/util/functions' as m;

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
      max-width: m.rem(1000);
      max-height: m.rem(600);
      border-radius: m.rem(16);
    }

    button {
      margin-left: m.rem(-32);
      width: m.rem(30);
      height: m.rem(30);
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

</style>
