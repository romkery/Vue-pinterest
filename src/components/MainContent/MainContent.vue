<template>
  <div class="main__content">
    <Layout />
  </div>
</template>

<script lang="js">

import Vue from 'vue';
import ElementUi from 'element-ui';
import {mapActions, mapGetters} from 'vuex';
import Layout from '@/components/MainContent/Layout';

Vue.use(ElementUi);

export default Vue.component('MainContent', {
  components: {
    Layout,
  },

  data() {
    return {};
  },

  computed: {
    ...mapGetters('MainModule', ['getLayoutElements']),
  },

  methods: {
    ...mapActions('MainModule', ['GetLayout']),
  },
});


</script>


<style lang="less" scoped>

.main {

  &__content {
    //margin: 0.625rem;
    //max-width: 100vw;
  }

}

</style>
