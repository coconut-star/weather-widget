import axios from 'axios'

export const weatherService = {
    getForcastData() {
        return axios.get("http://api.openweathermap.org/data/2.5/forecast?q=sydney&appid=7b99c917befd96c4ae9c47daedf155c8&units=metric")
    }
}