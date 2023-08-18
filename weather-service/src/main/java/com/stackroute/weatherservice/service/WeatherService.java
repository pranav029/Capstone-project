package com.stackroute.weatherservice.service;

import com.stackroute.weatherservice.WeatherApiResponse;
import com.stackroute.weatherservice.data.WeatherData;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class WeatherService {

    private static final String OPEN_WEATHER_API_KEY = "f91200745372fe10c579642f4a234e66";
    private static final String OPEN_WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/weather?q=%s&appid=%s";

    public WeatherData getWeatherDataForAddress(String address) {
        String apiUrl = String.format(OPEN_WEATHER_API_URL, address, OPEN_WEATHER_API_KEY);

        RestTemplate restTemplate = new RestTemplate();
        WeatherApiResponse response = restTemplate.getForObject(apiUrl, WeatherApiResponse.class);

        if (response != null) {
            return mapApiResponseToWeatherData(response);
        }

        return null;
    }

    private WeatherData mapApiResponseToWeatherData(WeatherApiResponse response) {
        WeatherData weatherData = new WeatherData();
        double tempInKelvin = response.getMain().getTemp();
        double tempInCelsius = tempInKelvin - 273.15; // Conversion from Kelvin to Celsius
        weatherData.setTemperature(tempInCelsius);
        weatherData.setMaxTemperature(response.getMain().getTemp_max() - 273.15);
        weatherData.setMinTemperature(response.getMain().getTemp_min() - 273.15);
        weatherData.setWeatherCondition(response.getWeather().get(0).getDescription());

        // Calculate the raining chance (for example, using a simple conversion from rain volume)
        double rainVolume = 0.0;
        if (response.getRain() != null && response.getRain().getRainVolume() != null) {
            rainVolume = response.getRain().getRainVolume();
        }

        double rainingChance = rainVolume * 100; // Convert rain volume to raining chance (this can be adjusted as needed)
        weatherData.setRainingChance(rainingChance);

        return weatherData;
    }
}

