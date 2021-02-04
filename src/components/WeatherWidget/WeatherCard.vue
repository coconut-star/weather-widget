<template>
  <div class="card">
    <div class="day">{{ day }}</div>
    <div class="timestamp">{{ formattedDatetime }}</div>
    <div class="main-weather">{{forecastData.weather[0].main}}</div>
    <div class="desc-weather">{{forecastData.weather[0].description}}</div>
    <div class="temp-line">
        <img class="weather-icon" :src="'http://openweathermap.org/img/wn/'+forecastData.weather[0].icon+'@2x.png'" >
        <span class="temp">{{temp}}</span>
    </div>
    <div class="city">
        {{cityData.name}}
    </div>

  </div>
</template>

<script>
let weekdays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
export default {
  props: ["forecastData", "cityData"],
  computed: {
    day() {
      let dayIndex = this.date.getDay();
      return weekdays[dayIndex];
    },
    date() {
      return new Date(this.forecastData.dt * 1000);
    },
    formattedDatetime() {
      return this.date.toLocaleString()
    },
    temp() {
        return parseInt(this.forecastData.main.temp) + "℃"
    }
  },
};
</script>

<style>
.card {
  width: 200px;
  height: 300px;
  padding: 1.5rem;
  box-sizing: border-box;
  background: white;
  border-radius: 20px;
  text-align: left;
  -moz-box-shadow:0px 9px 6px #333333; -webkit-box-shadow:0px 9px 6px #333333; box-shadow:0px 9px 6px #333333;
}

.day {
    font-size: 1.75rem;
    font-weight: 500;
}

.timestamp {
    margin-top:0.25rem;
    font-size: 0.5rem;
}

.main-weather {
    font-weight: 700;
    margin-top: 2rem;
}

.desc-weather {
    margin-top: 0.25rem;
    font-weight: 700;
}

.temp-line {
    margin-top: 1.5rem;
}

.weather-icon {
    vertical-align: middle;
    width: 4rem;
    height: 4rem;
}

.temp {

    display: inline-block;
    vertical-align: top;
    line-height: 4rem;
    font-size: 2rem;
}

.city {
    margin-top:1.5rem;
}
</style>