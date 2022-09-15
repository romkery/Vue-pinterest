<template>
  <div>
    <!--    <PopUp :popSrc="this.popSrc" :isPopUp="this.isPopUp"/>-->
    <div class="account">
      <div class="container">
        <div class="account__header">
          <img
            :src="profile.avatar"
            alt="Avatar"
            class="account__header-avatar"
            @click="showPopUp()"
          >
          <div class="account__info">
            <div class="account__info-top">
              <p>{{ profile.nickname }}</p>
              <button>Редактировать профиль</button>
              <img
                src="./../../../assets/img/settings.svg"
                alt="setting-svg"
              >
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

@import './src/styles/variables';
@import "./src/styles/mixins";

.account {
  width: min(rem(925), 100%);
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  .container {
    margin: rem(10);
  }

  hr {
    background-color: black;
    opacity: .5;
    border-width: rem(0.5);
    margin: 0;
  }

  &__header {
    width: 100%;
    margin-top: rem(30);
    margin-bottom: rem(20);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    &-avatar {
      width: min(50vw, rem(150));
      height: min(50vw, rem(150));
      border-radius: 50%;
      margin: 0 rem(90) 0 rem(50);
      object-fit: cover;
      cursor: pointer;
    }
  }

  &__info {
    width: min(100%, rem(400));
    display: flex;
    flex-direction: column;
    @include adaptive_font(14, 12);

    &-top {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: rem(15);
      gap: rem(15);

      @media (max-width: em(240)) {
        flex-direction: column;
        gap: 1rem;
      }

      p {
        margin: 0;
        @include adaptive_font(40, 12);
        //font-size: clamp(.5rem, 1rem + 1vw, 1.5rem);
        display: block;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      button {
        width: max(rem(20), 100%);
        height: rem(30);
        @include adaptive_font(16, 8);
        background: transparent;
        border-radius: rem(5);
        border: solid rem(1) $accent;
        font-weight: 600;
        cursor: pointer;
      }

      button:hover {
        color: white;
        background: #007bff;
        transition: 0.2s ease-in;
      }

      img {
        width: rem(25);
        height: rem(25);
      }

    }

    &-middle {
      display: flex;
      margin-top: rem(20);
      gap: min(2.5rem, .5rem);
      align-items: center;
      justify-content: space-between;

      @media(max-width: em(240)) {
        flex-direction: column;
      }

      &-item {
        display: flex;

        h4 {
          @include adaptive_font(14, 8);
          margin: 0 rem(4) 0 0;
        }
      }
    }

    &-bottom {
      margin-top: rem(20);

      p, h3 {
        margin: 0;
        line-height: rem(25);
        font-size: 1rem;
      }
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
  }

}
</style>
