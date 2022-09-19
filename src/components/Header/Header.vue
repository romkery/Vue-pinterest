<template>
  <fragment>
    <PopUp
      :pop-src="popSrc"
      :is-pop-up="isPopUp"
    />
    <div class="header">
      <div class="header__content">
        <button @click="$router.push('/home')">
          Home
        </button>
        <div class="header__content-search">
          <input
            id="s3"
            v-model="userQuery"
            type="text"
            placeholder="Search"
            @keyup.enter="getQuery"
          >
        </div>
        <div class="header__content-tooltip">
          <el-tooltip
            content="Dark Theme"
            placement="top"
            :effect="!isDark ? 'dark' : 'light'"
            popper-class="header__content-tooltip"
          >
            <div class="header__content-switcher">
              <i class="el-icon-sunrise" />
              <el-switch
                v-model="isDark"
                @change="toggleTheme"
              />
              <i class="el-icon-moon-night" />
            </div>
          </el-tooltip>
        </div>
        <div
          class="header__content-account"
          @click="$router.push(`/account/${profile.id}`)"
        >
          <span>{{ getUserInitials }}</span>
        </div>
        <dropdown
          :users="users"
          class="header__content-dropdown"
          :set-profile="setProfile"
        />
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
      isDark: false,
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
    document.getElementsByTagName('html')[0].setAttribute('class', 'light');
  },

  methods: {
    ...mapActions('MainModule', ['setUserQuery', 'GetLayout', 'setLoading', 'removeLayout']),
    ...mapActions('AccountModule', ['setUserProfile', 'setMap']),

    toggleTheme() {
      this.isDark = !this.isDark;
      if (this.isDark) {
        document.getElementsByTagName('html')[0].classList.remove('dark');
        document.getElementsByTagName('html')[0].setAttribute('class', 'light');
      } else {
        document.getElementsByTagName('html')[0].classList.remove('light');
        document.getElementsByTagName('html')[0].setAttribute('class', 'dark');
      }
      this.isDark = !this.isDark;
    },

    setProfile(id) {
      this.$router.push(`/account/${id}`);
      this.setUserProfile(id);
    },


    getQuery() {
      this.$router.push('/home');

      this.setLoading(true);

      this.setUserQuery(this.userQuery);

      this.removeLayout();

      this.GetLayout();
      document.querySelector('body').style.overflow = 'hidden';

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

@use "./../../scss/util/functions" as f;
@use "./../../scss/util/mixins" as m;
@use './../../scss/util/breakpoints' as b;
@import "./src/scss/globals/variables";

@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
  .header {
    box-sizing: border-box;
    background-blend-mode: overlay;
    -webkit-backdrop-filter: blur(33px);
    backdrop-filter: blur(33px);
  }
}


.header {
  position: sticky;
  top: 0;
  display: block;
  z-index: 9;
  background-color: f.theme-var($--background-header);
  border-bottom: f.rem(1) solid f.theme-var($--font-color);

  &__content {
    display: flex;
    align-items: center;
    height: f.rem(55);
    margin: 0 f.rem(10);
    gap: min(f.rem(10), 10vh);

    button {
      width: f.rem(100);
      height: f.rem(42);
      background-color: f.theme-var($--background-btn);
      border: none;
      border-radius: f.rem(16);
      cursor: pointer;
      color: f.theme-var($--color-btn);
      @include m.adaptive_font(16, 10);
    }

    button:hover {
      background-color: f.theme-var($--hover-btn);
    }

    &-search {
      display: flex;
      flex-grow: 1;
      align-items: center;

      i {
        display: none;
      }

      input {
        width: 100%;
        height: f.rem(42);
        min-width: f.rem(40);
        background: f.theme-var($--background-secondary);
        border: none;
        border-radius: f.rem(20);
        color: f.theme-var($--font-color);
        text-align: center;
        @include m.adaptive_font(16, 10);
      }

      :hover {
        background: f.theme-var($--hover-input-bg);
      }
    }

    &-switcher {
      display: flex;
      flex-direction: row;
      color: f.theme-var($--font-color);
      gap: min(f.rem(10), 1vw);
      align-items: center;
      @include m.adaptive_font(20, 15)
    }

    //Switch with tooltip
    &-tooltip {
      color: f.theme-var($--background-primary)
    }

    &-account {
      font-weight: 600;
      @include m.adaptive_font(16, 10);
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: f.rem(43);
      min-height: f.rem(43);
      border: f.rem(2) solid f.theme-var($--font-color);
      border-radius: f.rem(35);
      cursor: pointer;

      @include b.breakpoint-down(md) {
        min-width: f.rem(30);
        min-height: f.rem(30);
      }

      span {
        @include m.adaptive_font(16, 8)
      }
    }

    &-dropdown {

      .el-dropdown-menu {
        background: none !important;
      }

      .el-dropdown-link {
        @include m.adaptive_font(16, 8);
      }

      @include b.breakpoint-down(sm) {
        .el-dropdown {
          span {
            span {
              display: none;
            }
          }
        }

        i {
          margin: 0;
          font-size: 1rem !important;
        }
      }
    }
  }
}


</style>
