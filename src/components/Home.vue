<template>
  <section v-if="response" id="home-page" class="max-w-5xl h-full w-full mx-auto">
    <!-- <h1 v-for="item in mapper" v-bind:key="item.id">{{item}}</h1> -->
    <div class="flex flex-col sm:flex-row items-center justify-center my-8 md:my-16">
        <div class="shadow-md m-1 bg-cover" v-bind:style="{ backgroundImage: 'url(' + this.leftImg + ')' }" style="width: 500px; height:500px;"></div>
        <div class="shadow-md m-1 bg-cover" v-bind:style="{ backgroundImage: 'url(' + this.rightImg + ')' }" style="width: 500px; height:500px;"></div>
    </div>
    <div class="flex justify-between">
      <div v-for="img in response" :key="img.id" @click="next()" class="slider-btn-container shadow-md w-full mx-2">
        <li class="slider-btn shadow" ></li>
      </div>
    </div>
    <!-- <div v-for="art in response" :key="art">
      <img :src="art.link" alt="">
      <h1>IMGUR Title</h1>
    </div> -->
  </section>
</template>

<script>
// import axios from 'axios';

// import {shuffle} from "lodash-es";

export default {
  name: "Home",
  props: {
    response: Array,
    isLoading: Boolean,
  },
  data() {
    return {
      timer: null,
      currentIndex: 0,
      leftImg:"",
      rightImg:"",
      // response: null,

    }
  },

  mounted() {

  },

  watch: {
    response: function() {
      this.next();
      console.log("watcher",this.response)
    }
  },

  computed: {
  },

  methods: {
    // random() {
    //   return shuffle(this.response.map(img => img.link));
    // },

    next() {
      console.log("next res",this.response)
      this.currentIndex+= 2;
      if (this.currentIndex >= this.response.length) {
        this.currentIndex = 0;
      }
      this.leftImg = this.response[this.currentIndex].link;
      this.rightImg = this.response[this.currentIndex + 1].link;
    },
    // imgur() {
    //   // const ACCESS_TOKEN=`7212c5e90cfd58bb57682ebc54f1bb683a25ceff`
    //   // const REFRESH_TOKEN=`2fea5ac4978b48c4e91c543f8f9c45359b7013c4`
    //   // const CLIENT_SECRET=`9657c0de1ad6037a4b6f209b5660236c98210395`
    //   const CLIENT_ID=`6e79d957303ffff`
    //   let that = this

    //   return axios.get("https://api.imgur.com/3/album/MsAJctm/images", {headers: {"Authorization" : "Client-ID "+ CLIENT_ID}})
    //     .then(function (result) {
    //         that.response = result.data.data;
    //         that.isLoading = false;
    //         console.log("vue data response", that.response);
    //         shuffle();
    //         that.next();
    //       })
    //     .catch(function (error) {
    //       console.log('error',error);
    //     })
    // },

  },
};
</script>
<style scoped>

* {
  box-sizing: border-box;
}
img {
   width: 100%;
}

nav {
  font-family: 'Oswald', sans-serif;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width:100%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width:100%;
  opacity: 0;
}

.slider-btn {
  height: 3px;
  width: 100%;
  background-color: #ccc;
  list-style: none;
  cursor: pointer;
}

.slider-btn-container:first-child {
  margin-left:0;
}
.slider-btn-container:last-child {
  margin-right:0;
}

</style>
