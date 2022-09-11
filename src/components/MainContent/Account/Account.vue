<template>
  <div>
    <!--    <PopUp :popSrc="this.popSrc" :isPopUp="this.isPopUp"/>-->
    <div class="account">
      <div class="account__header">
        <img
          src="https://avatars.githubusercontent.com/u/81356582?s=400&u=cab5fc803e5b2ad6c53dc52febbf0f12f51ee32c&v=4"
          alt="Avatar"
          class="account__header-avatar"
        >
        <div class="account__info">
          <div class="account__info-top">
            <p>{{ nickname }}</p>
            <button>Редактировать профиль</button>
            <img
              src="../../../assets/img/settings.svg"
              alt="setting-svg"
            >
          </div>
          <div class="account__info-middle">
            <div
              v-for="el in info"
              :key="el.title"
              class="account__info-middle-item"
            >
              <h4>{{ el.count }}</h4>
              {{ el.title }}
            </div>
          </div>
          <div class="account__info-bottom">
            <h3>{{ username }}</h3>
            <p>{{ bio }}</p>
          </div>
        </div>
      </div>
      <hr>
      <AccountTabs />
    </div>
  </div>
</template>


<script>

import Vue from 'vue';
import AccountTabs from '@/components/MainContent/Account/AccountTabs';
import {mapState} from 'vuex';

export default Vue.extend({
    name: 'Account',
    components: {
      AccountTabs,
      // PopUp
    },

    data() {
      return {};
    },

    computed: {
      ...mapState({
        popSrc: state => state.MainModule.popSrc,
        isPopUp: state => state.MainModule.isPopUp,
        info: state => state.AccountModule.profile.info,
        nickname: state => state.AccountModule.profile.nickname,
        username: state => state.AccountModule.profile.username,
        bio: state => state.AccountModule.profile.bio,
      }),
    },

    methods: {},
  }
);

</script>


<style lang="scss">

@import '/src/styles/variables';

.account {
  max-width: 935px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  hr {
    max-width: 935px;
    background-color: black;
    opacity: .5;
    border-width: 0.5px;
    margin: 0;
  }

  &__header {
    padding-top: 30px;
    display: flex;
    flex-direction: row;
    margin-bottom: 44px;

    &-avatar {
      width: 150px;
      height: 150px;
      border-radius: 100px;
      margin: 0 90px 0 50px;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    max-width: 400px;

    &-top {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: 15px;

      p {
        margin: 0;
        font-size: 24px;
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      button {
        margin: 0 15px;
        width: 190px;
        height: 30px;
        font-size: 14px;
        background: transparent;
        border-radius: 5px;
        border: solid 1px $accent;
        font-weight: 600;
        cursor: pointer;
      }

      button:hover {
        color: white;
        background: #007bff;
        transition: 0.2s ease-in;
      }

      img {
        width: 25px;
        height: 25px;
      }

    }

    &-middle {
      display: flex;
      margin-top: 20px;

      &-item {
        display: flex;
        margin-right: 40px;
        align-items: center;

        h4 {
          margin: 0 4px 0 0;
        }
      }
    }

    &-bottom {
      margin-top: 20px;

      p, h3 {
        margin: 0;
        line-height: 25px;
      }
    }
  }
}
</style>
