package com.newradiogio.service;

import com.newradiogio.model.Radio;
import com.newradiogio.repository.RadioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RadioService {
    @Autowired
    private RadioRepository radioRepository;

    public List<Radio> findAll() {
        return radioRepository.findAll();
    }

    public Optional<Radio> findById(String id) {
        return radioRepository.findById(id);
    }

    public Radio save(Radio radio) {
        return radioRepository.save(radio);
    }

    public List<Radio> saveAll(List<Radio> radios) {
        return radioRepository.saveAll(radios);
    }

    public void deleteById(String id) {
        radioRepository.deleteById(id);
    }

    // Additional methods for filtering by country, language, genre, etc.
}
