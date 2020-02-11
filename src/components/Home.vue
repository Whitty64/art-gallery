<template>
  <section id="home-page" class="max-w-5xl h-full w-full mx-auto">
    <div class="flex items-center justify-center my-8 md:my-16">
      <!-- <transition-group name="fade" tag="div"> -->
        <div v-for="i in [art]" :key="i.index" class="shadow-md m-1 bg-cover" v-bind:style="{ backgroundImage: 'url(' + leftImg + ')' }" style="width: 500px; height:500px;"></div>
      <!-- </transition-group> -->
      <!-- <transition-group name="fade" tag="div"> -->
        <div v-for="i in [art]" :key="i.index" class="shadow-md m-1 bg-cover" v-bind:style="{ backgroundImage: 'url(' + rightImg + ')' }" style="width: 500px; height:500px;"></div>
      <!-- </transition-group> -->
    </div>
    <div class="flex justify-between">
      <div v-for="i in art" :key="i" @click="next()" class="slider-btn-container shadow-md w-full mx-2">
        <li class="slider-btn shadow" ></li>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      art: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
      ],
      timer: null,
      currentIndex: 0,
      leftImg:"",
      rightImg:"",
      l:null,
      r:null,
    }
  },
  mounted: function() {
    this.leftImg = ("images/art/" + 1 + ".jpg");
    this.rightImg = ("images/art/" + 2 + ".jpg");
  },
  methods: {
    random : function() {
      this.l = this.art[Math.floor(Math.random() * this.art.length)];
      this.r = this.art[Math.floor(Math.random() * this.art.length)];
    },
    next: function() {
      this.random();
      // Does not check if current left image is equal to the new left image
      while (this.l === this.r) {
        this.random();
        console.log("equal")
      }
      this.leftImg = ("images/art/" + this.l + ".jpg");
      this.rightImg = ("images/art/" + this.r + ".jpg");

    },
  },
  computed: {

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
