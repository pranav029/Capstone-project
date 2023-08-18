package com.stackroute.weatherservice.data;

public class WeatherData {

    private double temperature;
    private double maxTemperature;
    private double minTemperature;
    private String weatherCondition;
    private double rainingChance;

    // Getters and setters for temperature, maxTemperature, minTemperature, weatherCondition, and rainingChance

    public double getTemperature() {
        return temperature;
    }

    public void setTemperature(double temperature) {
        this.temperature = temperature;
    }

    public double getMaxTemperature() {
        return maxTemperature;
    }

    public void setMaxTemperature(double maxTemperature) {
        this.maxTemperature = maxTemperature;
    }

    public double getMinTemperature() {
        return minTemperature;
    }

    public void setMinTemperature(double minTemperature) {
        this.minTemperature = minTemperature;
    }

    public String getWeatherCondition() {
        return weatherCondition;
    }

    public void setWeatherCondition(String weatherCondition) {
        this.weatherCondition = weatherCondition;
    }

    public double getRainingChance() {
        return rainingChance;
    }

    public void setRainingChance(double rainingChance) {
        this.rainingChance = rainingChance;
    }
}
