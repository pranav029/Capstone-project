package com.stackroute.notificationservice.Config;

import org.springframework.amqp.core.*;
import org.springframework.amqp.rabbit.connection.ConnectionFactory;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.amqp.support.converter.Jackson2JsonMessageConverter;
import org.springframework.amqp.support.converter.MessageConverter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RabbitmqConfig {

    public final static String QUEUE = "thrive-notification-queue";
    public static String EXCHANGE = "thrive-exchange";
    public static String ROUTING_KEY = "thrive-routing-key";


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
