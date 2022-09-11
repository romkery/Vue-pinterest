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

  &-grid {
    display: grid;
    grid-template-columns: 320px 320px 295px;
    margin-top: 10px;
    justify-content: center;

    &-el {
      margin-right: 30px;
    }

    img {
      width: 295px;
      height: 295px;
      margin-bottom: 22px;
      border-radius: 16px;
      object-fit: cover;
      cursor: pointer;
    }
  }
}

</style>
