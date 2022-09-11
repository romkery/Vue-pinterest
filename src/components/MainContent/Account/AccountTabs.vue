<template>
  <div class="account">
    <div class="account__content">
      <div class="account__content-tabs" v-for="tab in tabs" :key="tab.title">
        <div :class="[`account__content-tabs-tab`, {'account__content-tabs-tab--active': tab.isActive}]">
          <div class="account__content-tabs-tab-wrap" @click="selectTab(tab)">
            <img :src="tab.img" :alt="tab.title">
            {{ tab.title }}
          </div>
        </div>
      </div>
    </div>
    <Publication v-if="tabs[0].isActive" />
    <Saved v-if="tabs[1].isActive" />
    <Marks v-if="tabs[2].isActive"/>
  </div>
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
      return {
      };
    },

    computed: {
      ...mapState({
        tabs: state => state.AccountModule.profile.tabs
      })
    },

    methods: {
      selectTab(selectedTab) {
        this.tabs.forEach(tab => {
          tab.isActive = (tab.title == selectedTab.title);
        });
        // this.$router.push(`/account/${selectedTab.component}`);
      },
    },
  }
);

</script>


<style lang="scss">

@import "/src/styles/variables";

.account {
  max-width: 935px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

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
              background-color: $accent;
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