<template>
  <el-row class="block-col-2">
    <el-col :span="12">
      <el-dropdown
        trigger="click"
        @command="setProfile"
      >
        <span class="el-dropdown-link">
          <span>Change profile</span>
          <i class="el-icon-arrow-down el-icon--right" />
        </span>
        <el-dropdown-menu
          slot="dropdown"
        >
          <el-dropdown-item
            v-for="user in users"
            :key="user.id"
            icon="el-icon-user-solid"
            :command="user.id"
          >
            {{ user.username }}
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
  </el-row>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'Dropdown',
  components: {},
  props: ['users', 'setProfile']

});


</script>

<style lang="scss">
@use "../../scss/util/mixins" as m;

.el-dropdown-link {
  cursor: pointer;
  color: #409EFF;
  white-space: nowrap;
}

.el-icon-arrow-down {
  @include m.adaptive_font(12, 8)
}
</style>
