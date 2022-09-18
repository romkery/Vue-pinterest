<template>
  <div>
    <!--    <PopUp :popSrc="this.popSrc" :isPopUp="this.isPopUp"/>-->
    <div class="account">
      <div class="container">
        <div class="account__header">
          <img
            loading="lazy"
            :src="profile.avatar"
            alt="Avatar"
            class="account__header-avatar"
            @click="showPopUp()"
          >
          <div class="account__info">
            <div class="account__info-top">
              <p>{{ profile.nickname }}</p>
              <button>Редактировать профиль</button>
              <i class="el-icon-setting" />
            </div>
            <div class="account__info-middle">
              <div
                v-for="el in profile.info"
                :key="el.title"
                class="account__info-middle-item"
              >
                <h4>{{ el.count }}</h4>
                {{ el.title }}
              </div>
            </div>
            <div class="account__info-bottom">
              <h3>{{ profile.username }}</h3>
              <p>{{ profile.bio }}</p>
            </div>
          </div>
        </div>
        <hr>
        <div class="account__content">
          <AccountTabs />
        </div>
      </div>
    </div>
  </div>
</template>


<script>

import AccountTabs from '@/components/MainContent/Account/AccountTabs';
import {mapActions, mapState} from 'vuex';
import Layout from '@/components/MainContent/Layout';

export default Layout.extend({
    name: 'Account',
    components: {
      AccountTabs,
    },

    data() {
      return {};
    },

    computed: {
      ...mapState({
        popSrc: state => state.MainModule.popSrc,
        isPopUp: state => state.MainModule.isPopUp,
        profile: state => state.AccountModule.profile,
      }),
    },

    mounted() {
      // this.setMap();
      // this.setUserProfile(this.$route.params.id);
      //
      // this.$watch(
      //   () => this.$route.params,
      //   (toParams, previousParams) => {
      //     this.setUserProfile(toParams.id);
      //   });
    },

    methods: {
      ...mapActions('AccountModule', ['setMap']),
    },
  }
);

</script>


<style lang="scss">

@use "../../../scss/util/mixins" as m ;
@use "../../../scss/util/functions" as f;
@use "../../../scss/util/breakpoints" as b;
@import '../../../scss/globals/variables';

.account {
  display: flex;
  flex-direction: column;
  width: min(f.rem(925), 100%);
  height: 100%;
  margin: 0 auto;

  .container {
    margin: f.rem(10);
  }

  hr {
    margin: 0;
    background-color: black;
    border-width: f.rem(0.5);
    opacity: .5;
  }

  &__header {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: f.rem(30);
    margin-bottom: f.rem(20);

    &-avatar {
      width: min(50vw, f.rem(150));
      height: min(50vw, f.rem(150));
      margin: 0 f.rem(90) 0 f.rem(50);
      border-radius: 50%;
      object-fit: cover;
      cursor: pointer;
    }

    @include b.breakpoint-down(md) {
      flex-direction: column !important;

      img {
        margin: 0;
      }
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    width: min(100%, f.rem(400));
    @include m.adaptive_font(14, 12);
    @include b.breakpoint-down(md) {
      max-width: f.rem(300) !important;
    }

    &-top {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: f.rem(15);
      gap: f.rem(15);

      @include b.breakpoint-down(md) {
        justify-content: center;
        margin-top: f.rem(20);
      }

      @include b.breakpoint-down(f.em(240)) {
        flex-direction: column;
        gap: f.rem(10);

        :last-child {
          display: none;
        }
        margin-bottom: 0;
      }

      p {
        margin: 0;
        @include m.adaptive_font(40, 12);
        display: block;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      button {
        width: max(f.rem(20), 100%);
        height: f.rem(30);
        @include m.adaptive_font(16, 8);
        background: transparent;
        border: solid f.rem(1) f.theme-var($--accent-color);
        border-radius: f.rem(5);
        cursor: pointer;
        color: f.theme-var($--font-color);
        font-weight: 600;
      }

      button:hover {
        background: f.theme-var($--accent-color);
        transition: 0.2s ease-in;
      }

      i {
        color: f.theme-var($--font-color);
        cursor: pointer;
        @include m.adaptive_font(30, 15);
      }

    }

    &-middle {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: f.rem(20);
      gap: min(2.5rem, .5rem);

      @include b.breakpoint-down(f.em(220)) {
        flex-direction: column;
      }

      &-item {
        display: flex;

        h4 {
          @include m.adaptive_font(14, 8);
          margin: 0 f.rem(4) 0 0;
        }

        @include b.breakpoint-down(md) {
          flex-direction: column;
          align-items: center;
        }
      }
    }
  }

  &-bottom {
    margin-top: f.rem(20);

    p, h3 {
      margin: 0;
      font-size: 1rem;
      line-height: f.rem(25);
    }
  }


  &__content {
    display: flex;
    flex-direction: column;
  }

}
</style>
