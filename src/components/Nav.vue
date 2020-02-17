<template>
  <nav class="flex justify-between bg-black p-4">
    <!-- <div class="w-1/2 flex justify-between text-white">
      <input class=" border-grey-500" type="text" name="" id="">
      <a href="">LINK</a>
      <a href="">LINK</a>
      <a href="">LINK</a>
      <a href="">LINK</a>
    </div>
    <div class="w-1/2 text-white text-right">
      <a href="">right</a>
      <a href="">right</a>
    </div> -->
    <div>
      <a @click="page()" id="home" href="#" class="uppercase text-white  text-2xl font-bold">Caroline</a>
    </div>
    <div>
      <a @click="page()" id="work" href="#" class="uppercase text-white mx-20 text-xl font-bold">Work</a>
      <a @click="page()" id="about" href="#" class="uppercase text-white text-xl font-bold">About</a>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
        currentPage:"home",
    }
  },
  mounted: function() {
    // document.getElementById("home-page").style.display = "block"
    document.getElementById("work-page").style.display = "none"
    document.getElementById("about-page").style.display = "none"
  },
  methods: {
    page : function() {
        // let home = document.getElementB
        if(event.target.id == "home") {
            console.log("home")
            this.currentPage = "home"
            document.getElementById("home-page").style.display = "block"
        }
        else if (event.target.id == "work") {
            console.log("work")
            this.currentPage = "work"
            document.getElementById("work-page").style.display = "block"
        }
        else if (event.target.id == "about") {
            console.log("about")
            this.currentPage = "about"
            document.getElementById("about-page").style.display = "block"
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
