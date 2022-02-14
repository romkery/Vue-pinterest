<template>
  <div class="header">
    <div class="header__content">
      <img
        src="https://pngimg.com/uploads/pinterest/pinterest_PNG45.png"
        alt="Logo"
      >
      <button>Home</button>
      <div class="header__content-search">
        <img
          :src="SearchSvg"
          alt=""
        >
        <input
          id="s3"
          type="text"
          placeholder="Search"
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">


import Vue from 'vue';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import SearchSvg from './../../assets/img/search.svg';


export default Vue.extend({
  name: 'Header',
  data() {
    return {
      SearchSvg: SearchSvg
    };
  }
});

</script>


<style lang="less">

.header {
  padding: 0 20px;
  background-color: blue;

  &__content {
    display: inline-flex;
    align-items: center;
    height: 55px;
    width: 100%;

    img {
      width: 25px;
      height: 25px;
      margin-right: 20px;
    }

    button {
      width: 120px;
      height: 50px;
      border-radius: 16px;
      margin-right: 10px;
      color: white;
      background-color: black;
      cursor: pointer;
    }

    &-search {
      flex-grow: 1;
      display: flex;
      margin-right: 200px;

      img {
        position: absolute;
        margin-left: 8px;
        margin-top: 12px;
        width: 22px;
        height: 22px;
      }

      input {
        padding: 0 30px;
        height: 44px;
        width: 100%;
        border-radius: 20px;
        background-color: #e2e2e2;
      }

    }
  }
}


</style>
