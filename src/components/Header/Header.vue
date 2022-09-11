<template>
  <div class="header">
    <PopUp
      :pop-src="this.popSrc"
      :is-pop-up="this.isPopUp"
    />
    <div class="header__content">
      <img
        src="https://pngimg.com/uploads/pinterest/pinterest_PNG45.png"
        alt="Logo"
        @click="$router.push('/home')"
      >
      <button @click="$router.push('/home')">
        Home
      </button>
      <div class="header__content-search">
        <img
          :src="SearchSvg"
          alt=""
        >
        <input
          id="s3"
          v-model="userQuery"
          type="text"
          placeholder="Search"
          @keyup.enter="getQuery"
        >
      </div>
      <div
        class="header__content-account"
        @click="$router.push('/account/public')"
      >
        RD
      </div>
    </div>
  </div>
</template>

<script lang="js">


import Vue from 'vue';
import {mapActions, mapState} from 'vuex';
import PopUp from '@/components/utils/PopUp';


export default Vue.extend({
  name: 'Header',

  components: {
    PopUp
  },
  data() {
    return {
      SearchSvg: require('@/assets/img/search.svg'),
      userQuery: '',
    };
  },

  computed: {
    ...mapState({
      popSrc: state => state.MainModule.popSrc,
      isPopUp: state => state.MainModule.isPopUp
    }),
  },

  methods: {
    ...mapActions('MainModule', ['setUserQuery', 'GetLayout', 'setLoading', 'removeLayout']),
    async getQuery() {
      this.setUserQuery(this.userQuery);
      this.removeLayout();
      this.GetLayout();
      await this.setLoading(true);
      setTimeout(() => {
        this.setLoading(false);
      }, 2000);
    },
  }
});

</script>


<style lang="less">

.header {

  &__content {
    display: flex;
    align-items: center;
    height: 55px;
    width: 100%;

    img {
      margin-left: 20px;
      width: 25px;
      height: 25px;
      margin-right: 20px;
      cursor: pointer;
    }

    button {
      width: 100px;
      height: 45px;
      border-radius: 16px;
      margin-right: 10px;
      color: white;
      background-color: rgba(0, 0, 0, 1);
      cursor: pointer;
      border: none;
    }

    button:hover {
      background-color: rgba(0, 0, 0, .8);
    }

    &-search {
      flex-grow: 1;
      display: flex;
      //margin-right: 200px;

      img {
        position: absolute;
        margin-left: 8px;
        margin-top: 12px;
        width: 22px;
        height: 22px;
      }

      input {
        padding: 0 30px;
        height: 48px;
        width: 100%;
        border: none;
        border-radius: 20px;
        background: rgba(0, 0, 0, 0.08);
      }
    }

    &-account {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 45px !important;
      height: 43px !important;
      border: 2px solid black;
      cursor: pointer;
      border-radius: 35px;
      margin-left: 30px;
      font-weight: 600;
      margin-right: 20px;
    }
  }
}


</style>
