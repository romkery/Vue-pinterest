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
          <i :class="tab.icon" />
          <p>{{ tab.title }}</p>
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
@use "/src/scss/util/mixins" as m;
@use "/src/scss/util/functions" as f;
@import "/src/scss/globals/variables";

.account__content {

  &-tabs {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: f.rem(20);
    margin: 0 f.rem(10);

    &-tab {
      $self: &;

      &-wrap {
        display: flex;
        align-items: center;
        padding: f.rem(15) 0;
        position: relative;
        //font-weight: 600;
        opacity: 0.5;
        cursor: pointer;
      }

      i {
        margin-right: f.rem(6);
        @include m.adaptive_font(16, 5);
        margin-bottom: f.rem(2);
      }

      p {
        @include m.adaptive_font(16, 5);
        font-family: auto, serif;
        line-height: 0;
      }

      &--active {

        #{$self}-wrap {

          opacity: 1;

          &::before {
            content: '';
            width: 100%;
            background-color: f.theme-var($--accent-color);
            height: f.rem(2);
            position: absolute;
            top: f.rem(-1);
          }
        }
      }
    }
  }

  &-grid {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, f.rem(295)));
    justify-content: center;
    grid-gap: f.rem(10);

    img {
      aspect-ratio: 1 / 1;
      width: 100%;
      border-radius: f.rem(16);
      object-fit: cover;
      cursor: pointer;
    }
  }
}


</style>
