<template>
  <fragment>
    <PopUp
      :pop-src="popSrc"
      :is-pop-up="isPopUp"
    />
    <div class="header">
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
            src="./../../assets/img/search.svg"
            alt="search"
          >
          <input
            id="s3"
            v-model="userQuery"
            type="text"
            placeholder="Search"
            @keyup.enter="getQuery"
          >
        </div>
        <dropdown
          :users="users"
          class="header__content-dropdown"
          :set-profile="setProfile"
        />
        <div
          class="header__content-account"
          @click="$router.push(`/account/${profile.id}`)"
        >
          <span>{{ getUserInitials }}</span>
        </div>
      </div>
    </div>
  </fragment>
</template>

<script lang="js">


import Vue from 'vue';
import {mapActions, mapState} from 'vuex';
import PopUp from '@/components/utils/PopUp';
import Dropdown from '@/components/utils/Dropdown';


export default Vue.extend({
  name: 'Header',

  components: {
    PopUp,
    Dropdown
  },
  data() {
    return {
      userQuery: '',
    };
  },

  computed: {
    getUserInitials() {
      let word = this.profile?.username.split(' ');
      return word[0].substring(0, 1).toLocaleUpperCase() + word[1].substring(0, 1).toLocaleUpperCase();
    },

    ...mapState({
      popSrc: state => state.MainModule.popSrc,
      isPopUp: state => state.MainModule.isPopUp,
      users: state => state.AccountModule.users,
      profile: state => state.AccountModule.profile
    }),
  },

  mounted() {
    this.setMap();
  },

  methods: {
    ...mapActions('MainModule', ['setUserQuery', 'GetLayout', 'setLoading', 'removeLayout']),
    ...mapActions('AccountModule', ['setUserProfile', 'setMap']),

    setProfile(id) {
      this.$router.push(`/account/${id}`);
      this.setUserProfile(id);
    },

    async getQuery() {
      this.$router.push('/home');

      this.setUserQuery(this.userQuery);

      this.removeLayout();

      this.GetLayout();
      document.querySelector('body').style.overflow = 'hidden';
      await this.setLoading(true);
      setTimeout(() => {
        document.querySelector('body').style.overflow = 'auto';
        this.setLoading(false);
      }, 2000);

      this.userQuery = '';
    },
  }
});

</script>


<style lang="less">

@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
  .header {
    box-sizing: border-box;
    background-blend-mode: overlay;
    background-color: #FFFFFF99;
    -webkit-backdrop-filter: blur(33px);
    backdrop-filter: blur(33px);
  }
}


.header {
  position: sticky;
  display: block;
  top: 0;
  width: 100%;
  border-radius: 0 0 10px 10px;
  z-index: 9;

  &__content {
    display: flex;
    align-items: center;
    height: 55px;
    width: 100%;

    img {
      margin-left: 20px;
      width: 25px;
      height: 25px;
      cursor: pointer;
      margin-right: 10px;
    }

    button {
      width: 100px;
      height: 45px;
      border-radius: 16px;
      margin: 0 10px;
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

    &-dropdown {
      margin-left: 20px;
    }

    &-account {
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 45px;
      min-height: 43px;
      width: 45px;
      height: 43px;
      border: 2px solid black;
      cursor: pointer;
      border-radius: 35px;
      font-weight: 600;
      margin: 0 20px;
    }
  }
}


</style>
