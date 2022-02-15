<template>
  <div class="main__content">
    <Layout/>
    <router-link to="/home/account">
      <Account/>
    </router-link>
  </div>
</template>

<script lang="js">

import Vue from 'vue';
import ElementUi from 'element-ui';
import {mapActions, mapGetters} from 'vuex';
import Account from '@/components/MainContent/Account';
import Layout from '@/components/MainContent/Layout';

Vue.use(ElementUi);

export default Vue.component('MainContent', {
  components: {
    Layout,
    Account
  },

  data() {
    return {};
  },

  computed: {
    ...mapGetters(['getLayoutElements']),
  },

  created() {
    this.multiply(1)(2)(3);
  },

  methods: {
    ...mapActions(['GetLayout']),
    multiply(a) {
      return (b) => {
        return (c) => {
          return console.log(a * b * c);
        };
      };
    }
  },
});


</script>


<style lang="less" scoped>

.main {

  &__content {

  }

}

</style>
