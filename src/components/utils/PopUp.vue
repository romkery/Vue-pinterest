<template>
  <div
    v-if="isPopUp"
    class="pop-up"
    @click="hidePopUp($event)"
  >
    <div class="pop-up-block">
      <img
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
      max-width: 1000px;
      max-height: 600px;
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

</style>
