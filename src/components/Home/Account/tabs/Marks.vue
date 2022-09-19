<template>
  <div class="marks">
    <i class="el-icon-user" />
    <h1>Фото с вами</h1>
    <p>Здесь показываются люди, отметившие вас на фото.</p>
  </div>
</template>

<script lang="js">


import Vue from 'vue';


export default Vue.component('Marks', {

  components: {},

  data() {
    return {};
  },
});

</script>

<style lang="scss">

@use '../../../../scss/util/functions' as f;
@use '../../../../scss/util/mixins' as m;

.marks {
  margin-top: f.rem(60);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  i {
    @include m.adaptive_font(200, 40)
  }

  h1 {
    font-weight: 500;
    margin: 0;
  }

  p {
    max-width: f.rem(350);
  }
}
</style>
