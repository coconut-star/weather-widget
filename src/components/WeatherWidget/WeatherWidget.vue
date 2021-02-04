<template>
  <div v-coverflow v-if="forecastList.length > 0">
    <weather-card
      v-for="forecast in forecastList"
      :key="forecast.dt"
      :forecastData="forecast"
      :cityData="cityData"
    ></weather-card>
  </div>
</template>

<script>
import coverflow from "@/directives/coverflow";
import WeatherCard from "./WeatherCard.vue";
import { weatherService } from "@/api/weather.js";
export default {
  directives: {
    coverflow,
  },
  components: {
    WeatherCard,
  },
  data() {
    return {
      coverIndex: 0,
      forecastList: [],
      cityData:{ "name": "N/A"},
    };
  },
  mounted() {
    weatherService.getForcastData().then((res) => {
      let dataList = res.data.list;
      this.cityData = res.data.city;
      let newDt = 0;
      //console.log(this);
      for (let item of dataList) {
        if (item.dt - newDt >= 24 * 3600) {
          newDt = item.dt;
          item.title = item.dt_txt;
          
          this.forecastList.push(item);
        }
      }
      //console.log(forecastList);
    });
  },
  props: {
    width: {
      type: Number,
      default: 980,
    },
    bgColor: {
      type: String,
      default: "transparent",
    },
    index: {
      type: Number,
      default: 0,
    },
    coverWidth: {
      type: Number,
      default: 200,
    },
    coverHeight: {
      type: Number,
      default: 0,
    },
    coverSpace: {
      type: Number,
      default: 50,
    },
    coverShadow: {
      type: Boolean,
      default: false,
    },
    coverFlat: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleChange(index) {
      this.coverIndex = index;
      this.$emit("change", index);
    },
  },
};
</script>

<style>
</style>