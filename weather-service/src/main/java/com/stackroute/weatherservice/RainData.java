package com.stackroute.weatherservice;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RainData {

    @JsonProperty("1h")
    private Double rainVolume; // Use Double instead of double

    public Double getRainVolume() {
        return rainVolume;
    }

    public void setRainVolume(Double rainVolume) {
        this.rainVolume = rainVolume;
    }
// Getters and setters for rainVolume
}
