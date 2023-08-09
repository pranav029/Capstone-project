package com.stackroute.sportsarenadetailsservice.configs;

import com.cloudinary.Cloudinary;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.HashMap;
import java.util.Map;

@Configuration
public class ImageUploadConfig {

    @Value("cloud.name")
    public static String CLOUD_NAME;

    @Value("api.key")
    public static String API_KEY;

    @Value("api.secret")
    public static String API_SECRET;

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
