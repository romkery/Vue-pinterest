<template>
  <div class="account">
    <div class="account__header">
      <img
        src="https://sun4-10.userapi.com/s/v1/ig2/WnnXZ8qMFGXG57edF-YcbysK_efKcuBJkMgytSu6E2Z9W9pmvnDL9P-5w7YvL3s9jJ7O8H6jeNkOaseTrCrPCWud.jpg?size=400x400&quality=96&crop=0,0,599,599&ava=1"
        alt="Avatar"
        class="account__header-avatar">
      <div class="account__info">
        <div class="account__info-top">
          <p>_Whiteek_</p>
          <button>Редактировать профиль</button>
          <img :src="settingsSvg" alt="setting-svg">
        </div>
        <div class="account__info-middle">
          <div v-for="el in info" :key="el.title" class="account__info-middle-item">
            <h4>{{ el.count }}</h4>
            {{ el.title }}
          </div>
        </div>
        <div class="account__info-bottom">
          <h3>White wolf</h3>
          <p>bio</p>
        </div>
      </div>
    </div>
    <hr>
    <div class="account__content">
      <div class="account__content-tabs" v-for="tab in tabs" :key="tab.title">
        <div :class="[`account__content-tabs-tab`, {'account__content-tabs-tab--active': tab.isActive}]">
          <div class="account__content-tabs-tab-wrap">
            <img :src="tab.img" :alt="tab.title">
            {{ tab.title }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>

import Vue from 'vue';

export default Vue.extend({
    name: 'Account',
    components: {},

    data() {
      return {
        settingsSvg: require('@/assets/img/settings.svg'),
        info: [
          {
            count: 4,
            title: 'публикаций',
          },
          {
            count: 153,
            title: 'подписчиков',
          },
          {
            count: 234,
            title: 'подписок',
          }
        ],
        tabs: [
          {
            img: require('@/assets/img/cell.svg'),
            title: 'ПУБЛИКАЦИИ',
            isActive: false,
          },
          {
            img: require('@/assets/img/saved.svg'),
            title: 'СОХРАНЕННОЕ',
            isActive: true,
          },
          {
            img: require('@/assets/img/marks.svg'),
            title: 'ОТМЕТКИ',
            isActive: false,
          }
        ]
      };
    },

    computed: {},

    methods: {},
  }
);

</script>


<style lang="scss">

.account {
  max-width: 850px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  hr {
    width: 850px;
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
        border: solid 1px #007bff;
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
    justify-content: center;

    &-tabs {
      margin-right: 40px;

      &-tab {
        $self: &;

        &-wrap {
          display: flex;
          align-items: center;
          padding: 15px 0;
          position: relative;
          font-weight: 600;
          opacity: 0.5;
          cursor: pointer;
        }

        img {
          margin-right: 6px;
          width: 15px;
          height: 15px;
        }

        &--active {


          #{$self}-wrap {

            opacity: 1;

            &::before {
              content: '';
              width: 100%;
              background-color: #007bff;
              height: 2px;
              position: absolute;
              top: -2px;
            }

          }

        }

      }

    }
  }
}
</style>