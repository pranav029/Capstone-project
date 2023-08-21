package com.stackroute.sportsarenadetailsservice.services.Image;

import com.cloudinary.Cloudinary;
import com.stackroute.sportsarenadetailsservice.dto.request.GroundDto;
import com.stackroute.sportsarenadetailsservice.dto.request.ResponseDto;
import com.stackroute.sportsarenadetailsservice.entities.Ground;
import com.stackroute.sportsarenadetailsservice.exceptions.FileUploadFailedException;
import com.stackroute.sportsarenadetailsservice.exceptions.GroundNotFoundException;
import com.stackroute.sportsarenadetailsservice.repositories.GroundRepository;
import com.stackroute.sportsarenadetailsservice.utilities.MapperUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Map;
import java.util.UUID;

@Service
public class ImageUploadServiceImpl implements ImageUploadService {
    @Autowired
    private Cloudinary cloudinary;

    @Autowired
    private GroundRepository groundRepository;

    @Override
    public ResponseDto<GroundDto> saveImage(MultipartFile file, String groundId) {
        Ground ground = groundRepository.findByGroundId(groundId).orElseThrow(() -> new GroundNotFoundException(groundId));
        if (ground.getGroundImageUrl() != null && !ground.getGroundImageUrl().isBlank()) {
            deleteImage(ground.getGroundImageUrl());
        }
        String url = uploadAndGetUrl(file, groundId);
        ground.setGroundImageUrl(url);
        Ground saved = groundRepository.save(ground);
        return new ResponseDto<>(true, "Image uploaded successfully", MapperUtil.groundToGroundDto(ground), null);
    }

    private String uploadAndGetUrl(MultipartFile file, String name) {
        try {
            Map data = cloudinary.uploader().upload(file.getBytes(), Map.of("public_id", "thrive-sports-arena/" + name + "-" + UUID.randomUUID()));
            return ((Map<String, String>) data).get("url");
        } catch (IOException e) {
            throw new FileUploadFailedException();
        }
    }

    private void deleteImage(String url) {
        if(url==null)return;
        if(url.isBlank())return;
        if(url.equals("dummy url"))return;
        String fileName = url.split("thrive-sports-arena")[1].split("/")[1];
        fileName = fileName.split("\\.")[0];
        try {
            cloudinary.uploader().destroy("thrive-sports-arena/" + fileName, Map.of());
        } catch (IOException e) {
            throw new FileUploadFailedException();
        }
    }
}
