<template>
  <section id="home-page" :class="{block: isActive}" class="max-w-5xl h-full w-full mx-auto">
    <!-- <h1 v-for="item in mapper" v-bind:key="item.id">{{item}}</h1> -->
    <div class="flex items-center justify-center my-8 md:my-16">
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
import {shuffle} from "lodash-es";

export default {
  name: "Home",
  //  props: {
  //   method: { type: Function },
  //   response: Array,
  // },
  props: [
    "response",
    "isLoading",
  ],
  data() {
    return {
      timer: null,
      currentIndex: 0,
      leftImg:"",
      rightImg:"",
      // value:"i am a value",
    }
  },

  mounted() {
    // this.leftImg = this.response.link;
    // this.rightImg = this.response.link;
    // console.log("home res",this.response)
    // this.$emit("map-response",this.value)
    this.next();
  },
  watch: {
    // isLoading() {
    //   console.log("isloading changed")
    //   this.mapResponse();
    // }
  },
    computed: {
    random() {
      return shuffle(this.response.map(img => img.link));
    },
  },
  methods: {
    next() {
      this.currentIndex+= 2;
      if (this.currentIndex >= this.random.length) {
        this.currentIndex = 0;
      }
      this.leftImg = this.random[this.currentIndex];
      this.rightImg = this.random[this.currentIndex + 1];
    },

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
