package com.stackroute.sportsarenadetailsservice.dto.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ResponseDto<T> {
    Boolean success;
    String message;
    T data;
    String error;
}
