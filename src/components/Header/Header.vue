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


<style lang="scss">

@import "../../scss/util/mixins";

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
  z-index: 9;

  &__content {
    display: flex;
    align-items: center;
    height: rem(55);
    width: 100%;

    img {
      margin-left: rem(20);
      width: rem(25);
      height: rem(25);
      cursor: pointer;
      margin-right: rem(10);
    }

    button {
      width: rem(100);
      height: rem(45);
      border-radius: rem(16);
      margin: 0 rem(10);
      color: white;
      background-color: rgba(0, 0, 0, 1);
      cursor: pointer;
      border: none;
      @include adaptive_font(16, 10);

      @media (max-width: em(767)) {
        height: rem(40);
      }
    }

    button:hover {
      background-color: rgba(0, 0, 0, .8);
    }

    &-search {
      flex-grow: 1;
      display: flex;

      img {
        position: absolute;
        margin-left: rem(8);
        margin-top: rem(12);
        width: rem(22);
        height: rem(22);
      }

      input {
        height: rem(48);
        width: 100%;
        min-width: rem(40);
        border: none;
        border-radius: rem(20);
        background: rgba(0, 0, 0, 0.08);
        @include adaptive_font(16, 10);
        text-align: center;

        @media (max-width: em(767)) {
          height: rem(40);
        }
      }

      :hover {
        background: rgba(0, 0, 0, 0.10);
      }
    }

    &-dropdown {
      margin-left: min(rem(20), 2vw);

      .el-dropdown-link {
        @include adaptive_font(16, 8);
      }
    }

    &-account {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: rem(43);
      min-width: rem(43);
      border: rem(2) solid black;
      cursor: pointer;
      border-radius: rem(35);
      font-weight: 600;
      margin: 0 min(rem(20), 2vw);
      @include adaptive_font(16, 10);

      @media (max-width: em(767)) {
        min-height: rem(30);
        min-width: rem(30);
      }

      span {
        @include adaptive_font(16, 8)
      }
    }
  }
}


</style>
