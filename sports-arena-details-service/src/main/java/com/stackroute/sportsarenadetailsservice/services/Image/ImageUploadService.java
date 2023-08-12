package com.stackroute.sportsarenadetailsservice.services.Image;

import com.stackroute.sportsarenadetailsservice.dto.request.GroundDto;
import com.stackroute.sportsarenadetailsservice.dto.request.ResponseDto;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;


public interface ImageUploadService {
    ResponseDto<GroundDto> saveImage(MultipartFile file, String groundId);
}
