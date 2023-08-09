package com.stackroute.sportsarenadetailsservice.exceptions;

public class FileUploadFailedException extends RuntimeException {
    public FileUploadFailedException() {
        super("File upload failed");
    }
}
