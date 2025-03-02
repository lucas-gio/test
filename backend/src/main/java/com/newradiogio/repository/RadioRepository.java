package com.newradiogio.repository;

import com.newradiogio.model.Radio;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RadioRepository extends MongoRepository<Radio, String> {
}
