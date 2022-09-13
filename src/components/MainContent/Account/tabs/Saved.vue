<template>
  <fragment>
    <img
      v-for="(img, index) in saved"
      :key="index"
      :src="img"
      alt="Grid"
      @click="showPopUp()"
    >
  </fragment>
</template>

<script lang="js">


import Vue from 'vue';
import {mapActions, mapState} from 'vuex';


export default Vue.extend({

  name: 'Saved',

  components: {},

  data() {
    return {};
  },

  computed: {
    ...mapState({
      saved: state => state.AccountModule.profile.saved
    })
  },

  methods: {
    ...mapActions('MainModule', ['setPopUp']),

    showPopUp() {
      let target = event.target;
      this.setPopUp({isPopUp: true, popSrc: target.src});
    },
  }
});

</script>


<style lang="less">

</style>
