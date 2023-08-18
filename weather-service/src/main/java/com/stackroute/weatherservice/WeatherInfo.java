package com.stackroute.weatherservice;

import com.fasterxml.jackson.annotation.JsonProperty;

public class WeatherInfo {

    @JsonProperty("description")
    private String description;

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
// Getters and setters for description
}
