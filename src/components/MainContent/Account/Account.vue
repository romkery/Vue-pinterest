<template>
  <div>
    <!--    <PopUp :popSrc="this.popSrc" :isPopUp="this.isPopUp"/>-->
    <div class="account">
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

@import '/src/styles/variables';

.account {
  max-width: 925px;
  width: 100%;
  height: 100%;
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
    width: 100%;
    margin-top: 30px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    &-avatar {
      min-width: 150px;
      min-height: 150px;
      width: 150px;
      height: 150px;
      border-radius: 100px;
      margin: 0 90px 0 50px;
      object-fit: cover;
      cursor: pointer;
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

  &__content {
    display: flex;
    flex-direction: column;
    margin: 0 10px;
  }

}
</style>
