package com.stackroute.weatherservice;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

public class WeatherApiResponse {

    @JsonProperty("main")
    private WeatherMainData main;

    @JsonProperty("weather")
    private List<WeatherInfo> weather;

    @JsonProperty("rain")
    private RainData rain;

    public WeatherMainData getMain() {
        return main;
    }

    public void setMain(WeatherMainData main) {
        this.main = main;
    }

    public List<WeatherInfo> getWeather() {
        return weather;
    }

    public void setWeather(List<WeatherInfo> weather) {
        this.weather = weather;
    }

    public RainData getRain() {
        return rain;
    }

    public void setRain(RainData rain) {
        this.rain = rain;
    }
// Getters and setters for main, weather, and rain
}
