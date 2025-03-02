package com.newradiogio.controller;

import com.newradiogio.model.Radio;
import com.newradiogio.repository.RadioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/radios")
public class RadioController {

    @Autowired
    private RadioRepository radioRepository;

    @GetMapping
    public List<Radio> getAllRadios() {
        return radioRepository.findAll();
    }

    @PostMapping
    public Radio createRadio(@RequestBody Radio radio) {
        return radioRepository.save(radio);
    }

    @DeleteMapping("/{id}")
    public void deleteRadio(@PathVariable String id) {
        radioRepository.deleteById(id);
    }
}
