<template>
  <div class="home">
    <weather-widget ></weather-widget>
  </div>
</template>

<script>
import WeatherWidget from '@/components/WeatherWidget/WeatherWidget.vue'

export default {
  name: 'Home',
  components: {
    WeatherWidget
  },
  data () {
            return {

            }
          },
}
</script>

<style>
/* .home {
    background-color: rgb(204,204,204);
    height:100%;
} */
</style>
