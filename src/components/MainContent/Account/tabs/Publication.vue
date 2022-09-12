<template>
  <div>
    <div class="account__content-grid">
      <div
        v-for="(img, index) in publications"
        :key="index"
        class="account__content-grid-el"
      >
        <img
          :src="img"
          alt="Grid"
          @click="showPopUp()"
        >
      </div>
    </div>
  </div>
</template>

<script lang="js">


import {mapActions, mapState} from 'vuex';
import Layout from '@/components/MainContent/Layout';


export default Layout.extend({
  name: 'Publication',

  components: {},

  data() {
    return {};
  },

  computed: {
    ...mapState({
      publications: state => state.AccountModule.profile.publications
    })
  },

  methods: {
    ...mapActions('MainModule', ['setPopUp']),
  }
});

</script>


<style lang="scss">
.account__content {
  width: 100%;
  height: 100%;

  &-grid {

    display: grid;
    grid-template-columns: 33% 33% 33%;
    margin-top: 10px;
    justify-content: center;

    &-el {
      margin-right: 5%;
      margin-bottom: 5%;
    }

    img {
      max-width: 295px;
      max-height: 295px;
      height: 100%;
      width: 100%;
      border-radius: 16px;
      object-fit: cover;
      cursor: pointer;
    }
  }
}

</style>
