<template>
  <div class="about">
    <v-btn @click="checkLoginState">dasdasd</v-btn>
  </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import ItemMoim from '@/components/ItemMoim';

    export default Vue.extend({
        data: () => ({

        }),
        components: {
            ItemMoim
        },
        // mounted(){
        //     window.fbAsyncInit = function() {
        //         FB.init({
        //             appId      : '743206922758261',
        //             cookie     : true,
        //             xfbml      : true,
        //             version    : 'v4.0'
        //         });
        //
        //         FB.AppEvents.logPageView();
        //
        //     };
        //
        //     (function(d, s, id){
        //         var js, fjs = d.getElementsByTagName(s)[0];
        //         if (d.getElementById(id)) {return;}
        //         js = d.createElement(s); js.id = id;
        //         js.src = "https://connect.facebook.net/en_US/sdk.js";
        //         fjs.parentNode.insertBefore(js, fjs);
        //     }(document, 'script', 'facebook-jssdk'));
        // },
        // methods: {
        //     checkLoginState() {
        //
        //         FB.getLoginStatus(function(response) {
        //             statusChangeCallback(response);
        //         });
        //         // FB.getLoginStatus(function(response) {
        //         //     statusChangeCallback(response);
        //         // });
        //
        //     },
        // },
    });
</script>
