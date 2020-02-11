<template>
    <section id="work-page" class="hidden">
        hi there
        <div v-for="i in [art]" :key="i.index">
            <!-- <img :src="images/art/"+i+".jpg" alt=""> -->
            <!-- <div class="shadow-md m-1 bg-cover" v-bind:style="{ backgroundImage: 'url('"images/art/"+i+".jpg"')' }" style="width: 500px; height:500px;"></div> -->
        </div>
    </section>
</template>

<script>
export default {
  name: "Gallery",
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
    }
  },
  props: {
  title: String,
},
  mounted: function() {

  },
  methods: {
    img: function() {
        this.img = ("images/art/" +  + ".jpg");
    },
    next: function() {
      this.random();
      // Does not check if current left image is equal to the new left image
      while (this.l === this.r) {
        this.random();
        console.log("equal")
      }


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
