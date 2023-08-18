package com.stackroute.userservice.rabbitMq;

import org.springframework.amqp.core.*;
import org.springframework.amqp.rabbit.connection.ConnectionFactory;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.amqp.support.converter.Jackson2JsonMessageConverter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class MessageConfiguration {
    private String queue= "user_data_queue";
    private String exchange="user-exchange";

    @Bean
    public Queue userQueue() {
        return new Queue(queue);
    }
    @Bean
    DirectExchange exchange()
    {
        return new DirectExchange(exchange);
    }
    @Bean
    Binding binding(Queue userQueue, DirectExchange exchange) {
        return BindingBuilder.bind(userQueue).to(exchange).with("user_routing");
    }

    @Bean
    public Jackson2JsonMessageConverter jsonMessageConverter() {
        return new Jackson2JsonMessageConverter();
    }
    @Bean
    public RabbitTemplate rabbitTemplate(final ConnectionFactory connectionFactory)
    {
        RabbitTemplate rabtemp=new RabbitTemplate(connectionFactory);
        rabtemp.setMessageConverter(jsonMessageConverter());
        return rabtemp;
    }

}
