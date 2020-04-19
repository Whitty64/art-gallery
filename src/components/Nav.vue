<template>
  <nav class="flex justify-between bg-black p-4">
    <div>
      <router-link :to="{name: 'home', params: { isLoading: isLoading } }" id="home" class="uppercase text-white text-2xl font-bold">Caroline</router-link>
    </div>
    <div>
      <router-link :to="{name: 'gallery', params: { response: response, isLoading: isLoading } }" id="work" class="px-8 uppercase text-white text-xl font-bold">Work</router-link>
      <router-link :to="{name: 'about', params: { } }" id="about" class="uppercase text-white text-xl font-bold">About</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav",
  props: [
    "response",
    "isLoading"
  ],
  data() {
    return {
    }
  },
  mounted: function() {
  },
  methods: {
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

</style>
