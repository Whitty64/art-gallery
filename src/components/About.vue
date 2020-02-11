<template>
    <section id="about" class="hidden">
        About
    </section>
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

  },
  methods: {
    page : function() {
        // let home = document.getElementB
        if(event.target.id == "home"){
            console.log("home")
            this.currentPage = "home"
            document.getElementById("home-page")
        }
        else if (event.target.id == "work") {
            console.log("work")
            this.currentPage = "work"
            document.getElementById("work-page")
        }
        else if (event.target.id == "about") {
            console.log("about")
            this.currentPage = "about"
            document.getElementById("about-page")
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
