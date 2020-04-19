<template>
    <section id="work-page">
      <section id="gallery ">
        <div class="container modal-vue mx-auto px-8">
          <div class="overlay" v-if="showModal" @click="showModal = false"></div>
          <div class="modal" v-if="showModal">
            <button class="close" @click="this.showModal = false">x</button>
            <img :src="modalImg" class="m-auto">
            <h3>Title</h3>
            <p>Description</p>
          </div>
          <div id="image-gallery">
            <div class="flex flex-wrap">
              <div v-for="i in response" v-bind:key="i.index" class="w-full md:w-1/2 lg:w-1/3 p-2 image">
                <div class="img-wrapper">
                  <a @click="modal"><img :src="i.link" class="img-responsive" ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
</template>

<script>
export default {
  name: "Gallery",
  data() {
    return {
      showArt: false,
      showModal:false,
      modalImg:"",
    }
  },
  props: {
    response: Array,
    isLoading: Boolean,

  },
  mounted() {
  },
  watch: {
    response: function() {
      this.showArt = true,
      console.log("gallery watcher", this.response)
    }
  },

  methods: {
    modal(e) {
      this.showModal = true
      this.modalImg = e.target.src
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
      console.log("test", e.target.src)
    },
  },
  computed: {

  },
};

</script>

<style scoped>
* {
  box-sizing: border-box;
}

#gallery {
  padding-top: 40px;
  @media screen and (min-width: 991px) {
    padding: 60px 30px 0 30px;
  }
}

.img-wrapper {
  position: relative;
  margin-top: 15px;
  img {
    width: 100%;
  }
}
.img-overlay {
  background: rgba(0,0,0,0.7);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  i {
    color: #fff;
    font-size: 3em;
  }
}

#overlay {
  background: rgba(0,0,0,0.7);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  img {
    margin: 0;
    width: 80%;
    height: auto;
    object-fit: contain;
    padding: 5%;
    @media screen and (min-width:768px) {
        width: 60%;
    }
    @media screen and (min-width:1200px) {
        width: 50%;
    }
  }
}

#nextButton {
  color: #fff;
  font-size: 2em;
  transition: opacity 0.8s;
  &:hover {
    opacity: 0.7;
  }
  @media screen and (min-width:768px) {
    font-size: 3em;
  }
}

#prevButton {
  color: #fff;
  font-size: 2em;
  transition: opacity 0.8s;
  &:hover {
    opacity: 0.7;
  }
  @media screen and (min-width:768px) {
    font-size: 3em;
  }
}

#exitButton {
  color: #fff;
  font-size: 2em;
  transition: opacity 0.8s;
  position: absolute;
  top: 15px;
  right: 15px;
  &:hover {
    opacity: 0.7;
  }
  @media screen and (min-width:768px) {
    font-size: 3em;
  }
}
.modal-vue .overlay {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .65);
}

.modal-vue .modal {
  position: relative;
  width: 75vw;
  max-width:1000px;
  z-index: 9999;
  margin: 0 auto;
  padding: 2rem;
  background-color: #fff;
}

.modal-vue .close{
  position: absolute;
  top: 10px;
  right: 10px;
}

</style>
