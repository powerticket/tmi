package com.tmi.controller.report;

// import com.tmi.controller.project.ProjectNotFoundException;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
public class reportNotFoundAdvice {
    // @ResponseBody
    // @ExceptionHandler(AppNotFoundException.class)
    // @ResponseStatus(HttpStatus.NOT_FOUND)
    // String testJobNotFoundHandler(AppNotFoundException ex) {
    // return ex.getMessage();
    // }
}
