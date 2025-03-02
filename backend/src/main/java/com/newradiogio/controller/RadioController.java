package com.newradiogio.controller;

import com.newradiogio.model.Radio;
import com.newradiogio.repository.RadioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

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

    @PutMapping("/{id}")
    public Radio updateRadio(@PathVariable String id, @RequestBody Radio radioDetails) {
        Optional<Radio> optionalRadio = radioRepository.findById(id);
        if (!optionalRadio.isPresent()) {
            throw new RuntimeException("Radio not found with id " + id);
        }
        Radio radio = optionalRadio.get();
        radio.setName(radioDetails.getName());
        radio.setMainUrl(radioDetails.getMainUrl());
        radio.setUrl1(radioDetails.getUrl1());
        radio.setUrl2(radioDetails.getUrl2());
        radio.setUrl3(radioDetails.getUrl3());
        return radioRepository.save(radio);
    }
}
