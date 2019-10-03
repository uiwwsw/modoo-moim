<template>
  <v-app>
    <Bar :title="$store.state.route.toUpperCase()[0] + $store.state.route.slice(1)"/>
    <v-content>
      <router-view></router-view>
    </v-content>
    <Bottom :routeIndex="routeIndex"/>
  </v-app>
</template>
<style lang="scss">

.v-content {
  padding: 52px 0 60px !important;
}
</style>
<script lang="ts">
    import Vue from 'vue';
    import Bar from '@/components/Bar.vue';
    import Bottom from '@/components/Bottom.vue';
    import _ from 'lodash';

    export default Vue.extend({
        name: 'App',
        components: {
            Bar,
            Bottom,
        },
        data: () => ({
            routeIndex: 0,
        }),
        mounted() {
            this.routeIndex = _.findIndex(this.$store.state.routers, {name: this.$store.state.route});
        },
        updated(): void {
            const path = this.$route.path.replace('/', '');
            const route = this.$store.state.route;
            if (path !== route) {
                this.routeIndex = _.findIndex(this.$store.state.routers, {name: path});
                this.$store.dispatch('changePage', path);
            }
        },
    });
</script>
