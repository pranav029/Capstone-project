package com.stackroute.weatherservice.controller;

import com.stackroute.weatherservice.data.WeatherData;
import com.stackroute.weatherservice.service.WeatherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/weather")
public class WeatherController {

    private final WeatherService weatherService;

    @Autowired
    public WeatherController(WeatherService weatherService) {
        this.weatherService = weatherService;
    }

    @GetMapping("/{address}")
    public WeatherData getWeatherDataForAddress(@PathVariable String address) {
        return weatherService.getWeatherDataForAddress(address);
    }
}
