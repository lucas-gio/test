package com.newradiogio.config;

import com.newradiogio.model.Radio;
import com.newradiogio.repository.RadioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;

@Component
public class DataInitializer implements CommandLineRunner {

    @Autowired
    private RadioRepository radioRepository;

    @Override
    public void run(String... args) throws Exception {
        initializeRadios();
    }

    private void initializeRadios() {
        if (radioRepository.count() == 0) {
            List<Radio> radios = Arrays.asList(
                new Radio("1", "Radio One", "https://mainurl.com/radio1", "https://url1.com/radio1", "https://url2.com/radio1", "https://url3.com/radio1"),
                new Radio("2", "Radio Two", "https://mainurl.com/radio2", "https://url1.com/radio2", "https://url2.com/radio2", "https://url3.com/radio2"),
                new Radio("3", "Radio Three", "https://mainurl.com/radio3", "https://url1.com/radio3", "https://url2.com/radio3", "https://url3.com/radio3")
                // Add more radios as needed
            );
            radioRepository.saveAll(radios);
        }
    }
}
