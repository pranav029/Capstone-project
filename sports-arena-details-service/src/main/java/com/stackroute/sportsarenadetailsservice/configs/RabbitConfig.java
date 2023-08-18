package com.stackroute.sportsarenadetailsservice.configs;

import org.springframework.amqp.core.*;
import org.springframework.amqp.rabbit.connection.ConnectionFactory;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.amqp.support.converter.Jackson2JsonMessageConverter;
import org.springframework.amqp.support.converter.MessageConverter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RabbitConfig {
    @Value("${thrive.notification.exchange}")
    private String cExchange;
    @Value("${thrive.notification.routing.key}")
    private String cKey;

    @Value("${thrive.notification.exchange}")
    void setExchange(String exchange) {
        EXCHANGE = exchange;
    }

    @Value("${thrive.notification.routing.key}")
    void setKey(String key) {
        ROUTING_KEY = key;
    }

    public final static String QUEUE = "thrive-notification-queue";
    public static String EXCHANGE;
    public static String ROUTING_KEY;

    @Bean
    public Queue provideQueue() {
        return new Queue(QUEUE);
    }

    @Bean
    public TopicExchange provideExchange() {
        return new TopicExchange(EXCHANGE);
    }

    @Bean
    public Binding bindQueueToExchange(Queue queue, TopicExchange exchange) {
        return BindingBuilder
                .bind(queue)
                .to(exchange)
                .with(ROUTING_KEY);
    }

    @Bean
    public MessageConverter messageConverter() {
        return new Jackson2JsonMessageConverter();
    }

    @Bean
    public AmqpTemplate amqpTemplate(ConnectionFactory connectionFactory) {
        RabbitTemplate rabbitTemplate = new RabbitTemplate(connectionFactory);
        rabbitTemplate.setMessageConverter(messageConverter());
        return rabbitTemplate;
    }
}
