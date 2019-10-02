<template>
  <v-bottom-navigation
    :value="routeIndex"
    dark
    shift
    fixed
  >
    <v-btn v-for="router in $store.state.routers" @click="goPage(router.name)">
      <span>{{router.name.charAt(0).toUpperCase() + router.name.slice(1)}}</span>
      <v-icon>{{router.icon}}</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>
<style lang="scss" scoped>
  .v-bottom-navigation {
    .v-btn {
      height: 56px !important;
    }
  }
</style>
<script lang="ts">
import Vue from 'vue';
import _ from 'lodash';

export default Vue.extend({
    name: 'Bottom',
    props: ['routeIndex'],
    methods: {
        goPage(path: string) {
            if (this.routeIndex !== _.findIndex(this.$store.state.routers, {name: path})) {
                this.$router.push({
                    path,
                });
            } else {
                this.$vuetify.goTo(0)
            }
        },
    },
});
</script>
