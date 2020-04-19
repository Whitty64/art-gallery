<template>
  <div id="app">
    <main class="min-h-screen m-auto">
      <Nav :response="response" />
      <router-view :response="response"></router-view>
      <!-- <Gallery
        v-for="art in response"
        v-bind:key="art.id"
        v-bind:title="art.link"
      />
      <Home v-if="response" :response="response" :isLoading="isLoading" /> -->
    </main>
  </div>
</template>

<script>
import axios from 'axios';
import {shuffle} from "lodash-es";import Nav from './components/Nav.vue'
export default {
  name: 'app',
  components: {
    Nav,
  },
  props: [
    // "response",
  ],
  data() {
    return {
      currentPage: "home",
      isLoading: true,
      error: null,
      // currentIndex: 0,
      // leftImg:"",
      // rightImg:"",
      response: null,
    }
  },
  mounted() {
    console.log("app", this.response);
    this.imgur();

  },

  methods: {
    random() {
      return shuffle(this.response.map(img => img.link));
    },

    next() {
      console.log("res",this.response)
      this.currentIndex+= 2;
      if (this.currentIndex >= this.response.length) {
        this.currentIndex = 0;
      }
      this.leftImg = this.response[this.currentIndex].link;
      this.rightImg = this.response[this.currentIndex + 1].link;
    },
    imgur() {
      // const ACCESS_TOKEN=`7212c5e90cfd58bb57682ebc54f1bb683a25ceff`
      // const REFRESH_TOKEN=`2fea5ac4978b48c4e91c543f8f9c45359b7013c4`
      // const CLIENT_SECRET=`9657c0de1ad6037a4b6f209b5660236c98210395`
      const CLIENT_ID=`6e79d957303ffff`
      let that = this

      return axios.get("https://api.imgur.com/3/album/MsAJctm/images", {headers: {"Authorization" : "Client-ID "+ CLIENT_ID}})
        .then(function (result) {
            that.response = result.data.data;
            that.isLoading = false;
            console.log("vue data response", that.response);
            shuffle();
            // that.next();
          })
        .catch(function (error) {
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
