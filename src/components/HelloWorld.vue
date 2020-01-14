<template>
<main class="max-w-5xl mx-auto">
  <nav class="flex justify-between mt-6 mb-24">
    <div>
      <a href="#" class="uppercase text-2xl font-bold">Caroline</a>
    </div>
    <div>
      <a href="#" class="uppercase mx-20 text-xl font-bold">Work</a>
      <a href="#" class="uppercase text-xl font-bold">About</a>
    </div>
  </nav>

  <section class="h-screen w-full">
    <div class="flex justify-between items-center">
      <!-- <transition-group name="fade" tag="div"> -->
        <div v-for="i in [currentIndex]" :key="i" class="shadow-md">
          <img :src="currentImgLeft" style="width:500px; height:500px;" alt="left" />
        </div>
      <!-- </transition-group> -->
      <!-- <transition-group name="fade" tag="div"> -->
        <div v-for="i in [currentIndex]" :key="i" class="shadow-md">
          <img :src="currentImgRight" style="width:500px; height:500px;" alt="right" />
        </div>
      <!-- </transition-group> -->
    </div>
    <div class="flex justify-between my-4">
      <!-- <a class="prev" @click="prev" href="#">&#10094; Previous</a>
      <a class="next" @click="next" href="#">&#10095; Next</a> -->
      <div v-for="i in art" :key="i" @click="next" class="slider-btn-container shadow-md w-full mx-2">
        <li class="slider-btn shadow" ></li>
      </div>
    </div>


  </section>

</main>
</template>

<script>
export default {
  name: "HelloWorld",
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
      currentIndex: 0
    }
  },
  mounted: function() {
    // this.startSlide();
  },
  methods: {
    // startSlide: function() {
    //   this.timer = setInterval(this.next, 4000);
    // },

    next: function() {
      this.currentIndex += 1;
    },
    prev: function() {
      this.currentIndex -= 1;
    }
  },
  computed: {
    currentImgLeft: function() {
      return "images/art/" + [Math.floor(Math.random() * this.art.length)] + ".jpg";
    },
    currentImgRight: function() {
      return "images/art/" + [Math.floor(Math.random() * this.art.length + 1)] + ".jpg";
    }
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
