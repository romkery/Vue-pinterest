<template>
  <fragment>
    <div class="account__content-tabs">
      <div
        v-for="tab in tabs"
        :key="tab.title"
        :class="[`account__content-tabs-tab`, {'account__content-tabs-tab--active': tab.isActive}]"
      >
        <div
          class="account__content-tabs-tab-wrap"
          @click="selectTab(tab)"
        >
          <img
            :src="require(`./../../../assets/img/${tab.img}`)"
            alt="tab img"
          >
          {{ tab.title }}
        </div>
      </div>
    </div>
    <!--  Нужно эту логику унести в отдельную компоненту-->
    <Marks v-if="tabs[2].isActive" />
    <div class="account__content-grid">
      <Publication v-if="tabs[0].isActive" />
      <Saved v-if="tabs[1].isActive" />
    </div>
  </fragment>
</template>


<script>

import Vue from 'vue';
import Publication from '@/components/MainContent/Account/tabs/Publication';
import Marks from '@/components/MainContent/Account/tabs/Marks';
import Saved from '@/components/MainContent/Account/tabs/Saved';
import {mapState} from 'vuex';

export default Vue.extend({
    name: 'AccountTabs',
    components: {
      Publication, Marks, Saved
    },

    data() {
      return {};
    },

    computed: {
      ...mapState({
        tabs: state => state.AccountModule.tabs
      })
    },

    methods: {
      selectTab(selectedTab) {
        this.tabs.forEach(tab => {
          tab.isActive = (tab.title === selectedTab.title);
        });
      },
    },
  }
);

</script>


<style lang="scss">

@import "/src/styles/variables";

.account__content {

  &-tabs {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-right: 40px;
    gap: 20px;

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
            background-color: $accent;
            height: 2px;
            position: absolute;
            top: -2px;
          }
        }
      }
    }
  }

  &-grid {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 295px));
    justify-content: center;
    grid-gap: 5px;

    img {
      aspect-ratio: 1 / 1;
      width: 100%;
      height: 100%;
      border-radius: 16px;
      object-fit: cover;
      cursor: pointer;
    }
  }
}


</style>
