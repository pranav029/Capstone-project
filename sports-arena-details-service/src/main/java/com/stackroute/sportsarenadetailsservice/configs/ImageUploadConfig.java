package com.stackroute.sportsarenadetailsservice.configs;

import com.cloudinary.Cloudinary;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

import java.util.HashMap;
import java.util.Map;

@Configuration
public class ImageUploadConfig {

    @Value("${thrive.storage.cloud.name}")
    private  String CLOUD_NAME;

    @Value("${thrive.storage.api.key}")
    private String API_KEY;

    @Value("${thrive.storage.api.secret}")
    private  String API_SECRET;

    @Bean
    public Cloudinary provideCloudinary() {

        return new Cloudinary(getConfigs());
    }

    private Map getConfigs() {
        Map configs = new HashMap();
        configs.put("cloud_name", CLOUD_NAME);
        configs.put("api_key", API_KEY);
        configs.put("api_secret", API_SECRET);
        configs.put("secure", true);
        return configs;
    }
}
