<template>
  <div id="app">
    <Nav/>
    <main class="min-h-screen m-auto">
      <!-- <Gallery/> -->
      <Gallery
        v-for="art in response"
        v-bind:key="art.id"
        v-bind:title="art.link"
      />
      <!-- <Home :response="response" @map-response="mapResponse" /> -->
      <Home v-if="response" :response="response" :isLoading="isLoading" />
    </main>
  </div>
</template>

<script>
import axios from 'axios';

import Nav from './components/Nav.vue'
import Home from './components/Home.vue'
import Gallery from './components/Gallery.vue'
// import imgur from './api/imgur.js'


export default {
  name: 'app',
  components: {
    Nav,
    Home,
    Gallery,
  },
    data() {
    return {
      currentPage: "home",
      response: null,
      isLoading: true,
      // message: `Hello ${imgur.ACCESS_TOKEN}`,

    }
  },
  mounted() {
    this.imgur();
  },
  methods: {
    imgur: function() {
      // const ACCESS_TOKEN=`7212c5e90cfd58bb57682ebc54f1bb683a25ceff`
      // const REFRESH_TOKEN=`2fea5ac4978b48c4e91c543f8f9c45359b7013c4`
      // const CLIENT_SECRET=`9657c0de1ad6037a4b6f209b5660236c98210395`
      const CLIENT_ID=`6e79d957303ffff`
      // console.log("out", this.response)
      let that = this

      return axios.get("https://api.imgur.com/3/album/MsAJctm/images", {headers: {"Authorization" : "Client-ID "+ CLIENT_ID}})
        .then(function (result) {
            that.response = result.data.data;
            // console.log(result);
            that.isLoading = false;
            console.log("vue data response", that.response);
          })
        .catch(function (error) {
          // handle error
          console.log('error',error);
        })
    },

  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}
</style>
