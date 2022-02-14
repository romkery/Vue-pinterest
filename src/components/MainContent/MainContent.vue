<template>
  <div class="main__content">
    <ImgMassive/>
  </div>
</template>

<script lang="js">

import Vue from 'vue';
import ElementUi from 'element-ui';
import {mapActions, mapGetters} from 'vuex';
import ImgMassive from '@/helpers/ImgMassive';

Vue.use(ElementUi);

export default Vue.extend({
  name: 'MainContent',
  components: {
    ImgMassive
  },

  data() {
    return {};
  },

  computed: {
    ...mapGetters(['getLayoutElements']),
  },

  methods: {
    ...mapActions(['GetLayout']),
  }
});


</script>


<style lang="less" scoped>

.main {

  &__content {

  }
}

</style>
